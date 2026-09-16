"use client";

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";
import Image from "@tiptap/extension-image";

const AlignedImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      align: {
        default: "center",
        parseHTML: (element) => {
          if (element.classList.contains("float-left")) return "left";
          if (element.classList.contains("float-right")) return "right";
          if (element.classList.contains("align-center")) return "center";
          return element.getAttribute("data-align") || "center";
        },
        renderHTML: (attributes) => {
          const align = attributes.align || "center";
          const alignClass =
            align === "right"
              ? "float-right"
              : align === "left"
                ? "float-left"
                : "align-center";
          return {
            "data-align": align,
            class: `article-image ${alignClass}`,
          };
        },
      },
    };
  },
});

function normalizeUrl(raw) {
  const value = String(raw || "").trim();
  if (!value) return "";
  if (
    /^https?:\/\//i.test(value) ||
    value.startsWith("mailto:") ||
    value.startsWith("/") ||
    value.startsWith("#")
  ) {
    return value;
  }
  return `https://${value}`;
}

function ToolbarButton({ active, title, onClick, children, disabled }) {
  return (
    <button
      type="button"
      className={active ? "is-active" : ""}
      title={title}
      disabled={disabled}
      onMouseDown={(e) => {
        e.preventDefault();
        if (!disabled) onClick();
      }}
    >
      {children}
    </button>
  );
}

function EditorToolbar({ editor, onInsertImage, imageBusy }) {
  const [, setToolbarTick] = useState(0);
  const [linkOpen, setLinkOpen] = useState(false);
  const [linkUrl, setLinkUrl] = useState("");
  const linkInputRef = useRef(null);

  useEffect(() => {
    if (!editor) return undefined;
    const refresh = () => setToolbarTick((n) => n + 1);
    editor.on("selectionUpdate", refresh);
    return () => {
      editor.off("selectionUpdate", refresh);
    };
  }, [editor]);

  useEffect(() => {
    if (linkOpen) {
      linkInputRef.current?.focus();
      linkInputRef.current?.select();
    }
  }, [linkOpen]);

  if (!editor) return null;

  function openLinkPopover() {
    setLinkUrl(editor.getAttributes("link").href || "");
    setLinkOpen(true);
  }

  function applyLink() {
    const href = normalizeUrl(linkUrl);
    if (!href) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();
    } else {
      editor.chain().focus().extendMarkRange("link").setLink({ href }).run();
    }
    setLinkOpen(false);
  }

  function removeLink() {
    editor.chain().focus().extendMarkRange("link").unsetLink().run();
    setLinkUrl("");
    setLinkOpen(false);
  }

  return (
    <div className="rte-toolbar">
      <ToolbarButton
        active={
          editor.isActive("paragraph") &&
          !editor.isActive("heading") &&
          !editor.isActive("bulletList") &&
          !editor.isActive("orderedList")
        }
        title="Normal"
        onClick={() => editor.chain().focus().setParagraph().run()}
      >
        Normal
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("heading", { level: 2 })}
        title="Heading"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        Heading
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("heading", { level: 3 })}
        title="Subheading"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
      >
        Subheading
      </ToolbarButton>

      <span className="rte-sep" />

      <ToolbarButton
        active={editor.isActive("bold")}
        title="Bold"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <strong>B</strong>
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("italic")}
        title="Italic"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <em>I</em>
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("underline")}
        title="Underline"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <span style={{ textDecoration: "underline" }}>U</span>
      </ToolbarButton>

      <span className="rte-sep" />

      <ToolbarButton
        active={editor.isActive("bulletList")}
        title="Bullet list"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        • List
      </ToolbarButton>
      <ToolbarButton
        active={editor.isActive("orderedList")}
        title="Numbered list"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        1. List
      </ToolbarButton>

      <div className="rte-link-wrap">
        <ToolbarButton
          active={editor.isActive("link") || linkOpen}
          title="Insert link"
          onClick={openLinkPopover}
        >
          Link
        </ToolbarButton>

        {linkOpen ? (
          <div className="rte-link-popover" role="dialog" aria-label="Insert link">
            <label>
              URL
              <input
                ref={linkInputRef}
                type="url"
                value={linkUrl}
                placeholder="https://example.com"
                onChange={(e) => setLinkUrl(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    applyLink();
                  }
                  if (e.key === "Escape") {
                    e.preventDefault();
                    setLinkOpen(false);
                    editor.chain().focus().run();
                  }
                }}
              />
            </label>
            <div className="rte-link-actions">
              <button
                type="button"
                className="btn-secondary"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => {
                  setLinkOpen(false);
                  editor.chain().focus().run();
                }}
              >
                Cancel
              </button>
              {editor.isActive("link") ? (
                <button
                  type="button"
                  className="btn-danger-link"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={removeLink}
                >
                  Remove
                </button>
              ) : null}
              <button
                type="button"
                className="btn-primary"
                onMouseDown={(e) => e.preventDefault()}
                onClick={applyLink}
              >
                Apply
              </button>
            </div>
          </div>
        ) : null}
      </div>

      <ToolbarButton
        title="Insert image in article"
        disabled={imageBusy}
        onClick={onInsertImage}
      >
        {imageBusy ? "..." : "Image"}
      </ToolbarButton>

      {editor.isActive("image") ? (
        <>
          <span className="rte-sep" />
          <ToolbarButton
            active={editor.getAttributes("image").align === "left"}
            title="Image left — text wraps on the right"
            onClick={() =>
              editor.chain().focus().updateAttributes("image", { align: "left" }).run()
            }
          >
            ← Img
          </ToolbarButton>
          <ToolbarButton
            active={editor.getAttributes("image").align === "center"}
            title="Image center — text below"
            onClick={() =>
              editor
                .chain()
                .focus()
                .updateAttributes("image", { align: "center" })
                .run()
            }
          >
            ▬ Img
          </ToolbarButton>
          <ToolbarButton
            active={editor.getAttributes("image").align === "right"}
            title="Image right — text wraps on the left"
            onClick={() =>
              editor
                .chain()
                .focus()
                .updateAttributes("image", { align: "right" })
                .run()
            }
          >
            Img →
          </ToolbarButton>
        </>
      ) : null}

      <ToolbarButton
        title="Clear formatting"
        onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()}
      >
        Tx
      </ToolbarButton>
    </div>
  );
}

const RichTextEditor = forwardRef(function RichTextEditor(
  { initialContent = "", placeholder = "Write your blog content..." },
  ref
) {
  const inlineImageInputRef = useRef(null);
  const uploadRef = useRef(async () => {});
  const [imageBusy, setImageBusy] = useState(false);

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: { levels: [2, 3] },
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        autolink: true,
        linkOnPaste: true,
        HTMLAttributes: {
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      AlignedImage.configure({
        inline: false,
        allowBase64: false,
        resize: {
          enabled: true,
          directions: ["bottom-left", "bottom-right", "top-left", "top-right"],
          minWidth: 80,
          minHeight: 80,
          alwaysPreserveAspectRatio: true,
        },
        HTMLAttributes: {
          class: "article-image",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
    ],
    content: initialContent || "",
    immediatelyRender: false,
    shouldRerenderOnTransaction: false,
    editorProps: {
      attributes: {
        class: "rte-editor ProseMirror",
      },
      handleDrop(_view, event, _slice, moved) {
        if (moved || !event.dataTransfer?.files?.length) return false;
        const file = event.dataTransfer.files[0];
        if (!file?.type?.startsWith("image/")) return false;
        event.preventDefault();
        uploadRef.current(file);
        return true;
      },
      handlePaste(_view, event) {
        const file = event.clipboardData?.files?.[0];
        if (!file?.type?.startsWith("image/")) return false;
        event.preventDefault();
        uploadRef.current(file);
        return true;
      },
    },
  });

  const uploadAndInsert = useCallback(
    async (file) => {
      if (!editor || !file) return;
      setImageBusy(true);
      try {
        const body = new FormData();
        body.append("file", file);
        const res = await fetch("/api/admin/upload", {
          method: "POST",
          body,
        });
        const data = await res.json();
        if (!res.ok) {
          console.error(data.error || "Image upload failed");
          return;
        }
        editor.chain().focus().setImage({
          src: data.url,
          alt: file.name,
          align: "center",
        }).run();
      } catch (err) {
        console.error(err);
      } finally {
        setImageBusy(false);
      }
    },
    [editor]
  );

  useEffect(() => {
    uploadRef.current = uploadAndInsert;
  }, [uploadAndInsert]);

  useImperativeHandle(
    ref,
    () => ({
      getHTML: () => editor?.getHTML() || "",
      getText: () => editor?.getText({ blockSeparator: " " })?.trim() || "",
      isEmpty: () => !editor || editor.isEmpty,
    }),
    [editor]
  );

  if (!editor) {
    return <div className="rte rte-loading">Loading editor...</div>;
  }

  return (
    <div className="rte">
      <EditorToolbar
        editor={editor}
        imageBusy={imageBusy}
        onInsertImage={() => inlineImageInputRef.current?.click()}
      />
      <EditorContent editor={editor} />
      <input
        ref={inlineImageInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        hidden
        onChange={async (e) => {
          const file = e.target.files?.[0];
          e.target.value = "";
          if (file) await uploadAndInsert(file);
        }}
      />
    </div>
  );
});

export default RichTextEditor;
