/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WEATHER_API_KEY: process.env.WEATHER_API_KEY,
        DB_USERNAME: process.env.DB_USERNAME,
        DB_PASSWORD: process.env.DB_PASSWORD
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
