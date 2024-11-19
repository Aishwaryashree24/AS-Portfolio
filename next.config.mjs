/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
    basePath: '/AS-Portfolio',
};

export default nextConfig;
