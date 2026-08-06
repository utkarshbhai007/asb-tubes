export default function manifest() {
  return {
    name: "ASB Tubes Private Limited",
    short_name: "ASB Tubes",
    description: "Leading Stainless Steel Pipes & Tubes Manufacturer in India",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a58ca",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
