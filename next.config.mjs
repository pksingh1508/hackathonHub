/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.ibb.co'
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com'
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com'
            }
        ]
    },
    async headers() {
        return [
            {
                source: '/api/(.*)', // Apply to all routes
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*', // Adjust this to your needs
                    },
                    {
                        key: 'Access-Control-Allow-Methods',
                        value: 'GET,POST,OPTIONS', // Add methods as needed
                    },
                    {
                        key: 'Access-Control-Allow-Headers',
                        value: 'Content-Type',
                    },
                ],
            },
        ];
    },
};


export default nextConfig;
