import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://hackathonwallah.com/',
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: 'https://hackathonwallah.com/about',
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://hackathonwallah.com/hackathons',
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://hackathonwallah.com/hackathons/desidevcon',
            changeFrequency: 'weekly',
            priority: 0.7,
        },
        {
            url: 'https://hackathonwallah.com/register',
            changeFrequency: 'yearly',
            priority: 0.8,
        },
        {
            url: 'https://hackathonwallah.com/problems',
            changeFrequency: 'weekly',
            priority: 0.6,
        },
    ]
}
