'use client';
import { Button } from '@/components/ui/button';
import JobListingComponent, { Job } from "@/components/ui/joblisting-component";
import { ArrowRight, PenSquare, Video } from 'lucide-react';
import Link from 'next/link';

const jobs: Job[] = [
    { 
        company: 'Marques Brownlee', 
        title: 'Video Editor', 
        logo: <Video className="h-8 w-8 text-primary" />,
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
        logo: <PenSquare className="h-8 w-8 text-primary" />,
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
        logo: <Video className="h-8 w-8 text-primary" />,
        platform: 'Instagram',
        job_description: 'We are in search of a talented Lead Video Editor with UI experience to help create stunning visuals for our clients. This role involves collaboration with the design team and clients to deliver high-quality work.',
        salary: '$850-$1,200', 
        location: 'Remote', 
        remote: 'Yes', 
        job_time: 'Part-time' 
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
