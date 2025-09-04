'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { SocialIcon } from '@/components/shared/social-icon';
import type { SocialPlatform } from '@/components/shared/social-icon';
import Image from 'next/image';

type Job = {
  id: number;
  platform: SocialPlatform;
  title: string;
  company: string;
  logoUrl: string;
  compensation: string;
  type: string;
  featured: boolean;
};

const allJobs: Job[] = [
  { id: 1, platform: 'Instagram', title: 'Influencer Marketing Manager', company: 'Creative Co.', logoUrl: 'https://picsum.photos/seed/c1/40/40', compensation: '$80k - $100k', type: 'Full-time', featured: true },
  { id: 2, platform: 'TikTok', title: 'Viral Video Creator', company: 'Trendsetters Inc.', logoUrl: 'https://picsum.photos/seed/c2/40/40', compensation: '$500/video', type: 'Contract', featured: true },
  { id: 3, platform: 'YouTube', title: 'Channel Manager & Strategist', company: 'VidSuccess', logoUrl: 'https://picsum.photos/seed/c3/40/40', compensation: '$75k+', type: 'Full-time', featured: true },
  { id: 4, platform: 'LinkedIn', title: 'B2B Content Specialist', company: 'ProConnect', logoUrl: 'https://picsum.photos/seed/c4/40/40', compensation: '$90k - $110k', type: 'Full-time', featured: true },
  { id: 5, platform: 'Twitch', title: 'Live Stream Producer', company: 'GameOn', logoUrl: 'https://picsum.photos/seed/c5/40/40', compensation: '$60k', type: 'Part-time', featured: false },
  { id: 6, platform: 'X', title: 'Social Media Engagement Lead', company: 'BuzzHub', logoUrl: 'https://picsum.photos/seed/c6/40/40', compensation: 'Competitive', type: 'Full-time', featured: true },
];

const platforms: SocialPlatform[] = ['Instagram', 'TikTok', 'YouTube', 'LinkedIn', 'X', 'Twitch'];

export function FeaturedJobs() {
  const [selectedPlatform, setSelectedPlatform] = useState<SocialPlatform | 'All'>('All');

  const featuredJobs = allJobs.filter(job => job.featured && (selectedPlatform === 'All' || job.platform === selectedPlatform));

  return (
    <section id="jobs" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-4 font-headline">Featured Job Postings</h2>
      <p className="text-muted-foreground text-center mb-8">Hand-picked opportunities from top companies.</p>

      <div className="flex justify-center flex-wrap gap-2 mb-12">
        <Button variant={selectedPlatform === 'All' ? 'default' : 'outline'} onClick={() => setSelectedPlatform('All')}>All</Button>
        {platforms.map(platform => (
          <Button key={platform} variant={selectedPlatform === platform ? 'default' : 'outline'} onClick={() => setSelectedPlatform(platform)}>
            <SocialIcon platform={platform} className="mr-2 h-4 w-4" />
            {platform}
          </Button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map(job => (
          <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <SocialIcon platform={job.platform} className="h-5 w-5" />
                    <CardTitle className="text-xl">{job.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Image data-ai-hint="logo" src={job.logoUrl} alt={`${job.company} logo`} width={24} height={24} className="rounded-full" />
                    <span>{job.company}</span>
                  </div>
                </div>
                <Badge variant="outline">{job.type}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-lg font-semibold text-primary mb-4">{job.compensation}</p>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">Apply Now</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
