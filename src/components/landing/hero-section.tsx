'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Use a timeout to trigger the animation after the initial render
    const timer = setTimeout(() => {
      setShow(true);
    }, 100); // Small delay to ensure CSS is loaded
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
       <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
        )}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-top-8 duration-1000 ease-out">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
            The Premier Marketplace for Creator{' '}
            <span
              className={cn(
                'inline-block text-primary overflow-hidden whitespace-nowrap border-r-4 border-r-primary',
                show ? 'animate-[typing_2s_steps(12),blink-caret_.5s_step-end_infinite] w-[7ch]' : 'w-0'
              )}
            >
              Economy Jobs
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            The #1 job board for creators, influencers, and social media professionals. Your next opportunity is just a search away.
          </p>
        </div>
        <form className="max-w-xl mx-auto flex gap-2 animate-in fade-in slide-in-from-top-12 duration-1000 ease-out delay-200">
          <Input
            type="text"
            placeholder="Search for jobs, e.g., 'Community Manager'"
            className="flex-grow text-base"
            aria-label="Search for jobs"
          />
          <Button type="submit" size="lg">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}
