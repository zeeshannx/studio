'use client';
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JobListingComponent, { Job } from '@/components/ui/joblisting-component';
import { Search } from 'lucide-react';

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
        job_time: 'Per project',
        posted_at: '1 day ago',
        applicants: 18,
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
        job_time: 'Per project',
        posted_at: '2 days ago',
        applicants: 12,
    },
    {
        company: 'MrBeast',
        title: 'Lead Video Editor',
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/mrbeast/48/48" alt="MrBeast" /><AvatarFallback>MB</AvatarFallback></Avatar>,
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
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/pewdiepie/48/48" alt="PewDiePie" /><AvatarFallback>PD</AvatarFallback></Avatar>,
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
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="person" src="https://picsum.photos/seed/lilly/48/48" alt="Lilly Singh" /><AvatarFallback>LS</AvatarFallback></Avatar>,
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
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint="logo" src="https://picsum.photos/seed/snapchat/48/48" alt="Snapchat" /><AvatarFallback>S</AvatarFallback></Avatar>,
        platform: 'Snapchat',
        job_description: 'Seeking a creative content creator to produce engaging short-form video content for Snapchat Spotlight. Must be familiar with current trends.',
        salary: 'Performance-based',
        location: 'Remote',
        remote: 'Yes',
        job_time: 'Contract',
        posted_at: '6 days ago',
        applicants: 40,
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
        job_time: 'Full-time',
        posted_at: '1 week ago',
        applicants: 15,
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
        job_time: 'Contract',
        posted_at: '1 week ago',
        applicants: 30,
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
        job_time: 'Full-time',
        posted_at: '2 weeks ago',
        applicants: 19,
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
        job_time: 'Part-time',
        posted_at: '2 weeks ago',
        applicants: 5,
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
        job_time: 'Full-time',
        posted_at: '3 weeks ago',
        applicants: 28,
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
        job_time: 'Contract',
        posted_at: '1 month ago',
        applicants: 9,
    },
];

export default function JobsPage() {
    const [jobs, setJobs] = useState(allJobs);
    const [searchQuery, setSearchQuery] = useState('');
    const [platformFilter, setPlatformFilter] = useState('All Platforms');
    const [typeFilter, setTypeFilter] = useState('All Types');

    const platforms = ['All Platforms', ...Array.from(new Set(allJobs.map(job => job.platform).filter(Boolean))) as string[]];
    const jobTypes = ['All Types', ...Array.from(new Set(allJobs.map(job => job.job_time)))];

    useEffect(() => {
        const filtered = allJobs.filter(job => {
            const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || job.company.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesPlatform = platformFilter === 'All Platforms' || job.platform === platformFilter;
            const matchesType = typeFilter === 'All Types' || job.job_time === typeFilter;
            return matchesSearch && matchesPlatform && matchesType;
        });
        setJobs(filtered);
    }, [searchQuery, platformFilter, typeFilter]);

    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <header className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-2">Find Your Dream Job</h1>
                    <p className="text-lg text-muted-foreground">Browse through thousands of opportunities in the creator economy.</p>
                </header>

                <div className="mb-8 p-4 rounded-lg bg-card border shadow-md">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative md:col-span-1">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="text"
                                placeholder="Search jobs or companies..."
                                className="pl-10 w-full"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <Select value={platformFilter} onValueChange={setPlatformFilter}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="All Platforms" />
                            </SelectTrigger>
                            <SelectContent>
                                {platforms.map(platform => (
                                    <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select value={typeFilter} onValueChange={setTypeFilter}>
                            <SelectTrigger className="w-full">
                                <SelectValue placeholder="All Types" />
                            </SelectTrigger>
                            <SelectContent>
                                {jobTypes.map(type => (
                                    <SelectItem key={type} value={type}>{type}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <main className="w-full">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-muted-foreground">Showing {jobs.length} results</p>
                    </div>
                    <JobListingComponent jobs={jobs} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
                </main>
            </div>
        </div>
    );
}
