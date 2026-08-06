export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.asbtubes.com/sitemap.xml",
    host: "https://www.asbtubes.com",
  };
}
