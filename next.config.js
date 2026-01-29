/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",        // ✅ makes /out folder (static site)
  trailingSlash: true,     // ✅ helps GitHub Pages routing
  images: { unoptimized: true }, // ✅ next/image won't break on static hosting
};

module.exports = nextConfig;
