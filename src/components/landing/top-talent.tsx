'use client';
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import type { SocialPlatform } from '@/components/shared/social-icon';
import TalentListingComponent, { Talent } from '@/components/ui/talentlisting-component';

const talents: Talent[] = [
    { src: 'https://picsum.photos/seed/tt1/64/64', name: 'Sergey Dolgov', role: 'Creative Director', platform: 'YouTube' as SocialPlatform, bio: 'Award-winning Creative Director with a passion for storytelling and building brands on YouTube. Expertise in content strategy and viral marketing.' },
    { src: 'https://picsum.photos/seed/tt2/64/64', name: 'Thomas Beer', role: 'Channel Manager', platform: 'Twitch' as SocialPlatform, bio: 'Experienced Twitch Channel Manager, skilled in community engagement, stream production, and creator collaborations. Ready to grow your channel.' },
    { src: 'https://picsum.photos/seed/tt3/64/64', name: 'Walker', role: 'Thumbnail Designer', platform: 'Instagram' as SocialPlatform, bio: 'Specializing in click-worthy thumbnail designs that boost CTR. Proficient in Photoshop and current with all Instagram trends.' },
    { src: 'https://picsum.photos/seed/tt4/64/64', name: 'Neox', role: 'Thumbnail Designer', platform: 'TikTok' as SocialPlatform, bio: 'Creative Thumbnail Designer for TikTok, focused on creating viral, eye-catching visuals that stop the scroll. Let\'s make your content pop.' },
    { src: 'https://picsum.photos/seed/tt5/64/64', name: 'VANISZ WORKS', role: 'Video Editor', platform: 'YouTube' as SocialPlatform, bio: 'Professional Video Editor for YouTube, specializing in fast-paced, engaging content. Fluent in Adobe Premiere Pro and After Effects.' },
    { src: 'https://picsum.photos/seed/tt6/64/64', name: 'Hald', role: 'Thumbnail Designer', platform: 'Facebook' as SocialPlatform, bio: 'Results-driven Thumbnail Designer for Facebook content. I create compelling visuals that increase engagement and drive traffic.' },
    { src: 'https://picsum.photos/seed/tt7/64/64', name: 'TKG', role: 'Thumbnail Designer', platform: 'YouTube' as SocialPlatform, bio: 'YouTube Thumbnail specialist with a proven track record of increasing view counts through compelling and high-quality design.' },
    { src: 'https://picsum.photos/seed/tt8/64/64', name: 'OscarVLTR', role: 'Creative Director', platform: 'LinkedIn' as SocialPlatform, bio: 'Innovative Creative Director focused on building professional brands on LinkedIn. Expert in B2B content and corporate storytelling.' },
    { src: 'https://picsum.photos/seed/tt9/64/64', name: 'Dimcha', role: 'Thumbnail Designer', platform: 'X' as SocialPlatform, bio: 'I design impactful thumbnails for X (formerly Twitter) that capture attention and communicate your message effectively in a crowded feed.' },
    { src: 'https://picsum.photos/seed/tt10/64/64', name: 'Laura Chen', role: 'Social Media Manager', platform: 'Instagram' as SocialPlatform, bio: 'I help brands grow their Instagram presence through strategic content and community management. Let\'s create something beautiful together.' },
    { src: 'https://picsum.photos/seed/tt11/64/64', name: 'David Lee', role: 'Podcast Producer', platform: 'YouTube' as SocialPlatform, bio: 'From audio engineering to content strategy, I produce high-quality podcasts that captivate listeners and build loyal audiences on YouTube.' },
    { src: 'https://picsum.photos/seed/tt12/64/64', name: 'Aisha Khan', role: 'UGC Content Creator', platform: 'TikTok' as SocialPlatform, bio: 'Specializing in authentic and engaging user-generated style content for TikTok. I help brands connect with Gen Z.' },
    { src: 'https://picsum.photos/seed/tt13/64/64', name: 'Markus Black', role: 'Discord Community Moderator', platform: 'Discord' as SocialPlatform, bio: 'Building safe, active, and engaging communities on Discord. Experienced in moderation, event planning, and bot management.' },
    { src: 'https://picsum.photos/seed/tt14/64/64', name: 'Elena Petrova', role: 'OF Account Manager', platform: 'OnlyFans' as SocialPlatform, bio: 'Discreet and professional account manager for OnlyFans creators. I handle content scheduling, promotions, and fan engagement.' },
    { src: 'https://picsum.photos/seed/tt15/64/64', name: 'Jin Park', role: 'Short-form Video Editor', platform: 'Snapchat' as SocialPlatform, bio: 'Expert in creating fast-paced, attention-grabbing videos for Snapchat Spotlight and other short-form platforms.' },
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
        <TalentListingComponent talents={talents} />
      </div>
    </section>
  )
}
