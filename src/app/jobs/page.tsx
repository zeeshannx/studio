'use client';
import { useState, useEffect, isValidElement } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import JobListingComponent, { Job } from '@/components/ui/joblisting-component';
import { Search } from 'lucide-react';
import { allJobs as fetchAllJobs } from '@/lib/jobs';

const allJobs = fetchAllJobs.map(job => {
    if (isValidElement(job.logo)) {
        return {
        ...job,
        logo: job.logo,
        };
    }
    const logoData = job.logo as unknown as { 'data-ai-hint': string; src: string; alt: string; children: string; };
    return {
        ...job,
        logo: <Avatar className="h-12 w-12"><AvatarImage data-ai-hint={logoData['data-ai-hint']} src={logoData.src} alt={logoData.alt} /><AvatarFallback>{logoData.children}</AvatarFallback></Avatar>
    }
});

const JOBS_PER_PAGE = 8;

export default function JobsPage() {
    const [filteredJobs, setFilteredJobs] = useState(allJobs);
    const [visibleJobsCount, setVisibleJobsCount] = useState(JOBS_PER_PAGE);
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
        setFilteredJobs(filtered);
        setVisibleJobsCount(JOBS_PER_PAGE);
    }, [searchQuery, platformFilter, typeFilter]);

    const jobs = filteredJobs.slice(0, visibleJobsCount);

    const handleLoadMore = () => {
        setVisibleJobsCount(prevCount => prevCount + JOBS_PER_PAGE);
    };


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
                        <p className="text-muted-foreground">Showing {jobs.length} of {filteredJobs.length} results</p>
                    </div>
                    <JobListingComponent jobs={jobs} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" />
                    {visibleJobsCount < filteredJobs.length && (
                        <div className="text-center mt-12">
                            <Button onClick={handleLoadMore}>Load More</Button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}
