'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { GridPattern } from '@/components/ui/grid-pattern';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { getHeroPhrases } from '@/ai/flows/hero-text-flow';

const PHRASES = [
  'Instagram',
  'YouTube',
  'Twitch',
  'TikTok',
  'Snapchat',
];

export function HeroSection() {
  const [phrases, setPhrases] = useState<string[]>(PHRASES);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [key, setKey] = useState(0);

  useEffect(() => {
    async function fetchPhrases() {
      try {
        const result = await getHeroPhrases();
        if (result.phrases && result.phrases.length > 0) {
          setPhrases(result.phrases);
        }
      } catch (error) {
        console.error('Failed to fetch hero phrases, using default.', error);
      }
    }
    fetchPhrases();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      setKey((prevKey) => prevKey + 1); // Reset animation
    }, 4000); // Change phrase every 4 seconds (2s typing + 2s pause)

    return () => clearInterval(interval);
  }, [phrases]);

  const currentPhrase = phrases[currentIndex];
  // Dynamically generate the steps and width based on phrase length
  const animationSteps = currentPhrase.length;
  const animationDuration = `${animationSteps * 0.15}s`; // Adjust speed of typing

  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
       <GridPattern
        width={30}
        height={30}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
          "animate-[float_6s_ease-in-out_infinite]"
        )}
      />
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-top-8 duration-1000 ease-out">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline h-24 md:h-32">
            Find Your Next Social Media Job — Across{` `}
            <span
              key={key}
              className={cn(
                'inline-block text-primary overflow-hidden whitespace-nowrap border-r-4 border-r-primary align-bottom',
                 'animate-[typing,blink-caret_.5s_step-end_infinite] w-0'
              )}
              style={{
                width: `${animationSteps}ch`,
                animationName: 'typing, blink-caret',
                animationDuration: `${animationDuration}, 0.75s`,
                animationTimingFunction: `steps(${animationSteps}, end), step-end`,
                animationIterationCount: '1, infinite',
                animationFillMode: 'forwards',
              } as React.CSSProperties}
            >
              {currentPhrase}
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
