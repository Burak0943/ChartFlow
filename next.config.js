/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Hataları yoksay ve build işlemine devam et
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Tip hatalarını yoksay ve build işlemine devam et
    ignoreBuildErrors: true,
  },
};

export default nextConfig;