'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface LogosProps {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos = ({
  heading = 'Trusted by 3000+ YouTube Creators',
  logos = [
    { id: 'logo-1', description: 'Creator 1', image: 'https://picsum.photos/seed/c1/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-2', description: 'Creator 2', image: 'https://picsum.photos/seed/c2/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-3', description: 'Creator 3', image: 'https://picsum.photos/seed/c3/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-4', description: 'Creator 4', image: 'https://picsum.photos/seed/c4/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-5', description: 'Creator 5', image: 'https://picsum.photos/seed/c5/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-6', description: 'Creator 6', image: 'https://picsum.photos/seed/c6/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-7', description: 'Creator 7', image: 'https://picsum.photos/seed/c7/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-8', description: 'Creator 8', image: 'https://picsum.photos/seed/c8/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-9', description: 'Creator 9', image: 'https://picsum.photos/seed/c9/64/64', className: "h-16 w-16 rounded-full" },
    { id: 'logo-10', description: 'Creator 10', image: 'https://picsum.photos/seed/c10/64/64', className: "h-16 w-16 rounded-full" },
  ],
  className,
}: LogosProps) => {
  return (
    <section className={cn('py-16 md:py-24', className)}>
      <div className="container flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold font-headline">
          {heading}
        </h2>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
          <Carousel
            opts={{ loop: true, align: 'start' }}
            plugins={[AutoScroll({ playOnInit: true, speed: 0.5 })]}
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/4 justify-center pl-0 sm:basis-1/5 md:basis-1/6 lg:basis-1/8"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <div>
                      <Image
                        src={logo.image}
                        alt={logo.description}
                        width={64}
                        height={64}
                        className={logo.className}
                        data-ai-hint="person"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos };
