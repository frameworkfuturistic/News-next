/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['picsum.photos', 'freepik.com', 'akm-img-a-in.tosshub.com'], // Add the domain(s) you want to allow
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
