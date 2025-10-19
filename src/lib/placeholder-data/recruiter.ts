
import type { SocialPlatform } from "@/components/shared/social-icon";

export interface ScheduleItem {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    avatars: string[];
    more: number;
}


export const recentApplicants: {
    id: string;
    name: string;
    appliedFor: string;
    avatarUrl: string;
    badge: 'Diamond' | 'Gold' | 'Silver' | 'Bronze';
    platform: SocialPlatform;
}[] = [
    {
        id: '1',
        name: 'Jermaine Kuhlman',
        appliedFor: 'Video Editor',
        avatarUrl: 'https://picsum.photos/seed/jk/40/40',
        badge: 'Gold',
        platform: 'YouTube',
    },
    {
        id: '2',
        name: 'Sadie Yost',
        appliedFor: 'Content Strategist',
        avatarUrl: 'https://picsum.photos/seed/sy/40/40',
        badge: 'Silver',
        platform: 'Twitch',
    },
    {
        id: '3',
        name: 'Ben Langworth',
        appliedFor: 'Thumbnail Designer',
        avatarUrl: 'https://picsum.photos/seed/bl/40/40',
        badge: 'Bronze',
        platform: 'Instagram',
    },
    {
        id: '4',
        name: 'Raymond Raynor',
        appliedFor: 'Community Manager',
        avatarUrl: 'https://picsum.photos/seed/rr1/40/40',
        badge: 'Gold',
        platform: 'Discord',
    },
     {
        id: '5',
        name: 'Betty Buckridge',
        appliedFor: 'Shorts Editor',
        avatarUrl: 'https://picsum.photos/seed/bb/40/40',
        badge: 'Diamond',
        platform: 'TikTok',
    },
     {
        id: '6',
        name: 'Kyle Collier',
        appliedFor: 'Creative Director',
        avatarUrl: 'https://picsum.photos/seed/rr2/40/40',
        badge: 'Diamond',
        platform: 'YouTube',
    },
];

export const activeJobs = [
    {
        id: '1',
        title: 'Senior Video Editor',
        applicants: 132,
        status: 'Active'
    },
    {
        id: '2',
        title: 'Thumbnail Designer',
        applicants: 87,
        status: 'Active'
    },
    {
        id: '3',
        title: 'Community Manager',
        applicants: 201,
        status: 'Paused'
    },
     {
        id: '4',
        title: 'Stunt Coordinator',
        applicants: 45,
        status: 'Active'
    },
];

export const scheduleItems: ScheduleItem[] = [
  { 
    id: 1, 
    title: 'Video Editor Interviews', 
    startTime: '08:00', 
    endTime: '11:00', 
    avatars: ['https://picsum.photos/seed/s1/32/32', 'https://picsum.photos/seed/s2/32/32', 'https://picsum.photos/seed/s3/32/32'],
    more: 2 
  },
  { 
    id: 2, 
    title: 'Content Strategist Onboarding', 
    startTime: '12:00', 
    endTime: '15:00', 
    avatars: ['https://picsum.photos/seed/s4/32/32', 'https://picsum.photos/seed/s5/32/32', 'https://picsum.photos/seed/s6/32/32'],
    more: 2 
  },
  { 
    id: 3, 
    title: 'Thumbnail Designer Review', 
    startTime: '08:00', 
    endTime: '11:00', 
    avatars: ['https://picsum.photos/seed/s7/32/32', 'https://picsum.photos/seed/s8/32/32', 'https://picsum.photos/seed/s9/32/32'],
    more: 2 
  }
];

export const recentChats = [
    {
        id: '1',
        name: 'Jermaine Kuhlman',
        avatarUrl: 'https://picsum.photos/seed/jk/40/40',
        lastMessage: 'Sure, I can send over my portfolio right away.',
        time: '5m ago',
        unread: true,
    },
    {
        id: '2',
        name: 'Sadie Yost',
        avatarUrl: 'https://picsum.photos/seed/sy/40/40',
        lastMessage: 'That sounds great! I am available for a call...',
        time: '1h ago',
        unread: false,
    },
    {
        id: '3',
        name: 'Ben Langworth',
        avatarUrl: 'https://picsum.photos/seed/bl/40/40',
        lastMessage: 'Thanks for reaching out! Looking forward to it.',
        time: '3h ago',
        unread: false,
    },
    {
        id: '4',
        name: 'Betty Buckridge',
        avatarUrl: 'https://picsum.photos/seed/bb/40/40',
        lastMessage: 'Just sent over my availability for the interview.',
        time: '1d ago',
        unread: true,
    },
];

export const recommendedTalent = [
    {
        id: '1',
        name: 'Sergey Dolgov',
        avatarUrl: 'https://picsum.photos/seed/tt1/40/40',
        role: 'Creative Director',
        match: 98,
        jobTitle: 'Senior Video Editor',
        jobId: '1',
    },
    {
        id: '2',
        name: 'TKG',
        avatarUrl: 'https://picsum.photos/seed/tt7/40/40',
        role: 'Thumbnail Designer',
        match: 95,
        jobTitle: 'Thumbnail Designer',
        jobId: '2',
    },
    {
        id: '3',
        name: 'Markus Black',
        avatarUrl: 'https://picsum.photos/seed/tt13/40/40',
        role: 'Community Moderator',
        match: 92,
        jobTitle: 'Community Manager',
        jobId: '3',
    },
];
