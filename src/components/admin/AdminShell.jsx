"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_SECTIONS = [
  {
    title: "Content",
    items: [
      {
        href: "/admin",
        label: "Blog",
        match: (path) =>
          path === "/admin" || path.startsWith("/admin/posts"),
      },
    ],
  },
];
export default function AdminShell({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const isLogin = pathname === "/admin/login";

  async function handleLogout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  if (isLogin) {
    return children;
  }

  return (
    <div className="admin-app">
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand">
          <span className="admin-sidebar-mark">ASB</span>
          <div>
            <strong>ASB Tubes</strong>
            <small>Admin panel</small>
          </div>
        </div>

        <nav className="admin-sidebar-nav">
          {NAV_SECTIONS.map((section) => (
            <div key={section.title} className="admin-nav-section">
              <p className="admin-nav-section-title">{section.title}</p>
              <ul>
                {section.items.map((item) => {
                  const active = item.match(pathname);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`admin-nav-link${active ? " active" : ""}`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <Link href="/" className="admin-nav-link" target="_blank">
            View website
          </Link>
          <Link href="/blog" className="admin-nav-link" target="_blank">
            View blog
          </Link>
          <button type="button" className="admin-nav-link logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      <div className="admin-main">
        <div className="admin-main-inner">{children}</div>
      </div>
    </div>
  );
}
