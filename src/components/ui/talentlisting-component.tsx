"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { SocialIcon, type SocialPlatform } from "@/components/shared/social-icon";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

export interface Talent {
    name: string
    role: string
    src: string
    platform?: SocialPlatform
    bio: string
}

export interface TalentListingComponentProps {
    talents: Talent[]
    className?: string
    onTalentClick?: (talent: Talent) => void
}

export default function TalentListingComponent({
    talents,
    className,
    onTalentClick,
}: TalentListingComponentProps) {
    const [activeItem, setActiveItem] = useState<Talent | null>(null)
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

    return (
        <>
            <AnimatePresence>
                {activeItem ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="bg-smooth-1000/10 /10 pointer-events-none absolute inset-0 z-10 bg-blend-luminosity backdrop-blur-xl"
                    />
                ) : null}
            </AnimatePresence>
            <AnimatePresence>
                {activeItem ? (
                    <>
                        <div className="group absolute inset-0 z-10 grid place-items-center">
                            <motion.div
                                className="bg-background flex h-fit w-[90%] max-w-lg cursor-pointer flex-col items-start gap-4 overflow-hidden border p-4 shadow-xs"
                                ref={ref}
                                layoutId={`talentItem-${activeItem.name}`}
                                style={{ borderRadius: 12 }}
                            >
                                <div className="flex w-full items-center gap-4">
                                    <motion.div layoutId={`talentItemLogo-${activeItem.name}`}>
                                        <Avatar className="rounded-md size-12 border border-transparent shadow ring-1 ring-foreground/10">
                                            <AvatarImage data-ai-hint="person" src={activeItem.src} alt={activeItem.name} />
                                            <AvatarFallback className="rounded-md text-base">
                                                {activeItem.name.charAt(0)}
                                            </AvatarFallback>
                                        </Avatar>
                                    </motion.div>
                                    <div className="flex grow items-center justify-between">
                                        <div className="flex w-full flex-col gap-0.5">
                                            <motion.div
                                                className="text-foreground text-sm font-medium"
                                                layoutId={`talentItemName-${activeItem.name}`}
                                            >
                                                {activeItem.name}
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
                                </div>
                                <motion.p
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                    className="text-foreground text-sm"
                                >
                                    {activeItem.bio}
                                </motion.p>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0, transition: { duration: 0.05 } }}
                                    className="w-full pt-2">
                                    <Button className="w-full">View Profile</Button>
                                </motion.div>
                            </motion.div>
                        </div>
                    </>
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
                            className="grid grid-cols-[auto_1fr] items-center gap-3 rounded-lg border bg-background p-3 shadow-sm cursor-pointer"
                        >
                            <motion.div layoutId={`talentItemLogo-${talent.name}`}>
                                <Avatar className="rounded-md size-12 border border-transparent shadow ring-1 ring-foreground/10">
                                    <AvatarImage data-ai-hint="person" src={talent.src} alt={talent.name} />
                                    <AvatarFallback className="rounded-md text-base">
                                        {talent.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                            </motion.div>

                            <div className="min-w-0">
                                <motion.span layoutId={`talentItemName-${talent.name}`} className="text-foreground block truncate text-[15px] font-semibold">
                                    {talent.name}
                                </motion.span>
                                <motion.div layoutId={`talentItemRole-${talent.name}`} className="text-muted-foreground flex items-center gap-2 text-sm">
                                    <SocialIcon platform={talent.platform} className="h-4 w-4" />
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
