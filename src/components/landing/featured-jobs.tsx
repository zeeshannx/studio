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
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/mkbhd/40/40" alt="Marques Brownlee" />
                <AvatarFallback>MB</AvatarFallback>
            </Avatar>
        ),
        platform: 'YouTube',
        job_description: 'We are looking for a creative and driven Video Editor to join our team. You will be responsible for editing and implementing user interfaces for our web and mobile applications.',
        salary: 'Per project', 
        location: 'Remote', 
        remote: 'Yes', 
        job_time: 'Per project' 
    },
    { 
        company: 'Emma Chamberlain', 
        title: 'Scriptwriter', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/emma/40/40" alt="Emma Chamberlain" />
                <AvatarFallback>EC</AvatarFallback>
            </Avatar>
        ),
        platform: 'TikTok',
        job_description: 'Seeking an experienced Scriptwriter to work on our latest project. The ideal candidate will have strong skills in storytelling and a keen eye for detail.',
        salary: '$300-$600', 
        location: 'Remote', 
        remote: 'Yes', 
        job_time: 'Per project' 
    },
    { 
        company: 'MrBeast', 
        title: 'Lead Video Editor & Content...', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/mrbeast/40/40" alt="MrBeast" />
                <AvatarFallback>MB</AvatarFallback>
            </Avatar>
        ),
        platform: 'Instagram',
        job_description: 'We are in search of a talented Lead Video Editor with UI experience to help create stunning visuals for our clients. This role involves collaboration with the design team and clients to deliver high-quality work.',
        salary: '$850-$1,200', 
        location: 'Remote', 
        remote: 'Yes', 
        job_time: 'Part-time' 
    },
    { 
        company: 'PewDiePie', 
        title: 'Community Manager', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/pewdiepie/40/40" alt="PewDiePie" />
                <AvatarFallback>PD</AvatarFallback>
            </Avatar>
        ),
        platform: 'Twitch',
        job_description: 'We\'re hiring a Community Manager to engage with our audience and build a vibrant online community. Experience with Discord and Twitch is a plus.',
        salary: '$40k-$50k', 
        location: 'Remote', 
        remote: 'Yes', 
        job_time: 'Full-time' 
    },
    { 
        company: 'Lilly Singh', 
        title: 'Social Media Manager', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/lilly/40/40" alt="Lilly Singh" />
                <AvatarFallback>LS</AvatarFallback>
            </Avatar>
        ),
        platform: 'X',
        job_description: 'Looking for a Social Media Manager to handle content creation, scheduling, and analytics across multiple platforms. Strong writing skills required.',
        salary: '$55k-$65k', 
        location: 'New York, NY', 
        remote: 'No', 
        job_time: 'Full-time' 
    },
    { 
        company: 'Ninja', 
        title: 'Graphic Designer', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/ninja/40/40" alt="Ninja" />
                <AvatarFallback>N</AvatarFallback>
            </Avatar>
        ),
        platform: 'YouTube',
        job_description: 'Seeking a skilled Graphic Designer to create compelling visuals for our brand, including thumbnails, banners, and merchandise designs.',
        salary: 'Per project', 
        location: 'Remote', 
        remote: 'Hybrid', 
        job_time: 'Contract' 
    },
    { 
        company: 'Pokimane', 
        title: 'Content Strategist', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/pokimane/40/40" alt="Pokimane" />
                <AvatarFallback>P</AvatarFallback>
            </Avatar>
        ),
        platform: 'Twitch',
        job_description: 'Join a leading Twitch stream as a Content Strategist. Help plan and execute content that grows our audience and engages our community.',
        salary: '$60k-$75k', 
        location: 'Los Angeles, CA', 
        remote: 'Hybrid', 
        job_time: 'Full-time' 
    },
    { 
        company: 'Dude Perfect', 
        title: 'Production Assistant', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="group people" src="https://picsum.photos/seed/dudeperfect/40/40" alt="Dude Perfect" />
                <AvatarFallback>DP</AvatarFallback>
            </Avatar>
        ),
        platform: 'YouTube',
        job_description: 'High-energy Production Assistant needed for a top YouTube channel. Assist with shoots, manage equipment, and help bring creative ideas to life.',
        salary: '$20-$25/hr', 
        location: 'Frisco, TX', 
        remote: 'No', 
        job_time: 'Contract' 
    },
    { 
        company: 'Smosh', 
        title: 'Writer/Producer', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="logo" src="https://picsum.photos/seed/smosh/40/40" alt="Smosh" />
                <AvatarFallback>S</AvatarFallback>
            </Avatar>
        ),
        platform: 'YouTube',
        job_description: 'Iconic comedy brand looking for a talented Writer/Producer to develop and create hilarious sketches and series for our YouTube audience.',
        salary: '$70k-$85k', 
        location: 'Burbank, CA', 
        remote: 'No', 
        job_time: 'Full-time' 
    },
    { 
        company: 'David Dobrik', 
        title: 'Podcast Producer', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/dobrik/40/40" alt="David Dobrik" />
                <AvatarFallback>DD</AvatarFallback>
            </Avatar>
        ),
        platform: 'YouTube',
        job_description: 'We are seeking a Podcast Producer to manage all aspects of production, from recording and editing to distribution and promotion for a top-tier podcast.',
        salary: 'Per episode', 
        location: 'Los Angeles, CA', 
        remote: 'Hybrid', 
        job_time: 'Part-time' 
    },
    { 
        company: 'Charli D\'Amelio', 
        title: 'Brand Partnership Manager', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person dancing" src="https://picsum.photos/seed/damelio/40/40" alt="Charli D'Amelio" />
                <AvatarFallback>CD</AvatarFallback>
            </Avatar>
        ),
        platform: 'TikTok',
        job_description: 'Manage and grow brand partnerships for a leading TikTok creator. Must have experience with influencer marketing and brand negotiations.',
        salary: '$80k-$100k', 
        location: 'Remote', 
        remote: 'Yes', 
        job_time: 'Full-time' 
    },
    { 
        company: 'Addison Rae', 
        title: 'Merch Designer', 
        logo: (
            <Avatar className="h-10 w-10">
                <AvatarImage data-ai-hint="person fashion" src="https://picsum.photos/seed/addison/40/40" alt="Addison Rae" />
                <AvatarFallback>AR</AvatarFallback>
            </Avatar>
        ),
        platform: 'Instagram',
        job_description: 'Creative and trend-savvy Merch Designer wanted to develop and design a new line of apparel and accessories for a major social media influencer.',
        salary: 'Per project', 
        location: 'Remote', 
        remote: 'Yes', 
        job_time: 'Contract' 
    },
];


export function FeaturedJobs() {
    return (
        <section id="jobs" className="py-16 md:py-24">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold font-headline">Featured Job Postings</h2>
                <Link href="#" className="text-primary hover:underline flex items-center gap-1">
                    VIEW ALL <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <JobListingComponent jobs={jobs} />
        </section>
    );
}
