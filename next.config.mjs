/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['example.com'], // Replace with your actual domains
      deviceSizes: [320, 420, 768, 1024, 1200],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/avif', 'image/webp'],
    },
    reactStrictMode: true,
    swcMinify: true,
  };
  
  export default nextConfig;
  