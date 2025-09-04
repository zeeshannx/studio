
import type { Talent as TalentType } from '@/components/ui/talentlisting-component';

export const allTalents: TalentType[] = [
    { 
        src: 'https://picsum.photos/seed/tt1/64/64', 
        name: 'Sergey Dolgov', 
        role: 'Creative Director', 
        platform: 'YouTube', 
        bio: 'Award-winning Creative Director with a passion for storytelling and building brands on YouTube. Expertise in content strategy and viral marketing.',
        status: 'available',
        hireable: true,
        stats: {
            videos: 15,
            views: '3.89B',
            likes: '12.78M'
        },
        portfolio: [
            { src: 'https://picsum.photos/seed/port1/400/400', alt: 'Portfolio Image 1', verified: true, 'data-ai-hint': 'children fashion' },
            { src: 'https://picsum.photos/seed/port2/400/400', alt: 'Portfolio Image 2', 'data-ai-hint': 'child scooter' },
            { src: 'https://picsum.photos/seed/port3/400/400', alt: 'Portfolio Image 3', 'data-ai-hint': 'superhero toys' },
            { src: 'https://picsum.photos/seed/port4/400/400', alt: 'Portfolio Image 4', 'data-ai-hint': 'child portrait' },
            { src: 'https://picsum.photos/seed/port5/400/400', alt: 'Portfolio Image 5', 'data-ai-hint': 'child gamer' },
            { src: 'https://picsum.photos/seed/port6/400/400', alt: 'Portfolio Image 6', 'data-ai-hint': 'children costume' },
        ]
    },
    { src: 'https://picsum.photos/seed/tt2/64/64', name: 'Thomas Beer', role: 'Channel Manager', platform: 'Twitch', bio: 'Experienced Twitch Channel Manager, skilled in community engagement, stream production, and creator collaborations. Ready to grow your channel.' },
    { src: 'https://picsum.photos/seed/tt3/64/64', name: 'Walker', role: 'Thumbnail Designer', platform: 'Instagram', bio: 'Specializing in click-worthy thumbnail designs that boost CTR. Proficient in Photoshop and current with all Instagram trends.' },
    { src: 'https://picsum.photos/seed/tt4/64/64', name: 'Neox', role: 'Thumbnail Designer', platform: 'TikTok', bio: 'Creative Thumbnail Designer for TikTok, focused on creating viral, eye-catching visuals that stop the scroll. Let\'s make your content pop.' },
    { 
        src: 'https://picsum.photos/seed/tt5/64/64', 
        name: 'VANISZ WORKS', 
        role: 'Video Editor', 
        platform: 'YouTube', 
        bio: 'Professional Video Editor for YouTube, specializing in fast-paced, engaging content. Fluent in Adobe Premiere Pro and After Effects.',
        status: 'available'
    },
    { src: 'https://picsum.photos/seed/tt6/64/64', name: 'Hald', role: 'Thumbnail Designer', platform: 'Facebook', bio: 'Results-driven Thumbnail Designer for Facebook content. I create compelling visuals that increase engagement and drive traffic.' },
    { src: 'https://picsum.photos/seed/tt7/64/64', name: 'TKG', role: 'Thumbnail Designer', platform: 'YouTube', bio: 'YouTube Thumbnail specialist with a proven track record of increasing view counts through compelling and high-quality design.' },
    { 
        src: 'https://picsum.photos/seed/tt8/64/64', 
        name: 'OscarVLTR', 
        role: 'Creative Director', 
        platform: 'LinkedIn', 
        bio: 'Innovative Creative Director focused on building professional brands on LinkedIn. Expert in B2B content and corporate storytelling.',
        status: 'available'
    },
    { src: 'https://picsum.photos/seed/tt9/64/64', name: 'Dimcha', role: 'Thumbnail Designer', platform: 'X', bio: 'I design impactful thumbnails for X (formerly Twitter) that capture attention and communicate your message effectively in a crowded feed.' },
    { src: 'https://picsum.photos/seed/tt10/64/64', name: 'Laura Chen', role: 'Social Media Manager', platform: 'Instagram', bio: 'I help brands grow their Instagram presence through strategic content and community management. Let\'s create something beautiful together.' },
    { src: 'https://picsum.photos/seed/tt11/64/64', name: 'David Lee', role: 'Podcast Producer', platform: 'YouTube', bio: 'From audio engineering to content strategy, I produce high-quality podcasts that captivate listeners and build loyal audiences on YouTube.' },
    { src: 'https://picsum.photos/seed/tt12/64/64', name: 'Aisha Khan', role: 'UGC Content Creator', platform: 'TikTok', bio: 'Specializing in authentic and engaging user-generated style content for TikTok. I help brands connect with Gen Z.' },
    { src: 'https://picsum.photos/seed/tt13/64/64', name: 'Markus Black', role: 'Discord Community Moderator', platform: 'Discord', bio: 'Building safe, active, and engaging communities on Discord. Experienced in moderation, event planning, and bot management.' },
    { 
        src: 'https://picsum.photos/seed/tt14/64/64', 
        name: 'Elena Petrova', 
        role: 'OF Account Manager', 
        platform: 'OnlyFans', 
        bio: 'Discreet and professional account manager for OnlyFans creators. I handle content scheduling, promotions, and fan engagement.',
        status: 'available'
    },
    { src: 'https://picsum.photos/seed/tt15/64/64', name: 'Jin Park', role: 'Short-form Video Editor', platform: 'Snapchat', bio: 'Expert in creating fast-paced, attention-grabbing videos for Snapchat Spotlight and other short-form platforms.' },
    { src: 'https://picsum.photos/seed/tt16/64/64', name: 'Wes', role: 'Video Editor', platform: 'YouTube', bio: 'Versatile video editor with experience in long-form and short-form content across multiple platforms.' },
    { src: 'https://picsum.photos/seed/tt17/64/64', name: 'Rubi', role: 'YouTube Strategist', platform: 'YouTube', bio: 'Data-driven YouTube strategist helping channels optimize for growth and revenue.' },
    { src: 'https://picsum.photos/seed/tt18/64/64', name: 'Craftify Productions', role: 'Creative Director', platform: 'YouTube', bio: 'Full-service creative production house for ambitious YouTube channels.' },
    { src: 'https://picsum.photos/seed/tt19/64/64', name: 'Amagi Productions', role: 'Video Editor', platform: 'YouTube', bio: 'Specializing in cinematic and documentary-style video editing for YouTubers.' },
    { src: 'https://picsum.photos/seed/tt20/64/64', name: 'Vuk Sretenovic', role: 'Video Editor', platform: 'YouTube', bio: 'Video editor with a knack for viral, meme-worthy content.' },
    { src: 'https://picsum.photos/seed/tt21/64/64', name: 'Pat Gostek', role: 'YouTube Strategist', platform: 'YouTube', bio: 'Helping creators build sustainable careers on YouTube through smart strategy.' }
];
