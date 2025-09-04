'use client';
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

const talents = [
    { src: 'https://picsum.photos/seed/tt1/64/64', name: 'Sergey Dolgov', role: 'Creative Director' },
    { src: 'https://picsum.photos/seed/tt2/64/64', name: 'Thomas Beer', role: 'Channel Manager' },
    { src: 'https://picsum.photos/seed/tt3/64/64', name: 'Walker', role: 'Thumbnail Designer' },
    { src: 'https://picsum.photos/seed/tt4/64/64', name: 'Neox', role: 'Thumbnail Designer' },
    { src: 'https://picsum.photos/seed/tt5/64/64', name: 'VANISZ WORKS', role: 'Video Editor' },
    { src: 'https://picsum.photos/seed/tt6/64/64', name: 'Hald', role: 'Thumbnail Designer' },
    { src: 'https://picsum.photos/seed/tt7/64/64', name: 'TKG', role: 'Thumbnail Designer' },
    { src: 'https://picsum.photos/seed/tt8/64/64', name: 'OscarVLTR', role: 'Creative Director' },
    { src: 'https://picsum.photos/seed/tt9/64/64', name: 'Dimcha', role: 'Thumbnail Designer' },
]

export function TopTalent() {
  return (
    <section id="talent" className="py-16 md:py-24 bg-muted/50">
      <div className="mx-auto w-full max-w-5xl px-4">
        {/* Header */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-foreground text-balance text-4xl font-semibold md:text-5xl">
            Top Talent
          </h2>
          <p className="text-muted-foreground mt-4 max-w-3xl text-pretty text-lg leading-relaxed">
            Our talented professionals bring diverse expertise and passion to every project. Together,
            we collaborate to deliver exceptional results and innovative solutions for our clients.
          </p>

          <Button asChild variant="outline" className="mt-6 h-9 rounded-full pr-2">
            <Link href="#">
              Explore 97K+ Talent
              <ChevronRight className="ml-1 size-4 opacity-60" />
            </Link>
          </Button>
        </div>

        {/* Grid */}
        <div
          role="list"
          aria-label="Top talent"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {talents.map((talent, i) => (
            <div
              key={i}
              role="listitem"
              className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-lg border bg-background p-3 shadow-sm"
            >
              <Avatar className="rounded-md size-12 border border-transparent shadow ring-1 ring-foreground/10">
                <AvatarImage data-ai-hint="person" src={talent.src} alt={talent.name} />
                <AvatarFallback className="rounded-md text-base">
                  {talent.name.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="min-w-0">
                <span className="text-foreground block truncate text-[15px] font-semibold">
                  {talent.name}
                </span>
                <span className="text-muted-foreground block truncate text-sm">
                  {talent.role}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
