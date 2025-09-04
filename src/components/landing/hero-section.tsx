'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute h-48 w-48 bg-primary/10 rounded-full -top-12 -left-12 animate-[float_6s_ease-in-out_infinite]"></div>
        <div className="absolute h-64 w-64 bg-accent/10 rounded-full -bottom-24 -right-12 animate-[float_8s_ease-in-out_infinite_1s]"></div>
        <div className="absolute h-32 w-32 bg-primary/10 rounded-full bottom-12 left-1/4 animate-[float_5s_ease-in-out_infinite_2s]"></div>
        <div className="absolute h-24 w-24 bg-accent/10 rounded-lg top-12 right-1/4 animate-[float_7s_ease-in-out_infinite_0.5s] rotate-45"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-in fade-in slide-in-from-top-8 duration-1000 ease-out">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline">
            Find Your Next Social Media Gig
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
