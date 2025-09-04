'use client'

import { getJobById } from '@/lib/jobs'
import { notFound } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { SocialIcon } from '@/components/shared/social-icon'
import { MapPin, Clock, DollarSign, Users, Briefcase, Building } from 'lucide-react'
import JobListingComponent from '@/components/ui/joblisting-component'
import { allJobs as fetchAllJobs } from '@/lib/jobs';

export default function JobPage({ params }: { params: { id: string } }) {
  const job = getJobById(params.id)

  if (!job) {
    notFound()
  }

  const jobLogo = <Avatar className="h-20 w-20"><AvatarImage data-ai-hint={job.logo.props['data-ai-hint']} src={job.logo.props.src} alt={job.logo.props.alt} /><AvatarFallback className="text-3xl">{job.logo.props.children}</AvatarFallback></Avatar>
  
  const relatedJobs = fetchAllJobs.filter(j => j.id !== job.id && (j.platform === job.platform || j.title === job.title)).slice(0,3).map(job => ({
    ...job,
    logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint={job.logo.props['data-ai-hint']} src={job.logo.props.src} alt={job.logo.props.alt} /><AvatarFallback>{job.logo.props.children}</AvatarFallback></Avatar>
  }));

  return (
    <div className="bg-muted/40">
      <div className="container mx-auto px-4 py-12 md:py-20">
        <header className="bg-card p-8 rounded-t-lg border">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {jobLogo}
            <div className="flex-grow">
              <h1 className="text-3xl md:text-4xl font-bold font-headline">{job.title}</h1>
              <p className="text-xl text-muted-foreground">{job.company}</p>
              <div className="flex items-center gap-4 mt-4 text-muted-foreground text-sm">
                 <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" /> {job.location} {job.remote !== 'No' && <Badge variant="secondary">{job.remote === 'Yes' ? 'Remote': job.remote}</Badge>}
                 </div>
                 <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {job.job_time}
                 </div>
                 <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4" /> {job.salary}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              <Button size="lg" className="w-full">Apply Now</Button>
              <Button variant="outline" size="lg" className="w-full">Save Job</Button>
            </div>
          </div>
          {job.platform && (
             <div className="mt-6">
                <Badge variant="outline" className="flex items-center gap-1.5 w-fit text-base py-1 px-3">
                    <SocialIcon platform={job.platform} className="h-5 w-5" />
                    {job.platform}
                </Badge>
             </div>
           )}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <main className="lg:col-span-2">
            <Card>
                <CardHeader>
                    <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent className="prose dark:prose-invert max-w-none text-foreground">
                   <p>{job.job_description}</p>
                </CardContent>
            </Card>
          </main>
          <aside className="space-y-8">
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <Building className="h-5 w-5" />
                        About {job.company}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Information about the company will be displayed here. We can include a brief overview, its mission, and links to their social media profiles.
                    </p>
                </CardContent>
             </Card>
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl">
                        <Briefcase className="h-5 w-5" />
                        Related Jobs
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <JobListingComponent jobs={relatedJobs} className="grid-cols-1" />
                </CardContent>
             </Card>
          </aside>
        </div>
      </div>
    </div>
  )
}
