
"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { SocialIcon, type SocialPlatform } from "@/components/shared/social-icon";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import Image from "next/image";
import { ExternalLink, Verified, X } from "lucide-react";
import { Badge } from "./badge";
import { Separator } from "./separator";
import type { DetailedTalent } from "@/lib/talent";
import Link from 'next/link';

export interface Talent {
    name: string
    role: string
    src: string
    platform?: SocialPlatform
    bio: string
    status?: 'available';
    hireable?: boolean;
    stats?: {
        videos: number;
        views: string;
        likes: string;
    };
    portfolio?: {
        src: string;
        alt: string;
        verified?: boolean;
        'data-ai-hint'?: string;
    }[];
}


export interface TalentListingComponentProps {
    talents: DetailedTalent[]
    className?: string
    onTalentClick?: (talent: DetailedTalent) => void
}

export default function TalentListingComponent({
    talents,
    className,
    onTalentClick,
}: TalentListingComponentProps) {
    const [activeItem, setActiveItem] = useState<DetailedTalent | null>(null)
    const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
    useOnClickOutside(ref, () => setActiveItem(null))

    useEffect(() => {
        function onKeyDown(event: { key: string }) {
            if (event.key === "Escape") {
                setActiveItem(null)
            }
        }

        window.addEventListener("keydown", onKeyDown)
        return () => window.removeEventListener("keydown", onKeyDown)
    }, [])
    
    const talentProfileLink = (talentName: string) => `/talent/${talentName.toLowerCase().replace(/ /g, '-')}`;

    return (
        <>
            <AnimatePresence>
                {activeItem ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-black/60 pointer-events-auto fixed inset-0 z-50 backdrop-blur-sm"
                        onClick={() => setActiveItem(null)}
                    />
                ) : null}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem ? (
                    <div className="fixed inset-0 z-50 grid place-items-center p-4">
                        <motion.div
                            className="bg-card flex h-fit w-[90%] max-w-2xl cursor-default flex-col items-start gap-4 overflow-hidden border p-4 shadow-lg rounded-xl"
                            ref={ref}
                            layoutId={`talentItem-${activeItem.name}`}
                        >
                            <div className="w-full flex justify-between items-start">
                                <div className="flex w-full items-start gap-4">
                                    <motion.div layoutId={`talentItemLogo-${activeItem.name}`} className="relative">
                                         <Avatar className="rounded-full size-16 border-2 border-background shadow">
                                            <AvatarImage data-ai-hint="person" src={activeItem.src} alt={activeItem.name} />
                                            <AvatarFallback className="rounded-full text-xl">
                                                {activeItem.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                        {activeItem.hireable && (
                                            <div className="absolute inset-0 rounded-full animate-spin-slow pointer-events-none">
                                                <svg viewBox="0 0 100 100" className="w-full h-full">
                                                <defs>
                                                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                                                </defs>
                                                <text dy="6" fill="hsl(var(--primary-foreground))" className="text-[14px] font-semibold uppercase tracking-wider">
                                                    <textPath xlinkHref="#circle">Hire Me • Hire Me •</textPath>
                                                </text>
                                                </svg>
                                            </div>
                                        )}
                                    </motion.div>
                                    <div className="flex flex-col gap-0.5 mt-2">
                                        <motion.div
                                            className="text-foreground text-lg font-bold flex items-center gap-2"
                                            layoutId={`talentItemName-${activeItem.name}`}
                                        >
                                            {activeItem.name}
                                            {activeItem.status === 'available' && <div className="size-2.5 bg-red-500 rounded-full"></div>}
                                        </motion.div>
                                        <motion.div
                                            className="text-muted-foreground flex items-center gap-2 text-sm"
                                            layoutId={`talentItemRole-${activeItem.name}`}
                                        >
                                            {activeItem.platform && <SocialIcon platform={activeItem.platform} className="h-4 w-4" />}
                                            <span className="block truncate">
                                                {activeItem.role}
                                            </span>
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Button asChild variant="outline" className="gap-2 hidden sm:flex"><Link href={talentProfileLink(activeItem.name)}>View full profile <ExternalLink className="h-4 w-4" /></Link></Button>
                                    <Button variant="ghost" size="icon" onClick={() => setActiveItem(null)}><X className="h-5 w-5" /></Button>
                                </div>
                            </div>
                            
                            {activeItem.stats && (
                                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.05 } }} className="w-full">
                                    <Card>
                                        <CardContent className="p-4 flex justify-around">
                                            <div className="text-center">
                                                <p className="text-2xl font-bold">{activeItem.stats.videos}</p>
                                                <p className="text-sm text-muted-foreground">Videos</p>
                                            </div>
                                            <Separator orientation="vertical" className="h-auto" />
                                            <div className="text-center">
                                                <p className="text-2xl font-bold">{activeItem.stats.views}</p>
                                                <p className="text-sm text-muted-foreground">Views</p>
                                            </div>
                                            <Separator orientation="vertical" className="h-auto" />
                                            <div className="text-center">
                                                <p className="text-2xl font-bold">{activeItem.stats.likes}</p>
                                                <p className="text-sm text-muted-foreground">Likes</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )}
                            
                            {activeItem.portfolio && activeItem.portfolio.length > 0 && (
                                <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, transition: { duration: 0.05 } }} className="w-full space-y-4">
                                    <h3 className="font-semibold text-lg">Portfolio</h3>
                                     <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                        {activeItem.portfolio.map((item, index) => (
                                            <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                                                <Image src={item.src} alt={item.alt} fill className="object-cover" data-ai-hint={item['data-ai-hint']} />
                                                {item.verified && (
                                                     <Badge variant="secondary" className="absolute top-2 left-2 gap-1.5 bg-background/80 backdrop-blur-sm">
                                                        <Verified className="h-4 w-4 text-green-500" />
                                                        Verified
                                                    </Badge>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}

                             <motion.div
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                className="w-full flex sm:hidden">
                                <Button asChild variant="outline" className="w-full gap-2"><Link href={talentProfileLink(activeItem.name)}>View full profile <ExternalLink className="h-4 w-4" /></Link></Button>
                            </motion.div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <div
                role="list"
                aria-label="Top talent"
                className={`relative w-full items-start ${className || ""}`}>
                <div className="relative grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6">
                    {talents.map((talent) => (
                         <motion.div
                            key={talent.name}
                            layoutId={`talentItem-${talent.name}`}
                            onClick={() => {
                                setActiveItem(talent);
                                if (onTalentClick) onTalentClick(talent);
                            }}
                            role="listitem"
                            className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-lg border bg-background p-3 shadow-sm cursor-pointer hover:shadow-md transition-shadow"
                        >
                            <motion.div layoutId={`talentItemLogo-${talent.name}`} className="relative">
                                <Avatar className="rounded-full size-12 border border-transparent shadow ring-1 ring-foreground/10">
                                    <AvatarImage data-ai-hint="person" src={talent.src} alt={talent.name} />
                                    <AvatarFallback className="rounded-full text-base">
                                        {talent.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            </motion.div>

                            <div className="min-w-0">
                                <motion.div layoutId={`talentItemName-${talent.name}`} className="text-foreground flex items-center gap-2 truncate text-[15px] font-semibold">
                                    {talent.name}
                                     {talent.status === 'available' && <div className="size-2 bg-red-500 rounded-full shrink-0"></div>}
                                </motion.div>
                                <motion.div layoutId={`talentItemRole-${talent.name}`} className="text-muted-foreground flex items-center gap-2 text-sm">
                                    {talent.platform && <SocialIcon platform={talent.platform} className="h-4 w-4" />}
                                    <span className="block truncate">
                                        {talent.role}
                                    </span>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}
