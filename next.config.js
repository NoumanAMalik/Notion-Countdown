/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
};
module.exports = {
    trailingSlash: true,
};
module.exports = nextConfig;
