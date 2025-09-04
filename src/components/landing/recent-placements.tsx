'use client';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { SocialPlatform } from "../shared/social-icon";
import PlacementListingComponent, { type Placement } from "../ui/placementlisting-component";

const placements: Placement[] = [
  { candidateName: 'Jared Klein', candidateAvatarUrl: 'https://picsum.photos/seed/p1/100/100', position: 'Thumbnail Designer', companyName: 'MegaBuilds', companyLogoUrl: 'https://picsum.photos/seed/cl1/40/40', companySubs: '1.52M', platform: 'YouTube', description: 'Jared, a thumbnail design expert, was hired by MegaBuilds to increase their click-through rates. His creative designs led to a 25% boost in viewership.' },
  { candidateName: 'Greenguy Studio', candidateAvatarUrl: 'https://picsum.photos/seed/p2/100/100', position: 'Video Editor', companyName: 'The Wingrove Family', companyLogoUrl: 'https://picsum.photos/seed/cl2/40/40', companySubs: '2.31M', platform: 'TikTok', description: 'The Wingrove Family partnered with Greenguy Studio to edit their short-form content, resulting in a 40% increase in engagement on TikTok.' },
  { candidateName: 'Misha Karpenko', candidateAvatarUrl: 'https://picsum.photos/seed/p3/100/100', position: 'Video Editor', companyName: 'Wilco Wanders', companyLogoUrl: 'https://picsum.photos/seed/cl3/40/40', companySubs: '14.9K', platform: 'Instagram', description: 'Wilco Wanders brought on Misha to edit their travel vlogs for Instagram Reels, which helped them secure a major brand sponsorship.' },
  { candidateName: 'Sophie Chen', candidateAvatarUrl: 'https://picsum.photos/seed/p4/100/100', position: 'Community Manager', companyName: 'Gamer\'s Nexus', companyLogoUrl: 'https://picsum.photos/seed/cl4/40/40', companySubs: '5M', platform: 'Discord', description: 'Gamer\'s Nexus hired Sophie to manage their Discord community, growing their server by 10,000 members in just three months.' },
  { candidateName: 'Alex Rodriguez', candidateAvatarUrl: 'https://picsum.photos/seed/p5/100/100', position: 'Content Strategist', companyName: 'Stream Queen', companyLogoUrl: 'https://picsum.photos/seed/cl5/40/40', companySubs: '8.2M', platform: 'Twitch', description: 'Stream Queen onboarded Alex as a Content Strategist, who diversified their stream content and doubled their average concurrent viewership.' },
  { candidateName: 'Ben Carter', candidateAvatarUrl: 'https://picsum.photos/seed/p6/100/100', position: 'Social Media Manager', companyName: 'Fashion Forward', companyLogoUrl: 'https://picsum.photos/seed/cl6/40/40', companySubs: '3.1M', platform: 'X', description: 'Ben took over as Social Media Manager for Fashion Forward, revitalizing their X presence and increasing their follower count by 500K.' },
  { candidateName: 'Chloe Davis', candidateAvatarUrl: 'https://picsum.photos/seed/p7/100/100', position: 'Brand Manager', companyName: 'BizBoost', companyLogoUrl: 'https://picsum.photos/seed/cl7/40/40', companySubs: '500K', platform: 'LinkedIn', description: 'BizBoost hired Chloe as a Brand Manager to elevate their LinkedIn profile, leading to new B2B partnerships and a major industry award.' },
  { candidateName: 'Daniel Evans', candidateAvatarUrl: 'https://picsum.photos/seed/p8/100/100', position: 'Shorts Editor', companyName: 'Quick Vids', companyLogoUrl: 'https://picsum.photos/seed/cl8/40/40', companySubs: '12M', platform: 'YouTube', description: 'Quick Vids brought on Daniel to edit their YouTube Shorts, and his fast-paced editing style helped them consistently hit the trending page.' },
  { candidateName: 'Emily White', candidateAvatarUrl: 'https://picsum.photos/seed/p9/100/100', position: 'Account Manager', companyName: 'Secret Garden', companyLogoUrl: 'https://picsum.photos/seed/cl9/40/40', companySubs: '250K', platform: 'OnlyFans', description: 'Emily joined Secret Garden as an Account Manager, where she optimized their content strategy and doubled their monthly subscription revenue.' },
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
      <PlacementListingComponent placements={placements} />
    </section>
  );
}
