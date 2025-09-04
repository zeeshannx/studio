'use client';
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JobListingComponent, { Job } from '@/components/ui/joblisting-component';
import { ListFilter } from 'lucide-react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

const allJobs: Job[] = [
    {
        company: 'Marques Brownlee',
        title: 'Video Editor',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/mkbhd/48/48" alt="Marques Brownlee" /><AvatarFallback>MB</AvatarFallback></Avatar>,
        platform: 'YouTube',
        job_description: 'We are looking for a creative and driven Video Editor to join our team. You will be responsible for editing and implementing user interfaces for our web and mobile applications.',
        salary: 'Per project',
        location: 'New York, NY',
        remote: 'Yes',
        job_time: 'Per project'
    },
    {
        company: 'Emma Chamberlain',
        title: 'Scriptwriter',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/emma/48/48" alt="Emma Chamberlain" /><AvatarFallback>EC</AvatarFallback></Avatar>,
        platform: 'TikTok',
        job_description: 'Seeking an experienced Scriptwriter to work on our latest project. The ideal candidate will have strong skills in storytelling and a keen eye for detail.',
        salary: '$300-$600',
        location: 'Los Angeles, CA',
        remote: 'Yes',
        job_time: 'Per project'
    },
    {
        company: 'MrBeast',
        title: 'Lead Video Editor & Content...',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/mrbeast/48/48" alt="MrBeast" /><AvatarFallback>MB</AvatarFallback></Avatar>,
        platform: 'Instagram',
        job_description: 'We are in search of a talented Lead Video Editor with UI experience to help create stunning visuals for our clients. This role involves collaboration with the design team and clients to deliver high-quality work.',
        salary: '$850-$1,200',
        location: 'Greenville, NC',
        remote: 'No',
        job_time: 'Part-time'
    },
    {
        company: 'PewDiePie',
        title: 'Community Manager',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/pewdiepie/48/48" alt="PewDiePie" /><AvatarFallback>PD</AvatarFallback></Avatar>,
        platform: 'Discord',
        job_description: "We're hiring a Community Manager to engage with our audience and build a vibrant online community. Experience with Discord and Twitch is a plus.",
        salary: '$40k-$50k',
        location: 'Tokyo, Japan',
        remote: 'Hybrid',
        job_time: 'Full-time'
    },
    {
        company: 'Lilly Singh',
        title: 'Social Media Manager',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/lilly/48/48" alt="Lilly Singh" /><AvatarFallback>LS</AvatarFallback></Avatar>,
        platform: 'X',
        job_description: 'Looking for a Social Media Manager to handle content creation, scheduling, and analytics across multiple platforms. Strong writing skills required.',
        salary: '$55k-$65k',
        location: 'New York, NY',
        remote: 'No',
        job_time: 'Full-time'
    },
    {
        company: 'Snapchat Spotlight',
        title: 'Content Creator',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="logo" src="https://picsum.photos/seed/snapchat/48/48" alt="Snapchat" /><AvatarFallback>S</AvatarFallback></Avatar>,
        platform: 'Snapchat',
        job_description: 'Seeking a creative content creator to produce engaging short-form video content for Snapchat Spotlight. Must be familiar with current trends.',
        salary: 'Performance-based',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Contract'
    },
    {
        company: 'Pokimane',
        title: 'Content Strategist',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/pokimane/48/48" alt="Pokimane" /><AvatarFallback>P</AvatarFallback></Avatar>,
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
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="group people" src="https://picsum.photos/seed/dudeperfect/48/48" alt="Dude Perfect" /><AvatarFallback>DP</AvatarFallback></Avatar>,
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
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="logo" src="https://picsum.photos/seed/smosh/48/48" alt="Smosh" /><AvatarFallback>S</AvatarFallback></Avatar>,
        platform: 'YouTube',
        job_description: 'Iconic comedy brand looking for a talented Writer/Producer to develop and create hilarious sketches and series for our YouTube audience.',
        salary: '$70k-$85k',
        location: 'Burbank, CA',
        remote: 'No',
        job_time: 'Full-time'
    },
    {
        company: 'Top Creator',
        title: 'OnlyFans Manager',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/of/48/48" alt="OnlyFans Creator" /><AvatarFallback>OF</AvatarFallback></Avatar>,
        platform: 'OnlyFans',
        job_description: 'Seeking a discreet and professional manager for a top OnlyFans account. Responsibilities include content scheduling, fan interaction, and promotion.',
        salary: 'Commission-based',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Part-time'
    },
    {
        company: 'Charli D\'Amelio',
        title: 'Brand Partnership Manager',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person dancing" src="https://picsum.photos/seed/damelio/48/48" alt="Charli D\'Amelio" /><AvatarFallback>CD</AvatarFallback></Avatar>,
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
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person fashion" src="https://picsum.photos/seed/addison/48/48" alt="Addison Rae" /><AvatarFallback>AR</AvatarFallback></Avatar>,
        platform: 'Instagram',
        job_description: 'Creative and trend-savvy Merch Designer wanted to develop and design a new line of apparel and accessories for a major social media influencer.',
        salary: 'Per project',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Contract'
    },
];

const FilterSidebar = () => (
    <div className="space-y-6">
        <div>
            <h3 className="text-lg font-semibold mb-3">Search by keyword</h3>
            <Input placeholder="e.g. Video Editor" />
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-3">Location</h3>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="remote">Remote</SelectItem>
                    <SelectItem value="new-york">New York, NY</SelectItem>
                    <SelectItem value="los-angeles">Los Angeles, CA</SelectItem>
                    <SelectItem value="greenville">Greenville, NC</SelectItem>
                     <SelectItem value="frisco">Frisco, TX</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div>
            <h3 className="text-lg font-semibold mb-3">Job Type</h3>
            <div className="space-y-2">
                <div className="flex items-center space-x-2">
                    <Checkbox id="full-time" />
                    <Label htmlFor="full-time">Full-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="part-time" />
                    <Label htmlFor="part-time">Part-time</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="contract" />
                    <Label htmlFor="contract">Contract</Label>
                </div>
                <div className="flex items-center space-x-2">
                    <Checkbox id="per-project" />
                    <Label htmlFor="per-project">Per project</Label>
                </div>
            </div>
        </div>
        <Button className="w-full">Apply Filters</Button>
    </div>
);

export default function JobsPage() {
    const [jobs, setJobs] = useState(allJobs);

    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Find Your Dream Job</h1>
                    <p className="text-lg text-muted-foreground">Browse through thousands of opportunities in the creator economy.</p>
                </header>

                <div className="flex flex-col md:flex-row gap-8">
                    <aside className="w-full md:w-1/4 lg:w-1/5 hidden md:block">
                        <div className="sticky top-24">
                           <FilterSidebar />
                        </div>
                    </aside>

                    <main className="w-full md:w-3/4 lg:w-4/5">
                        <div className="flex justify-between items-center mb-6">
                            <p className="text-muted-foreground">Showing {jobs.length} results</p>
                             <div className="md:hidden">
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button variant="outline" size="sm">
                                            <ListFilter className="h-4 w-4 mr-2" />
                                            Filters
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent>
                                        <SheetHeader>
                                            <SheetTitle>Filters</SheetTitle>
                                        </SheetHeader>
                                        <div className="p-4">
                                            <FilterSidebar />
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>

                        <ScrollArea className="h-[calc(100vh-20rem)]">
                           <div className="pr-4">
                             <JobListingComponent jobs={jobs} className="grid-cols-1 lg:grid-cols-2" />
                           </div>
                        </ScrollArea>
                    </main>
                </div>
            </div>
        </div>
    );
}
