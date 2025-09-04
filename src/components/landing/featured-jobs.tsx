'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import JobListingComponent, { Job } from "@/components/ui/joblisting-component";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const jobs: Job[] = [
    {
        company: 'Marques Brownlee',
        title: 'Video Editor',
        logo: (
            <Avatar className="h-12 w-12">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/mkbhd/48/48" alt="Marques Brownlee" />
                <AvatarFallback>MB</AvatarFallback>
            </Avatar>
        ),
        platform: 'YouTube',
        job_description: 'We are looking for a creative and driven Video Editor to join our team. You will be responsible for editing and implementing user interfaces for our web and mobile applications.',
        salary: 'Per project',
        location: 'New York, NY',
        remote: 'Yes',
        job_time: 'Per project',
        posted_at: '1 day ago',
        applicants: 18,
    },
    {
        company: 'Emma Chamberlain',
        title: 'Scriptwriter',
        logo: (
            <Avatar className="h-12 w-12">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/emma/48/48" alt="Emma Chamberlain" />
                <AvatarFallback>EC</AvatarFallback>
            </Avatar>
        ),
        platform: 'TikTok',
        job_description: 'Seeking an experienced Scriptwriter to work on our latest project. The ideal candidate will have strong skills in storytelling and a keen eye for detail.',
        salary: '$300-$600',
        location: 'Los Angeles, CA',
        remote: 'Yes',
        job_time: 'Per project',
        posted_at: '2 days ago',
        applicants: 12,
    },
    {
        company: 'MrBeast',
        title: 'Lead Video Editor',
        logo: (
            <Avatar className="h-12 w-12">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/mrbeast/48/48" alt="MrBeast" />
                <AvatarFallback>MB</AvatarFallback>
            </Avatar>
        ),
        platform: 'Instagram',
        job_description: 'We are in search of a talented Lead Video Editor with UI experience to help create stunning visuals for our clients. This role involves collaboration with the design team and clients to deliver high-quality work.',
        salary: '$850-$1,200',
        location: 'Greenville, NC',
        remote: 'No',
        job_time: 'Part-time',
        posted_at: '3 days ago',
        applicants: 35,
    },
     {
        company: 'PewDiePie',
        title: 'Community Manager',
        logo: (
            <Avatar className="h-12 w-12">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/pewdiepie/48/48" alt="PewDiePie" />
                <AvatarFallback>PD</AvatarFallback>
            </Avatar>
        ),
        platform: 'Discord',
        job_description: "We're hiring a Community Manager to engage with our audience and build a vibrant online community. Experience with Discord and Twitch is a plus.",
        salary: '$40k-$50k',
        location: 'Tokyo, Japan',
        remote: 'Hybrid',
        job_time: 'Full-time',
        posted_at: '4 days ago',
        applicants: 25,
    },
    {
        company: 'Lilly Singh',
        title: 'Social Media Manager',
        logo: (
            <Avatar className="h-12 w-12">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/lilly/48/48" alt="Lilly Singh" />
                <AvatarFallback>LS</AvatarFallback>
            </Avatar>
        ),
        platform: 'X',
        job_description: 'Looking for a Social Media Manager to handle content creation, scheduling, and analytics across multiple platforms. Strong writing skills required.',
        salary: '$55k-$65k',
        location: 'New York, NY',
        remote: 'No',
        job_time: 'Full-time',
        posted_at: '5 days ago',
        applicants: 22,
    },
    {
        company: 'Snapchat Spotlight',
        title: 'Content Creator',
        logo: (
            <Avatar className="h-12 w-12">
                <AvatarImage data-ai-hint="logo" src="https://picsum.photos/seed/snapchat/48/48" alt="Snapchat" />
                <AvatarFallback>S</AvatarFallback>
            </Avatar>
        ),
        platform: 'Snapchat',
        job_description: 'Seeking a creative content creator to produce engaging short-form video content for Snapchat Spotlight. Must be familiar with current trends.',
        salary: 'Performance-based',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Contract',
        posted_at: '6 days ago',
        applicants: 40,
    },
];


export function FeaturedJobs() {
    return (
        <section id="jobs" className="py-16 md:py-24">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold font-headline">Featured Job Postings</h2>
                <Link href="/jobs" className="text-primary hover:underline flex items-center gap-1">
                    VIEW ALL <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <JobListingComponent jobs={jobs} />
        </section>
    );
}
