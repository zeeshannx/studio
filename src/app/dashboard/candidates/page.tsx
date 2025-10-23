import type { Talent as TalentType } from '@/components/ui/talentlisting-component';
import { SocialPlatform } from '@/components/shared/social-icon';

export interface Experience {
    title: string;
    company: string;
    description: string[];
    period: string;
}

export interface Client {
    name: string;
    logoUrl: string;
    subscribers: string;
}

export interface Review {
    clientName: string;
    clientLogoUrl: string;
    clientSubscribers: string;
    review: string;
}

export interface Timeline {
    [year: number]: {
        [month: string]: number;
    }
}

// Extend the TalentType interface to include all the new fields
export interface DetailedTalent extends TalentType {
    hourlyRate?: string;
    roles?: string[];
    experience?: Experience[];
    languageSkills?: string[];
    categories?: string[];
    clients?: Client[];
    reviews?: Review[];
    vouches?: number;
    timeline?: Timeline;
    location?: string;
    platforms?: SocialPlatform[];
    appliedFor?: string;
}


export const allTalents: DetailedTalent[] = [
    { 
        src: 'https://picsum.photos/seed/tt1/64/64', 
        name: 'Sergey Dolgov', 
        role: 'Creative Director', 
        platform: 'YouTube', 
        bio: 'Helping creators understand YouTube and achieve significant results.',
        status: 'Active',
        hireable: true,
        hourlyRate: '150$',
        roles: ['Creative Director'],
        experience: [
            {
                title: 'Senior Creative Director',
                company: 'Like Nastya',
                description: [
                    'Created a company specializing in video editing services for YouTube.',
                    'Personally hired and trained more than 10 video editors, 4 designers, and 20 voice actors.'
                ],
                period: 'Present'
            }
        ],
        languageSkills: ['English', 'Russian'],
        categories: ['Entertainment', 'Gaming', 'Kids', 'Music', 'People & Blogs', 'Shorts'],
        stats: {
            videos: 15,
            views: '3.89B',
            likes: '12.78M'
        },
        portfolio: [
            { src: 'https://picsum.photos/seed/port1/400/400', alt: 'Portfolio Image 1', verified: true, 'data-ai-hint': 'children fashion' },
            { src: 'https://picsum.photos/seed/port2/400/400', alt: 'Portfolio Image 2', 'data-ai-hint': 'child scooter' },
            { src: 'https://picsum.photos/seed/port3/400/400', alt: 'Portfolio Image 3', 'data-ai-hint': 'superhero toys' },
            { src: 'https://picsum.photos/seed/port4/400/400', alt: 'Portfolio Image 4', 'data-ai-hint': 'child gamer' },
            { src: 'https://picsum.photos/seed/port5/400/400', alt: 'Portfolio Image 5', 'data-ai-hint': 'child playing' },
            { src: 'https://picsum.photos/seed/port6/400/400', alt: 'Portfolio Image 6', 'data-ai-hint': 'children costume' },
        ],
        clients: [
            { name: 'Like Nastya', logoUrl: 'https://picsum.photos/seed/client1/64/64', subscribers: '130M' },
            { name: 'SIS vs BRO', logoUrl: 'https://picsum.photos/seed/client2/64/64', subscribers: '14.6M' }
        ],
        reviews: [
            {
                clientName: 'Like Nastya',
                clientLogoUrl: 'https://picsum.photos/seed/client1/64/64',
                clientSubscribers: '130M',
                review: "Talented and dedicated specialist, it's always a pleasure to work together!"
            }
        ],
        vouches: 6,
        location: 'Miami, FL',
        timeline: {
            2025: {},
            2024: { 'Apr': 1, 'Sep': 2 },
            2023: { 'Feb': 2, 'Mar': 1, 'Aug': 3, 'Dec': 1 }
        },
        appliedFor: 'Senior Video Editor for MrBeast'
    },
    { src: 'https://picsum.photos/seed/tt2/64/64', name: 'Thomas Beer', role: 'Channel Manager', platform: 'Twitch', bio: 'Experienced Twitch Channel Manager, skilled in community engagement, stream production, and creator collaborations. Ready to grow your channel.', vouches: 2, status: 'Active', location: 'Austin, TX', appliedFor: 'Community Manager for Twitch & Discord' },
    { src: 'https://picsum.photos/seed/tt3/64/64', name: 'Walker', role: 'Thumbnail Designer', platform: 'Instagram', bio: 'Specializing in click-worthy thumbnail designs that boost CTR. Proficient in Photoshop and current with all Instagram trends.', vouches: 0, status: 'On Hold', location: 'London, UK', appliedFor: 'Thumbnail Designer' },
    { src: 'https://picsum.photos/seed/tt4/64/64', name: 'Neox', role: 'Thumbnail Designer', platform: 'TikTok', bio: 'Creative Thumbnail Designer for TikTok, focused on creating viral, eye-catching visuals that stop the scroll. Let\'s make your content pop.', vouches: 0, status: 'Active', location: 'Berlin, DE', appliedFor: 'Thumbnail Designer' },
    { 
        src: 'https://picsum.photos/seed/tt5/64/64', 
        name: 'VANISZ WORKS', 
        role: 'Video Editor', 
        platform: 'YouTube', 
        bio: 'Professional Video Editor for YouTube, specializing in fast-paced, engaging content. Fluent in Adobe Premiere Pro and After Effects.',
        status: 'Active',
        vouches: 12,
        location: 'Remote',
        appliedFor: 'Senior Video Editor for MrBeast'
    },
    { src: 'https://picsum.photos/seed/tt6/64/64', name: 'Hald', role: 'Thumbnail Designer', platform: 'Facebook', bio: 'Results-driven Thumbnail Designer for Facebook content. I create compelling visuals that increase engagement and drive traffic.', vouches: 0, status: 'Rejected', location: 'Sydney, AU', appliedFor: 'Thumbnail Designer' },
    { src: 'https://picsum.photos/seed/tt7/64/64', name: 'TKG', role: 'Thumbnail Designer', platform: 'YouTube', bio: 'YouTube Thumbnail specialist with a proven track record of increasing view counts through compelling and high-quality design.', vouches: 8, status: 'Active', location: 'Tokyo, JP', appliedFor: 'Thumbnail Designer' },
    { 
        src: 'https://picsum.photos/seed/tt8/64/64', 
        name: 'OscarVLTR', 
        role: 'Creative Director', 
        platform: 'LinkedIn', 
        bio: 'Innovative Creative Director focused on building professional brands on LinkedIn. Expert in B2B content and corporate storytelling.',
        status: 'Active',
        vouches: 0,
        location: 'New York, NY',
        appliedFor: 'Creative Director'
    },
    { src: 'https://picsum.photos/seed/tt9/64/64', name: 'Dimcha', role: 'Thumbnail Designer', platform: 'X', bio: 'I design impactful thumbnails for X (formerly Twitter) that capture attention and communicate your message effectively in a crowded feed.', vouches: 0, status: 'Active', location: 'Remote', appliedFor: 'Thumbnail Designer' },
    { src: 'https://picsum.photos/seed/tt10/64/64', name: 'Laura Chen', role: 'Social Media Manager', platform: 'Instagram', bio: 'I help brands grow their Instagram presence through strategic content and community management. Let\'s create something beautiful together.', vouches: 3, status: 'On Hold', location: 'Paris, FR', appliedFor: 'Social Media Manager (X & Instagram)' },
    { src: 'https://picsum.photos/seed/tt11/64/64', name: 'David Lee', role: 'Podcast Producer', platform: 'YouTube', bio: 'From audio engineering to content strategy, I produce high-quality podcasts that captivate listeners and build loyal audiences on YouTube.', vouches: 0, status: 'Active', location: 'Toronto, CA', appliedFor: 'Podcast Producer & Audio Engineer' },
    { src: 'https://picsum.photos/seed/tt12/64/64', name: 'Aisha Khan', role: 'UGC Content Creator', platform: 'TikTok', bio: 'Specializing in authentic and engaging user-generated style content for TikTok. I help brands connect with Gen Z.', vouches: 0, status: 'Rejected', location: 'Dubai, AE', appliedFor: 'Shorts Editor' },
    { src: 'https://picsum.photos/seed/tt13/64/64', name: 'Markus Black', role: 'Discord Community Moderator', platform: 'Discord', bio: 'Building safe, active, and engaging communities on Discord. Experienced in moderation, event planning, and bot management.', vouches: 21, status: 'Active', location: 'Remote', appliedFor: 'Community Manager for Twitch & Discord' },
    { 
        src: 'https://picsum.photos/seed/tt14/64/64', 
        name: 'Elena Petrova', 
        role: 'OF Account Manager', 
        platform: 'OnlyFans', 
        bio: 'Discreet and professional account manager for OnlyFans creators. I handle content scheduling, promotions, and fan engagement.',
        status: 'Active',
        vouches: 0,
        location: 'Remote',
        appliedFor: 'Account Manager'
    },
    { src: 'https://picsum.photos/seed/tt15/64/64', name: 'Jin Park', role: 'Short-form Video Editor', platform: 'Snapchat', bio: 'Expert in creating fast-paced, attention-grabbing videos for Snapchat Spotlight and other short-form platforms.', vouches: 0, status: 'Active', location: 'Seoul, KR', appliedFor: 'Shorts Editor' },
    { src: 'https://picsum.photos/seed/tt16/64/64', name: 'Wes', role: 'Video Editor', platform: 'YouTube', bio: 'Versatile video editor with experience in long-form and short-form content across multiple platforms.', vouches: 5, status: 'Active', location: 'Los Angeles, CA', appliedFor: 'Senior Video Editor for MrBeast' },
    { src: 'https://picsum.photos/seed/tt17/64/64', name: 'Rubi', role: 'YouTube Strategist', platform: 'YouTube', bio: 'Data-driven YouTube strategist helping channels optimize for growth and revenue.', vouches: 0, status: 'On Hold', location: 'Mexico City, MX', appliedFor: 'Content Strategist' },
    { src: 'https://picsum.photos/seed/tt18/64/64', name: 'Craftify Productions', role: 'Creative Director', platform: 'YouTube', bio: 'Full-service creative production house for ambitious YouTube channels.', vouches: 1, status: 'Active', location: 'Remote', appliedFor: 'Creative Director' },
    { src: 'https://picsum.photos/seed/tt19/64/64', name: 'Amagi Productions', role: 'Video Editor', platform: 'YouTube', bio: 'Specializing in cinematic and documentary-style video editing for YouTubers.', vouches: 0, status: 'Rejected', location: 'Remote', appliedFor: 'Senior Video Editor for MrBeast' },
    { src: 'https://picsum.photos/seed/tt20/64/64', name: 'Vuk Sretenovic', role: 'Video Editor', platform: 'YouTube', bio: 'Video editor with a knack for viral, meme-worthy content.', vouches: 0, status: 'Active', location: 'Belgrade, RS', appliedFor: 'Senior Video Editor for MrBeast' },
    { src: 'https://picsum.photos/seed/tt21/64/64', name: 'Pat Gostek', role: 'YouTube Strategist', platform: 'YouTube', bio: 'Helping creators build sustainable careers on YouTube through smart strategy.', vouches: 9, status: 'Active', location: 'Warsaw, PL', appliedFor: 'Content Strategist' },
    {
        src: 'https://picsum.photos/seed/tt22/64/64',
        name: 'Maria Garcia',
        role: 'Video Editor',
        bio: 'Bilingual video editor with a passion for storytelling and cinematic visuals. 5+ years of experience.',
        status: 'Active',
        vouches: 15,
        location: 'Madrid, ES',
        platforms: ['YouTube', 'Instagram'],
        categories: ['Vlogging', 'Travel', 'Documentary'],
        experience: [{ title: 'Senior Editor', company: 'Viajes Espectaculares', description: ['Edited weekly travel vlogs.'], period: '2020-2023' }],
        appliedFor: 'Senior Video Editor for MrBeast'
    },
    {
        src: 'https://picsum.photos/seed/tt23/64/64',
        name: 'Kenichi Tanaka',
        role: 'Thumbnail Designer',
        bio: 'Specializing in anime and gaming-style thumbnails with high CTR. My designs grab attention.',
        status: 'On Hold',
        vouches: 3,
        location: 'Osaka, JP',
        platforms: ['YouTube', 'Twitch'],
        categories: ['Gaming', 'Anime', 'Entertainment'],
        appliedFor: 'Thumbnail Designer'
    },
    {
        src: 'https://picsum.photos/seed/tt24/64/64',
        name: 'Fatima Al-Sayed',
        role: 'Social Media Manager',
        bio: 'Expert in luxury brand management on social media. Grew a fashion account by 300% in one year.',
        status: 'Rejected',
        vouches: 0,
        location: 'Doha, QA',
        platforms: ['Instagram', 'TikTok', 'Snapchat'],
        categories: ['Fashion', 'Lifestyle', 'Luxury'],
        appliedFor: 'Social Media Manager (X & Instagram)'
    },
    {
        src: 'https://picsum.photos/seed/tt25/64/64',
        name: 'John Smith',
        role: 'Video Editor',
        bio: 'Fast and reliable editor for reaction channels and commentary content. Quick turnarounds.',
        status: 'Active',
        vouches: 33,
        location: 'Remote',
        platforms: ['YouTube'],
        experience: [{ title: 'Junior Editor', company: 'React Universe', description: ['Daily video edits'], period: '2022-Present' }],
        categories: ['Commentary', 'Gaming'],
        appliedFor: 'Senior Video Editor for MrBeast'
    }
];

// Add this to your talentlisting-component.ts as well to handle the detailed data
export interface Talent extends TalentType {
    hourlyRate?: string;
    roles?: string[];
    experience?: Experience[];
    languageSkills?: string[];
    categories?: string[];
    clients?: Client[];
    reviews?: Review[];
    vouches?: number;
    timeline?: Timeline;
    location?: string;
    platforms?: SocialPlatform[];
}