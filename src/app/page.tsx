import { HeroSection } from '@/components/landing/hero-section';
import { FeaturedJobs } from '@/components/landing/featured-jobs';
import { RecentPlacements } from '@/components/landing/recent-placements';
import { Leaderboards } from '@/components/landing/leaderboards';
import { TrustedBy } from '@/components/landing/trusted-by';
import { TopTalent } from '@/components/landing/top-talent';
import { AnimatedSection } from '@/components/shared/animated-section';

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <HeroSection />
      <div className="container mx-auto px-4">
        <AnimatedSection>
          <TrustedBy />
        </AnimatedSection>
        <AnimatedSection>
          <FeaturedJobs />
        </AnimatedSection>
        <AnimatedSection>
          <RecentPlacements />
        </AnimatedSection>
        <AnimatedSection>
          <TopTalent />
        </AnimatedSection>
        <AnimatedSection>
          <Leaderboards />
        </AnimatedSection>
      </div>
    </div>
  );
}
