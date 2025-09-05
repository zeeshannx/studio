
'use client';

import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { SocialIcon, SocialPlatform } from '../shared/social-icon';

interface Logo {
  id: string;
  description: string;
  image: string;
  followers: string;
  platform: SocialPlatform;
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
    { id: 'logo-1', description: 'Marques Brownlee', image: 'https://yt3.ggpht.com/-lNGwllze1Xk/AAAAAAAAAAI/AAAAAAAAAAA/N6QnsHGN7Fk/s900-c-k-no/photo.jpg', followers: '18.5M', platform: 'YouTube', className: "h-16 w-16 rounded-full" },
    { id: 'logo-2', description: 'MrBeast', image: 'https://yt3.ggpht.com/-egl0BJumF1A/AAAAAAAAAAI/AAAAAAAAAAA/zk1ch1-WaY8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', followers: '250M', platform: 'YouTube', className: "h-16 w-16 rounded-full" },
    { id: 'logo-3', description: 'Emma Chamberlain', image: 'https://media1.popsugar-assets.com/files/thumbor/ivPwCzKnGH1rfzP-ZwxU7mBZjKo/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/05/07/790/n/1922153/tmp_aN0w1Q_1c08c95c2518faaa_GettyImages-1152470007.jpg', followers: '12M', platform: 'YouTube', className: "h-16 w-16 rounded-full" },
    { id: 'logo-4', description: 'PewDiePie', image: 'https://i.pinimg.com/originals/7e/f7/77/7ef7776d02efd1c241bf547b0a8cb719.png', followers: '111M', platform: 'YouTube', className: "h-16 w-16 rounded-full" },
    { id: 'logo-5', description: 'Casey Neistat', image: 'https://picsum.photos/seed/casey/64/64', followers: '12.5M', platform: 'YouTube', className: "h-16 w-16 rounded-full" },
    { id: 'logo-6', description: 'Lilly Singh', image: 'https://tse1.mm.bing.net/th/id/OIP.nFhJnw15bRYG2wNhB5ToQQAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', followers: '14.5M', platform: 'YouTube', className: "h-16 w-16 rounded-full" },
    { id: 'logo-7', description: 'Ninja', image: 'https://picsum.photos/seed/ninja/64/64', followers: '24M', platform: 'Twitch', className: "h-16 w-16 rounded-full" },
    { id: 'logo-8', description: 'Pokimane', image: 'https://dotesports.com/wp-content/uploads/2022/08/22211037/Feature-Image-58.jpg?w=1200', followers: '9.3M', platform: 'Twitch', className: "h-16 w-16 rounded-full" },
    { id: 'logo-9', description: 'Dude Perfect', image: 'https://tse2.mm.bing.net/th/id/OIP.f42QszETJqaT7Jq9rdsubQHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3', followers: '60M', platform: 'YouTube', className: "h-16 w-16 rounded-full" },
    { id: 'logo-10', description: 'Smosh', image: 'https://yt3.ggpht.com/-AufHIQ3sLmM/AAAAAAAAAAI/AAAAAAAAAAA/hPFE6k06-Ls/s900-c-k-no-rj-c0xffffff/photo.jpg', followers: '25M', platform: 'YouTube', className: "h-16 w-16 rounded-full" },
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
                  <div className="mx-10 flex flex-col shrink-0 items-center justify-center">
                    <Image
                      src={logo.image}
                      alt={logo.description}
                      width={64}
                      height={64}
                      className={logo.className}
                      data-ai-hint="person"
                    />
                    <div className="text-center mt-2">
                        <p className="font-semibold text-sm">{logo.description}</p>
                        <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                            <SocialIcon platform={logo.platform} className="h-3 w-3" />
                            <p>{logo.followers}</p>
                        </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Logos };

    