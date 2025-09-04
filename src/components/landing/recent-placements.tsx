'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SocialIcon, SocialPlatform } from "../shared/social-icon";

type Placement = {
  candidateName: string;
  candidateAvatarUrl: string;
  position: string;
  companyName: string;
  companyLogoUrl: string;
  companySubs: string;
  platform: SocialPlatform;
};

const placements: Placement[] = [
  { candidateName: 'Jared Klein', candidateAvatarUrl: 'https://picsum.photos/seed/p1/100/100', position: 'Thumbnail Designer', companyName: 'MegaBuilds', companyLogoUrl: 'https://picsum.photos/seed/cl1/40/40', companySubs: '1.52M', platform: 'YouTube' },
  { candidateName: 'Greenguy Studio', candidateAvatarUrl: 'https://picsum.photos/seed/p2/100/100', position: 'Video Editor', companyName: 'The Wingrove Family', companyLogoUrl: 'https://picsum.photos/seed/cl2/40/40', companySubs: '2.31M', platform: 'TikTok' },
  { candidateName: 'Misha Karpenko', candidateAvatarUrl: 'https://picsum.photos/seed/p3/100/100', position: 'Video Editor', companyName: 'Wilco Wanders', companyLogoUrl: 'https://picsum.photos/seed/cl3/40/40', companySubs: '14.9K', platform: 'Instagram' },
  { candidateName: 'Sophie Chen', candidateAvatarUrl: 'https://picsum.photos/seed/p4/100/100', position: 'Community Manager', companyName: 'Gamer\'s Nexus', companyLogoUrl: 'https://picsum.photos/seed/cl4/40/40', companySubs: '5M', platform: 'Discord' },
  { candidateName: 'Alex Rodriguez', candidateAvatarUrl: 'https://picsum.photos/seed/p5/100/100', position: 'Content Strategist', companyName: 'Stream Queen', companyLogoUrl: 'https://picsum.photos/seed/cl5/40/40', companySubs: '8.2M', platform: 'Twitch' },
  { candidateName: 'Ben Carter', candidateAvatarUrl: 'https://picsum.photos/seed/p6/100/100', position: 'Social Media Manager', companyName: 'Fashion Forward', companyLogoUrl: 'https://picsum.photos/seed/cl6/40/40', companySubs: '3.1M', platform: 'X' },
  { candidateName: 'Chloe Davis', candidateAvatarUrl: 'https://picsum.photos/seed/p7/100/100', position: 'Brand Manager', companyName: 'BizBoost', companyLogoUrl: 'https://picsum.photos/seed/cl7/40/40', companySubs: '500K', platform: 'LinkedIn' },
  { candidateName: 'Daniel Evans', candidateAvatarUrl: 'https://picsum.photos/seed/p8/100/100', position: 'Shorts Editor', companyName: 'Quick Vids', companyLogoUrl: 'https://picsum.photos/seed/cl8/40/40', companySubs: '12M', platform: 'YouTube' },
  { candidateName: 'Emily White', candidateAvatarUrl: 'https://picsum.photos/seed/p9/100/100', position: 'Account Manager', companyName: 'Secret Garden', companyLogoUrl: 'https://picsum.photos/seed/cl9/40/40', companySubs: '250K', platform: 'OnlyFans' },
];

export function RecentPlacements() {
  return (
    <section className="py-16 md:py-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold font-headline">Recent Placements</h2>
        <Link href="#" className="text-primary hover:underline flex items-center gap-1">
          VIEW ALL <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {placements.map((placement, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-4">
                    <Avatar className="w-12 h-12 border-2 border-background">
                      <AvatarImage data-ai-hint="logo" src={placement.companyLogoUrl} alt={placement.companyName} />
                      <AvatarFallback>{placement.companyName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <Avatar className="w-12 h-12 border-2 border-background">
                      <AvatarImage data-ai-hint="person" src={placement.candidateAvatarUrl} alt={placement.candidateName} />
                      <AvatarFallback>{placement.candidateName.charAt(0)}</AvatarFallback>
                    </Avatar>
                </div>
                <div className="flex-grow">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold">{placement.companyName}, {placement.companySubs}</p>
                    <SocialIcon platform={placement.platform} className="h-4 w-4" />
                  </div>
                  <p className="text-sm text-muted-foreground">{placement.candidateName}, {placement.position}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
