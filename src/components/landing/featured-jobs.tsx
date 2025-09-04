'use client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Briefcase, Clock, MapPin, ArrowRight, Video, FileText, PenSquare, Instagram, Youtube, Linkedin, Twitter, Facebook, Twitch } from 'lucide-react';
import Link from 'next/link';

const jobs = [
    { icon: Video, title: 'Video Editor', type: 'Per project', location: 'Remote', salary: null, companyLogo: 'https://picsum.photos/seed/j1/40/40' },
    { icon: PenSquare, title: 'Scriptwriter', type: 'Per project', location: 'Remote', salary: '$300-$600', companyLogo: 'https://picsum.photos/seed/j2/40/40' },
    { icon: Video, title: 'Lead Video Editor & Content...', type: 'Part-time', location: 'Remote', salary: '$850-$1,200', companyLogo: 'https://picsum.photos/seed/j3/40/40' },
    { icon: Youtube, title: 'Full-Time YouTube Vlog Vi...', type: 'Full-time', location: 'Remote', salary: '$24,000-$48,000', companyLogo: 'https://picsum.photos/seed/j4/40/40' },
    { icon: PenSquare, title: 'Hiring Thumbnail Designer', type: 'Per project', location: 'Remote', salary: '$50-$150', companyLogo: 'https://picsum.photos/seed/j5/40/40' },
    { icon: Twitch, title: 'TikTok & Short Form Speci...', type: 'Full-time', location: 'Remote', salary: '$3,000-$7,500', companyLogo: 'https://picsum.photos/seed/j6/40/40' },
    { icon: Briefcase, title: 'Channel Manager for NEW ...', type: 'Full-time', location: 'Remote', salary: null, companyLogo: 'https://picsum.photos/seed/j7/40/40' },
    { icon: Video, title: 'Video Editor', type: 'Full-time', location: 'Hybrid', salary: '$45,000-$60,000', companyLogo: 'https://picsum.photos/seed/j8/40/40' },
    { icon: Video, title: 'Post-Production YouTube ...', type: 'Full-time', location: 'Remote', salary: '$48,000-$60,000', companyLogo: 'https://picsum.photos/seed/j9/40/40' },
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
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.map((job, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-primary/10 p-2 rounded-md">
                                        <job.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold">{job.title}</h3>
                                </div>
                                <ArrowRight className="h-5 w-5 text-muted-foreground" />
                            </div>
                            <div className="text-sm text-muted-foreground space-y-2 mb-4">
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4" />
                                    <span>{job.type}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{job.location}</span>
                                </div>
                                {job.salary && (
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{job.salary}</span>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-xs text-muted-foreground">Posted by</span>
                                <Image data-ai-hint="logo" src={job.companyLogo} alt="Company Logo" width={32} height={32} className="rounded-full" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
