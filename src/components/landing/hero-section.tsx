
'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { getHeroPhrases, type HeroPhrase } from '@/ai/flows/hero-text-flow';
import { SocialIcon } from '../shared/social-icon';
import { motion } from 'framer-motion';

const PHRASES: HeroPhrase[] = [
  { name: 'Instagram', color: '#E4405F' },
  { name: 'YouTube', color: '#FF0000' },
  { name: 'Twitch', color: '#9146FF' },
  { name: 'TikTok', color: '#000000' },
  { name: 'Snapchat', color: '#FFFC00' },
  { name: 'Facebook', color: '#1877F2' },
  { name: 'X', color: '#000000' },
  { name: 'Pinterest', color: '#E60023' },
  { name: 'LinkedIn', color: '#0A66C2' },
];

export function HeroSection() {
  const [phrases, setPhrases] = useState<HeroPhrase[]>(PHRASES);
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

  const currentPhrase = phrases[currentIndex] || PHRASES[0];
  const animationSteps = currentPhrase.name.length;
  const animationDuration = `${animationSteps * 0.15}s`;

  return (
    <section className="py-20 md:py-32 bg-transparent">
      <div className="container mx-auto px-4 text-center">
        <div className="animate-in fade-in slide-in-from-top-8 duration-1000 ease-out">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline h-24 md:h-32 flex flex-wrap items-center justify-center gap-x-4">
            <span>Find Your Next Social Media Job — Across</span>
            <div className="flex items-center gap-3">
                <motion.div
                    key={`${key}-icon`}
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: parseFloat(animationDuration) + 0.2, duration: 0.5 }}
                    className="hidden md:block"
                >
                    <SocialIcon platform={currentPhrase.name as any} className="h-12 w-12" />
                </motion.div>
                <span
                    key={key}
                    className={cn(
                    'inline-block overflow-hidden whitespace-nowrap border-r-4 align-bottom text-transparent bg-clip-text text-gradient',
                    'animate-[typing,blink-caret_.5s_step-end_infinite] w-0'
                    )}
                    style={{
                    width: `${animationSteps}ch`,
                    borderColor: currentPhrase.color,
                    '--primary-gradient-start': currentPhrase.color,
                    '--primary-gradient-end': `color-mix(in srgb, ${currentPhrase.color} 70%, black)`,
                    animationName: 'typing, blink-caret',
                    animationDuration: `${animationDuration}, 0.75s`,
                    animationTimingFunction: `steps(${animationSteps}, end), step-end`,
                    animationIterationCount: '1, infinite',
                    animationFillMode: 'forwards',
                    } as React.CSSProperties}
                >
                    {currentPhrase.name}
                </span>
            </div>
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
          <Button type="submit" size="lg" className="bg-primary-gradient">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}
