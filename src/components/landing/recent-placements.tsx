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
