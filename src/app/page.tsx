import { HeroSection } from '@/components/landing/hero-section';
import { FeaturedJobs } from '@/components/landing/featured-jobs';
import { RecentPlacements } from '@/components/landing/recent-placements';
import { TopTalent } from '@/components/landing/top-talent';
import { Leaderboards } from '@/components/landing/leaderboards';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24 overflow-x-hidden">
      <HeroSection />
      <div className="container mx-auto px-4">
        <FeaturedJobs />
        <RecentPlacements />
        <TopTalent />
        <Leaderboards />
      </div>
    </div>
  );
}
