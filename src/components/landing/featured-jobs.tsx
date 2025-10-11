
'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import JobListingComponent from "@/components/ui/joblisting-component";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { allJobs } from '@/lib/placeholder-data/jobs';
import type { JobPosting } from '@/lib/jobs';

export function FeaturedJobs() {
    const jobs = allJobs.slice(0, 6);

    const jobsWithLogo = jobs.map(job => {
        const logoData = job.logo as unknown as { 'data-ai-hint': string; src: string; alt: string; children: string; };
        return {
            ...job,
            logo: (
                <Avatar className="h-12 w-12">
                    <AvatarImage data-ai-hint={logoData['data-ai-hint']} src={logoData.src} alt={logoData.alt} />
                    <AvatarFallback>{logoData.children}</AvatarFallback>
                </Avatar>
            ),
        }
    }) || [];

    if (!jobs.length) {
        return (
             <section id="jobs" className="py-16 md:py-24">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold font-headline">Featured Job Postings</h2>
                    <Link href="/jobs" className="text-primary hover:underline flex items-center gap-1">
                        VIEW ALL <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section id="jobs" className="py-16 md:py-24">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold font-headline">Featured Job Postings</h2>
                <Link href="/jobs" className="text-primary hover:underline flex items-center gap-1">
                    VIEW ALL <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <JobListingComponent jobs={jobsWithLogo} />
        </section>
    );
}
