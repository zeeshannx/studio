
'use client'

import { getJobById } from '@/lib/jobs'
import { notFound } from 'next/navigation'
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { SocialIcon } from '@/components/shared/social-icon'
import { MapPin, Clock, DollarSign, Briefcase, Building, Calendar, Tv, MessageSquare, Link as LinkIcon, Twitter, Facebook, Copy } from 'lucide-react'
import JobListingComponent from '@/components/ui/joblisting-component'
import { allJobs as fetchAllJobs } from '@/lib/jobs';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { SocialIconsAnimation } from '@/components/landing/social-icons-animation';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';

export default function JobPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id)

  if (!job) {
    notFound()
  }

  const jobLogo = <Avatar className="h-20 w-20"><AvatarImage data-ai-hint={job.logo['data-ai-hint']} src={job.logo.src} alt={job.logo.alt} /><AvatarFallback className="text-3xl">{job.logo.children}</AvatarFallback></Avatar>
  
  const relatedJobs = fetchAllJobs
    .filter(j => j.id !== job.id && (j.platform === job.platform || j.title === job.title))
    .slice(0,3)
    .map(relatedJob => {
        if (React.isValidElement(relatedJob.logo)) {
            return { ...relatedJob, logo: relatedJob.logo };
        }
        const logoData = relatedJob.logo as unknown as { 'data-ai-hint': string, src: string, alt: string, children: string };
        return {
            ...relatedJob,
            logo: (
                <Avatar className="h-12 w-12">
                    <AvatarImage data-ai-hint={logoData['data-ai-hint']} src={logoData.src} alt={logoData.alt} />
                    <AvatarFallback>{logoData.children}</AvatarFallback>
                </Avatar>
            )
        };
    });

  const shareIcons = [
    { icon: <Twitter className="h-5 w-5" />, label: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, label: 'Facebook' },
    { icon: <LinkIcon className="h-5 w-5" />, label: 'Link' },
    { icon: <Copy className="h-5 w-5" />, label: 'Copy' },
  ]
  

  return (
    <div className="bg-muted/40 relative overflow-hidden">
        <GridPattern
            width={40}
            height={40}
            x={-1}
            y={-1}
            className={cn(
            '[mask-image:radial-gradient(ellipse_at_center,white,transparent)]',
            'absolute inset-0 z-0 h-full w-full skew-y-12 opacity-50'
            )}
        />
        <SocialIconsAnimation />
        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
            <header className="mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
                {jobLogo}
                <div className="flex-grow">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">{job.title}</h1>
                <p className="text-xl text-muted-foreground">{job.company}</p>
                {job.platform && (
                    <div className="mt-2">
                        <Badge variant="outline" className="flex items-center gap-1.5 w-fit text-base py-1 px-3">
                            <SocialIcon platform={job.platform} className="h-5 w-5" />
                            {job.platform}
                        </Badge>
                    </div>
                )}
                </div>
            </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <main className="lg:col-span-2 space-y-8">
                <Card>
                    <CardContent className="p-6 grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
                        <div>
                            <p className="text-muted-foreground font-semibold">Salary</p>
                            <p className="font-bold text-lg text-primary">{job.salary}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground font-semibold">Job Location</p>
                            <p className="flex items-center gap-1.5">{job.remote === 'Yes' ? <Badge variant="secondary">Remote</Badge> : job.location}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground font-semibold">Job Type</p>
                            <p className="flex items-center gap-1.5"><Briefcase className="h-4 w-4" />{job.job_time}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground font-semibold">Start Date</p>
                            <p className="flex items-center gap-1.5"><Calendar className="h-4 w-4" />{job.startDate}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground font-semibold">Content Format</p>
                            <p className="flex items-center gap-1.5"><Tv className="h-4 w-4" />{job.contentFormat}</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground font-semibold">Language</p>
                            <p className="flex items-center gap-1.5"><MessageSquare className="h-4 w-4" />{job.language}</p>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader><CardTitle>About the Job</CardTitle></CardHeader>
                    <CardContent className="prose dark:prose-invert max-w-none text-foreground space-y-4">
                    <p>{job.job_description}</p>
                    {job.aboutJobDetails && <p>{job.aboutJobDetails}</p>}
                    </CardContent>
                </Card>

                {job.idealCandidate && job.idealCandidate.length > 0 && (
                    <Card>
                        <CardHeader><CardTitle>Ideal Candidate</CardTitle></CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none text-foreground">
                            <ul className="list-disc pl-5 space-y-2">
                            {job.idealCandidate.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {job.jobRequirements && job.jobRequirements.length > 0 && (
                    <Card>
                        <CardHeader><CardTitle>Job Requirements</CardTitle></CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none text-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                            {job.jobRequirements.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {job.bonusSkills && job.bonusSkills.length > 0 && (
                    <Card>
                        <CardHeader><CardTitle>Bonus Skills</CardTitle></CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none text-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                            {job.bonusSkills.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {job.details && job.details.length > 0 && (
                    <Card>
                        <CardHeader><CardTitle>Details</CardTitle></CardHeader>
                        <CardContent className="prose dark:prose-invert max-w-none text-foreground">
                        <ul className="list-disc pl-5 space-y-2">
                            {job.details.map((item, index) => <li key={index}>{item}</li>)}
                            </ul>
                        </CardContent>
                    </Card>
                )}

                {job.skills && Object.keys(job.skills).length > 0 &&(
                    <Card>
                        <CardHeader><CardTitle>Skills and Expertise</CardTitle></CardHeader>
                        <CardContent className="space-y-4">
                            {Object.entries(job.skills).map(([category, skills]) =>(
                                <div key={category}>
                                    <p className="font-semibold mb-2">{category}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}

                {job.sampleVideos && job.sampleVideos.length > 0 && (
                    <Card>
                        <CardHeader><CardTitle>Sample YouTube Videos</CardTitle></CardHeader>
                        <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {job.sampleVideos.map((video, index) => (
                                <div key={index} className="relative aspect-video rounded-lg overflow-hidden">
                                    <Image src={video.thumbnailUrl} alt={video.title} fill className="object-cover" />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                        <p className="text-white font-bold text-center p-2">{video.title}</p>
                                    </div>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}

                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-xl">
                            <Briefcase className="h-5 w-5" />
                            Related Jobs
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <JobListingComponent jobs={relatedJobs} className="grid-cols-1 md:grid-cols-2" />
                    </CardContent>
                </Card>

            </main>
            <aside className="space-y-6 lg:sticky lg:top-24">
                <Card className="p-6">
                    <div className="flex flex-col gap-4">
                        <Button size="lg" className="w-full">Apply Now</Button>
                        <Separator />
                        <p className="text-center text-sm text-muted-foreground">Share with others</p>
                        <div className="flex justify-center gap-2">
                            {shareIcons.map(item => (
                                <Button key={item.label} variant="outline" size="icon" aria-label={`Share on ${item.label}`}>
                                    {item.icon}
                                </Button>
                            ))}
                        </div>
                    </div>
                </Card>
                <Card>
                    <CardHeader className="flex-row items-center justify-between">
                        <CardTitle className="text-lg">Posted by</CardTitle>
                        <Button variant="outline" size="sm">Follow</Button>
                    </CardHeader>
                    <CardContent className="flex items-center gap-4">
                        <Avatar className="h-12 w-12">
                            <AvatarImage data-ai-hint={job.logo['data-ai-hint']} src={job.logo.src} alt={job.logo.alt} />
                            <AvatarFallback>{job.logo.children}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold flex items-center gap-1">{job.company} <SocialIcon platform={job.platform} className="h-4 w-4" /></p>
                            <p className="text-sm text-muted-foreground">{job.followers} followers</p>
                        </div>
                    </CardContent>
                </Card>

                {job.referralBonus && (
                    <Card className="bg-primary/10 border-primary/20">
                        <CardContent className="p-6 flex items-center gap-6">
                            <div className="bg-primary/20 text-primary p-3 rounded-lg">
                            <DollarSign className="h-8 w-8" />
                            </div>
                        <div>
                            <p className="text-2xl font-bold text-primary">{job.referralBonus}</p>
                            <p className="text-sm text-primary/80">Referral Bonus</p>
                        </div>
                        </CardContent>
                    </Card>
                )}
            </aside>
            </div>
        </div>
    </div>
  )
}
