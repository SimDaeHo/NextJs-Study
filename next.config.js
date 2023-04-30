/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/fruits/deleted",
        destination: "/fruits",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
