```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Build sırasında lint hatalarını görmezden gel
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Build sırasında type hatalarını görmezden gel (Sadece acil durum için)
    ignoreBuildErrors: true,
  }
};

export default nextConfig;