import { HeroSection } from '@/components/landing/hero-section';
import { FeaturedJobs } from '@/components/landing/featured-jobs';
import { RecentPlacements } from '@/components/landing/recent-placements';
import { Leaderboards } from '@/components/landing/leaderboards';
import { Logos } from '@/components/landing/logos';
import { TopTalent } from '@/components/landing/top-talent';
import { AnimatedSection } from '@/components/shared/animated-section';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="relative flex flex-col gap-16 md:gap-24 overflow-hidden">
       <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          '[mask-image:radial-gradient(ellipse_at_center,white,transparent)]',
          'absolute inset-0 z-0 h-full w-full skew-y-12 opacity-50'
        )}
      />
      <div className="relative z-10">
        <HeroSection />
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Logos />
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
    </div>
  );
}
