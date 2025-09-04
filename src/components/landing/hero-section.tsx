'use client';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 text-center">
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
          <Button type="submit" size="lg" className="bg-primary hover:bg-primary/90">
            <Search className="h-5 w-5 mr-2" />
            Search
          </Button>
        </form>
      </div>
    </section>
  );
}
