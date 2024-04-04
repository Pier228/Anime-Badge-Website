/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEATHER_API_KEY: process.env.WEATHER_API_KEY
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*',
                port: '',
            }
        ]
    }
}

module.exports = nextConfig
