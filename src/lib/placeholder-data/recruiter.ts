
import type { SocialPlatform } from "@/components/shared/social-icon";

export interface ScheduleItem {
    id: number;
    title: string;
    startTime: string;
    endTime: string;
    avatars: string[];
    more: number;
}

export interface RecentChat {
    id: string;
    name: string;
    avatarUrl: string;
    lastMessage: string;
    time: string;
    unread: boolean;
}

export interface Message {
    id: string;
    chatId: string;
    sender: 'recruiter' | 'candidate';
    content: string;
    timestamp: string;
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

export const recentChats: RecentChat[] = [
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
    {
        id: '5',
        name: 'Kyle Collier',
        avatarUrl: 'https://picsum.photos/seed/rr2/40/40',
        lastMessage: 'Perfect, thank you!',
        time: '2d ago',
        unread: false,
    },
];

export const messages: Message[] = [
    // Chat 1: Jermaine Kuhlman
    { id: 'msg1-1', chatId: '1', sender: 'recruiter', content: 'Hi Jermaine, thanks for applying to the Video Editor role. Your profile looks great. Could you share a link to your portfolio?', timestamp: '2024-07-30T10:00:00Z' },
    { id: 'msg1-2', chatId: '1', sender: 'candidate', content: 'Hey! Thanks for reaching out. Yes, absolutely. Here is the link: [portfolio link]', timestamp: '2024-07-30T10:02:00Z' },
    { id: 'msg1-3', chatId: '1', sender: 'recruiter', content: 'Excellent, thanks. I\'ll take a look and get back to you shortly.', timestamp: '2024-07-30T10:03:00Z' },
    { id: 'msg1-4', chatId: '1', sender: 'candidate', content: 'Sure, I can send over my portfolio right away.', timestamp: '2024-07-30T10:05:00Z' },

    // Chat 2: Sadie Yost
    { id: 'msg2-1', chatId: '2', sender: 'recruiter', content: 'Hi Sadie, we were impressed with your experience in content strategy. Are you available for a brief introductory call sometime this week?', timestamp: '2024-07-30T09:00:00Z' },
    { id: 'msg2-2', chatId: '2', sender: 'candidate', content: 'That sounds great! I am available for a call anytime Wednesday or Thursday afternoon.', timestamp: '2024-07-30T09:30:00Z' },

    // Chat 3: Ben Langworth
    { id: 'msg3-1', chatId: '3', sender: 'recruiter', content: 'Hi Ben, we loved your thumbnail designs. Would you be open to a paid test project?', timestamp: '2024-07-30T07:00:00Z' },
    { id: 'msg3-2', chatId: '3', sender: 'candidate', content: 'Thanks for reaching out! Looking forward to it.', timestamp: '2024-07-30T07:15:00Z' },

    // Chat 4: Betty Buckridge
    { id: 'msg4-1', chatId: '4', sender: 'recruiter', content: 'Hi Betty, we\'d like to schedule an interview for the Shorts Editor position. Please let us know your availability.', timestamp: '2024-07-29T15:00:00Z' },
    { id: 'msg4-2', chatId: '4', sender: 'candidate', content: 'Just sent over my availability for the interview.', timestamp: '2024-07-29T16:00:00Z' },
    
    // Chat 5: Kyle Collier
    { id: 'msg5-1', chatId: '5', sender: 'recruiter', content: 'Hi Kyle, we\'ve reviewed your application for the Creative Director role. Your experience is very impressive. We would like to move forward with the interview process.', timestamp: '2024-07-28T11:00:00Z' },
    { id: 'msg5-2', chatId: '5', sender: 'candidate', content: 'That\'s fantastic news! I\'m very excited about this opportunity.', timestamp: '2024-07-28T11:30:00Z' },
    { id: 'msg5-3', chatId: '5', sender: 'recruiter', content: 'Great. I\'ll send over a calendar invite for a call with our head of production shortly.', timestamp: '2024-07-28T11:32:00Z' },
    { id: 'msg5-4', chatId: '5', sender: 'candidate', content: 'Perfect, thank you!', timestamp: '2024-07-28T11:35:00Z' },
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

export const automatedReminders: {
    id: string;
    type: 'interview' | 'feedback' | 'followup';
    applicant: string;
    time: string;
    details: string;
}[] = [
    {
        id: '1',
        type: 'interview',
        applicant: 'Jermaine Kuhlman',
        time: 'in 30 minutes',
        details: 'Interview for Video Editor'
    },
    {
        id: '2',
        type: 'feedback',
        applicant: 'Sadie Yost',
        time: 'due today',
        details: 'Submit post-interview feedback'
    },
    {
        id: '3',
        type: 'followup',
        applicant: 'Ben Langworth',
        time: '3 days ago',
        details: 'Follow up on offer'
    },
     {
        id: '4',
        type: 'interview',
        applicant: 'Raymond Raynor',
        time: 'tomorrow at 10 AM',
        details: 'Interview for Community Manager'
    }
];
