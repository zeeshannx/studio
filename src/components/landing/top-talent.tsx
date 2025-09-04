
'use client';
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { SocialPlatform } from '@/components/shared/social-icon';
import TalentListingComponent, { Talent } from '@/components/ui/talentlisting-component';
import { allTalents } from '@/lib/talent';

const talents: Talent[] = allTalents.slice(0, 15);


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
            <Link href="/talent">
              Explore {allTalents.length}+ Talent
              <ChevronRight className="ml-1 size-4 opacity-60" />
            </Link>
          </Button>
        </div>
        <TalentListingComponent talents={talents} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />
      </div>
    </section>
  )
}
