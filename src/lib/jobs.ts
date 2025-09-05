
import type { Job as JobType } from '@/components/ui/joblisting-component';

interface JobData {
  company: string;
  title: string;
  logo: {
    'data-ai-hint': string;
    src: string;
    alt: string;
    children: string;
  };
  platform: JobType['platform'];
  job_description: string;
  aboutJobDetails?: string;
  idealCandidate?: string[];
  jobRequirements?: string[];
  bonusSkills?: string[];
  details?: string[];
  skills?: { [key: string]: string[] };
  sampleVideos?: { title: string, thumbnailUrl: string }[];
  salary: string;
  location: string;
  remote: string;
  job_time: string;
  posted_at: string;
  applicants: number;
  startDate: string;
  contentFormat: string;
  language: string;
  followers: string;
  referralBonus?: string;
}

const jobsData: JobData[] = [
    {
        company: 'Marques Brownlee',
        title: 'Video Editor',
        logo: { 'data-ai-hint': "person", src: "https://yt3.ggpht.com/-lNGwllze1Xk/AAAAAAAAAAI/AAAAAAAAAAA/N6QnsHGN7Fk/s900-c-k-no/photo.jpg", alt: "Marques Brownlee", children: 'MB' },
        platform: 'YouTube',
        job_description: 'We are looking for a creative and driven Video Editor to join our team. You will be responsible for editing and implementing user interfaces for our web and mobile applications.',
        salary: '$30-$100 Per Project',
        location: 'New York, NY',
        remote: 'Yes',
        job_time: 'Per project',
        posted_at: '1 day ago',
        applicants: 18,
        startDate: 'Starts ASAP',
        contentFormat: 'Short-form',
        language: 'English',
        followers: '18.5M',
        referralBonus: '$10',
        aboutJobDetails: "Involves combining commentary, effects, transitions, and engaging captions to a specific dance, music, or trend.",
        idealCandidate: [
            "Experience editing short-form video content (portfolio or samples required)",
            "Proficiency with editing software (Final Cut Pro/Apple Motion Preferred)",
            "Strong sense of pacing, rhythm, and timing, especially for dance/music-based edits",
            "Creativity and adaptability to different styles and trends",
            "Ability to provide high quality and meet daily deadlines",
            "Able to use Topaz Video AI",
        ],
        jobRequirements: [
            "Able to create captions exactly like @dancemediaco's",
            "Edit short-form videos (10-60 seconds) optimized for YouTube Shorts",
            "Add music, sound effects, visual effects, and transitions that match current dance and TikTok/YouTube Shorts trends",
            "Cut, sync, and enhance dance clips to maximize engagement and flow",
            "Stay updated on trending formats, sounds, and editing styles across TikTok and YouTube",
            "Deliver consistent, polished edits that fit the @dancemediaco brand style",
            "Well versed with Keyframe Graphs",
            "Able to use voiceovers for commentary (Speechify Preferred)",
        ],
        bonusSkills: [
            "Motion graphics or animation (text effects, overlays, transitions)",
            "Knowledge of trending sounds, dance challenges, and TikTok/YouTube culture",
        ],
        details: [
            "Freelance/part-time with potential for ongoing work",
            "Flexible schedule but must deliver on agreed timelines",
            "Pay negotiable depending on experience and performance",
        ],
        skills: {
            "Categories": ["Commentary", "Dances", "Entertainment", "Music", "Shorts", "Trends"],
            "Styles": ["Shorts/Reels"],
            "Skills": ["Alight Motion", "Apple Motion", "Capcut", "ChatGPT", "DaVinci Resolve", "Final Cut Pro"],
        },
        sampleVideos: [
            { title: "ACE OF ADA", thumbnailUrl: "https://picsum.photos/seed/vid1/400/225" },
            { title: "Dance Edit", thumbnailUrl: "https://picsum.photos/seed/vid2/400/225" },
            { title: "Trending Moves", thumbnailUrl: "https://picsum.photos/seed/vid3/400/225" },
        ]
    },
    {
        company: 'Emma Chamberlain',
        title: 'Scriptwriter',
        logo: { 'data-ai-hint': "person", src: "https://media1.popsugar-assets.com/files/thumbor/ivPwCzKnGH1rfzP-ZwxU7mBZjKo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/05/07/790/n/1922153/tmp_aN0w1Q_1c08c95c2518faaa_GettyImages-1152470007.jpg", alt: "Emma Chamberlain", children: 'EC' },
        platform: 'TikTok',
        job_description: 'Seeking an experienced Scriptwriter to work on our latest project. The ideal candidate will have strong skills in storytelling and a keen eye for detail.',
        salary: '$300-$600',
        location: 'Los Angeles, CA',
        remote: 'Yes',
        job_time: 'Per project',
        posted_at: '2 days ago',
        applicants: 12,
        startDate: 'Starts ASAP',
        contentFormat: 'Short-form',
        language: 'English',
        followers: '12M'
    },
    {
        company: 'MrBeast',
        title: 'Lead Video Editor',
        logo: { 'data-ai-hint': "logo", src: "https://yt3.ggpht.com/-egl0BJumF1A/AAAAAAAAAAI/AAAAAAAAAAA/zk1ch1-WaY8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg", alt: "MrBeast", children: 'MB' },
        platform: 'Instagram',
        job_description: 'We are in search of a talented Lead Video Editor with UI experience to help create stunning visuals for our clients. This role involves collaboration with the design team and clients to deliver high-quality work.',
        salary: '$850-$1,200',
        location: 'Greenville, NC',
        remote: 'No',
        job_time: 'Part-time',
        posted_at: '3 days ago',
        applicants: 35,
        startDate: 'Starts ASAP',
        contentFormat: 'Long-form',
        language: 'English',
        followers: '250M'
    },
    {
        company: 'PewDiePie',
        title: 'Community Manager',
        logo: { 'data-ai-hint': "person", src: "https://i.pinimg.com/originals/7e/f7/77/7ef7776d02efd1c241bf547b0a8cb719.png", alt: "PewDiePie", children: 'PD' },
        platform: 'Discord',
        job_description: "We're hiring a Community Manager to engage with our audience and build a vibrant online community. Experience with Discord and Twitch is a plus.",
        salary: '$40k-$50k',
        location: 'Tokyo, Japan',
        remote: 'Hybrid',
        job_time: 'Full-time',
        posted_at: '4 days ago',
        applicants: 25,
        startDate: 'Next Month',
        contentFormat: 'Community Engagement',
        language: 'English',
        followers: '111M'
    },
    {
        company: 'Lilly Singh',
        title: 'Social Media Manager',
        logo: { 'data-ai-hint': "person", src: "https://yt3.googleusercontent.com/ytc/AIdro_k2Gz-713v_4s-6tG-aJzL-jYJz9-sXQ_A8s-0Z=s900-c-k-c0x00ffffff-no-rj", alt: "Lilly Singh", children: 'LS' },
        platform: 'X',
        job_description: 'Looking for a Social Media Manager to handle content creation, scheduling, and analytics across multiple platforms. Strong writing skills required.',
        salary: '$55k-$65k',
        location: 'New York, NY',
        remote: 'No',
        job_time: 'Full-time',
        posted_at: '5 days ago',
        applicants: 22,
        startDate: 'Starts ASAP',
        contentFormat: 'All',
        language: 'English',
        followers: '14.5M'
    },
    {
        company: 'Snapchat Spotlight',
        title: 'Content Creator',
        logo: { 'data-ai-hint': "logo", src: "https://picsum.photos/seed/snapchat/48/48", alt: "Snapchat", children: 'S' },
        platform: 'Snapchat',
        job_description: 'Seeking a creative content creator to produce engaging short-form video content for Snapchat Spotlight. Must be familiar with current trends.',
        salary: 'Performance-based',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Contract',
        posted_at: '6 days ago',
        applicants: 40,
        startDate: 'Immediately',
        contentFormat: 'Short-form',
        language: 'English',
        followers: 'N/A'
    },
    {
        company: 'Pokimane',
        title: 'Content Strategist',
        logo: { 'data-ai-hint': "person", src: "https://picsum.photos/seed/pokimane/48/48", alt: "Pokimane", children: 'P' },
        platform: 'Twitch',
        job_description: 'Join a leading Twitch stream as a Content Strategist. Help plan and execute content that grows our audience and engages our community.',
        salary: '$60k-$75k',
        location: 'Los Angeles, CA',
        remote: 'Hybrid',
        job_time: 'Full-time',
        posted_at: '1 week ago',
        applicants: 15,
        startDate: 'Starts ASAP',
        contentFormat: 'Livestream',
        language: 'English',
        followers: '9.3M'
    },
    {
        company: 'Dude Perfect',
        title: 'Production Assistant',
        logo: { 'data-ai-hint': "group people", src: "https://picsum.photos/seed/dudeperfect/48/48", alt: "Dude Perfect", children: 'DP' },
        platform: 'YouTube',
        job_description: 'High-energy Production Assistant needed for a top YouTube channel. Assist with shoots, manage equipment, and help bring creative ideas to life.',
        salary: '$20-$25/hr',
        location: 'Frisco, TX',
        remote: 'No',
        job_time: 'Contract',
        posted_at: '1 week ago',
        applicants: 30,
        startDate: 'This Month',
        contentFormat: 'Long-form',
        language: 'English',
        followers: '60M'
    },
    {
        company: 'Smosh',
        title: 'Writer/Producer',
        logo: { 'data-ai-hint': "logo", src: "https://picsum.photos/seed/smosh/48/48", alt: "Smosh", children: 'S' },
        platform: 'YouTube',
        job_description: 'Iconic comedy brand looking for a talented Writer/Producer to develop and create hilarious sketches and series for our YouTube audience.',
        salary: '$70k-$85k',
        location: 'Burbank, CA',
        remote: 'No',
        job_time: 'Full-time',
        posted_at: '2 weeks ago',
        applicants: 19,
        startDate: 'Next Month',
        contentFormat: 'Scripted',
        language: 'English',
        followers: '25M'
    },
    {
        company: 'Top Creator',
        title: 'OnlyFans Manager',
        logo: { 'data-ai-hint': "person", src: "https://picsum.photos/seed/of/48/48", alt: "OnlyFans Creator", children: 'OF' },
        platform: 'OnlyFans',
        job_description: 'Seeking a discreet and professional manager for a top OnlyFans account. Responsibilities include content scheduling, fan interaction, and promotion.',
        salary: 'Commission-based',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Part-time',
        posted_at: '2 weeks ago',
        applicants: 5,
        startDate: 'Immediately',
        contentFormat: 'Photo/Video',
        language: 'English',
        followers: '1.2M'
    },
    {
        company: 'Charli D\'Amelio',
        title: 'Brand Partnership Manager',
        logo: { 'data-ai-hint': "person dancing", src: "https://picsum.photos/seed/damelio/48/48", alt: "Charli D'Amelio", children: 'CD' },
        platform: 'TikTok',
        job_description: 'Manage and grow brand partnerships for a leading TikTok creator. Must have experience with influencer marketing and brand negotiations.',
        salary: '$80k-$100k',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Full-time',
        posted_at: '3 weeks ago',
        applicants: 28,
        startDate: 'Starts ASAP',
        contentFormat: 'Short-form',
        language: 'English',
        followers: '150M'
    },
    {
        company: 'Addison Rae',
        title: 'Merch Designer',
        logo: { 'data-ai-hint': "person fashion", src: "https://picsum.photos/seed/addison/48/48", alt: "Addison Rae", children: 'AR' },
        platform: 'Instagram',
        job_description: 'Creative and trend-savvy Merch Designer wanted to develop and design a new line of apparel and accessories for a major social media influencer.',
        salary: 'Per project',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Contract',
        posted_at: '1 month ago',
        applicants: 9,
        startDate: 'This Month',
        contentFormat: 'Merchandise',
        language: 'English',
        followers: '88M'
    },
];

export const allJobs = jobsData.map((job, index) => {
  const slug = `${job.company.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${job.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${index}`;
  return {
    ...job,
    id: slug,
  }
});


export const getJobById = (id: string) => {
  return allJobs.find(job => job.id === id);
}

    
    
    