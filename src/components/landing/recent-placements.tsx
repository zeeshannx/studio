'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SocialIcon } from "@/components/shared/social-icon";
import type { SocialPlatform } from "@/components/shared/social-icon";
import Image from "next/image";

type Placement = {
  candidateName: string;
  candidateAvatarUrl: string;
  position: string;
  company: string;
  companyLogoUrl: string;
  platform: SocialPlatform;
};

const placements: Placement[] = [
  { candidateName: 'Alex Doe', candidateAvatarUrl: 'https://picsum.photos/seed/p1/100/100', position: 'Community Manager', company: 'GamerzUnited', companyLogoUrl: 'https://picsum.photos/seed/cl1/40/40', platform: 'Twitch' },
  { candidateName: 'Brenda Smith', candidateAvatarUrl: 'https://picsum.photos/seed/p2/100/100', position: 'Content Strategist', company: 'StyleVibe', companyLogoUrl: 'https://picsum.photos/seed/cl2/40/40', platform: 'Instagram' },
  { candidateName: 'Charlie Brown', candidateAvatarUrl: 'https://picsum.photos/seed/p3/100/100', position: 'Video Editor', company: 'VidMakers', companyLogoUrl: 'https://picsum.photos/seed/cl3/40/40', platform: 'YouTube' },
  { candidateName: 'Diana Prince', candidateAvatarUrl: 'https://picsum.photos/seed/p4/100/100', position: 'Growth Hacker', company: 'ViralNow', companyLogoUrl: 'https://picsum.photos/seed/cl4/40/40', platform: 'TikTok' },
  { candidateName: 'Ethan Hunt', candidateAvatarUrl: 'https://picsum.photos/seed/p5/100/100', position: 'Corporate Branding Lead', company: 'LeadGen', companyLogoUrl: 'https://picsum.photos/seed/cl5/40/40', platform: 'LinkedIn' },
];

export function RecentPlacements() {
  return (
    <section className="py-16 md:py-24 bg-secondary/50 rounded-lg my-16 md:my-24">
      <h2 className="text-3xl font-bold text-center mb-4 font-headline">See Our Success Stories</h2>
      <p className="text-muted-foreground text-center mb-12">Creators and professionals who found their dream job through SocialVerse.</p>
      
      <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-4xl mx-auto">
        <CarouselContent>
          {placements.map((placement, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="h-full">
                  <CardContent className="flex flex-col items-center text-center p-6">
                    <Avatar className="w-24 h-24 mb-4">
                      <AvatarImage data-ai-hint="person" src={placement.candidateAvatarUrl} alt={placement.candidateName} />
                      <AvatarFallback>{placement.candidateName.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg">{placement.candidateName}</h3>
                    <p className="text-primary font-medium">{placement.position}</p>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2">
                       <Image data-ai-hint="logo" src={placement.companyLogoUrl} alt={`${placement.company} logo`} width={20} height={20} className="rounded-full" />
                       <span>{placement.company}</span>
                       <span className="text-xs">&bull;</span>
                       <SocialIcon platform={placement.platform} className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
