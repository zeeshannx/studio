'use client';
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import JobListingComponent, { Job } from "@/components/ui/joblisting-component";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { allJobs as fetchAllJobs } from '@/lib/jobs';

const jobs: Job[] = fetchAllJobs.slice(0,6).map(job => {
  if (React.isValidElement(job.logo)) {
    return {
      ...job,
      logo: job.logo,
    };
  }
  
  // If logo is not a valid element, it's the raw data from lib/jobs.ts
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
});


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
