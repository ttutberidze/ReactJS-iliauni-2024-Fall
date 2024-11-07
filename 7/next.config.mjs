/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.ferrari.com',
            port: '',
            pathname: '/**',
          },
        ],
      },
};

export default nextConfig;
