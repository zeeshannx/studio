import { HeroSection } from '@/components/landing/hero-section';
import { FeaturedJobs } from '@/components/landing/featured-jobs';
import { RecentPlacements } from '@/components/landing/recent-placements';
import { Leaderboards } from '@/components/landing/leaderboards';
import { TrustedBy } from '@/components/landing/trusted-by';
import { TopTalent } from '@/components/landing/top-talent';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden">
      <HeroSection />
      <div className="container mx-auto px-4">
        <TrustedBy />
        <FeaturedJobs />
        <RecentPlacements />
        <TopTalent />
        <Leaderboards />
      </div>
    </div>
  );
}
