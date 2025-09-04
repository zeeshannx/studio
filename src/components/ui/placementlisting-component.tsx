"use client"

import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useOnClickOutside } from "usehooks-ts"
import { Button } from "@/components/ui/button"
import { SocialIcon, type SocialPlatform } from "@/components/shared/social-icon";
import { Avatar, AvatarImage, AvatarFallback } from "./avatar";

export interface Placement {
    candidateName: string;
    candidateAvatarUrl: string;
    position: string;
    companyName: string;
    companyLogoUrl: string;
    companySubs: string;
    platform: SocialPlatform;
    description: string;
}

export interface PlacementListingComponentProps {
    placements: Placement[]
    className?: string
    onPlacementClick?: (placement: Placement) => void
}

export default function PlacementListingComponent({
    placements,
    className,
    onPlacementClick,
}: PlacementListingComponentProps) {
    const [activeItem, setActiveItem] = useState<Placement | null>(null)
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
                                layoutId={`placementItem-${activeItem.companyName}-${activeItem.candidateName}`}
                                style={{ borderRadius: 12 }}
                            >
                                <div className="flex w-full items-center gap-4">
                                    <motion.div className="flex -space-x-4" layoutId={`placementItemLogo-${activeItem.companyName}-${activeItem.candidateName}`}>
                                        <Avatar className="w-12 h-12 border-2 border-background">
                                            <AvatarImage data-ai-hint="logo" src={activeItem.companyLogoUrl} alt={activeItem.companyName} />
                                            <AvatarFallback>{activeItem.companyName.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <Avatar className="w-12 h-12 border-2 border-background">
                                            <AvatarImage data-ai-hint="person" src={activeItem.candidateAvatarUrl} alt={activeItem.candidateName} />
                                            <AvatarFallback>{activeItem.candidateName.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    </motion.div>
                                    <div className="flex grow items-center justify-between">
                                        <div className="flex w-full flex-col gap-0.5">
                                            <motion.div
                                                className="flex items-center gap-2"
                                                layoutId={`placementItemCompany-${activeItem.companyName}-${activeItem.candidateName}`}
                                            >
                                                <p className="font-semibold">{activeItem.companyName}, {activeItem.companySubs}</p>
                                                <SocialIcon platform={activeItem.platform} className="h-4 w-4" />
                                            </motion.div>
                                            <motion.div
                                                className="text-sm text-muted-foreground"
                                                layoutId={`placementItemCandidate-${activeItem.companyName}-${activeItem.candidateName}`}
                                            >
                                                {activeItem.candidateName}, {activeItem.position}
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
                                    {activeItem.description}
                                </motion.p>
                            </motion.div>
                        </div>
                    </>
                ) : null}
            </AnimatePresence>
            <div
                role="list"
                aria-label="Recent Placements"
                className={`relative w-full items-start ${className || ""}`}>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {placements.map((placement) => (
                        <motion.div
                            key={`${placement.companyName}-${placement.candidateName}`}
                            layoutId={`placementItem-${placement.companyName}-${placement.candidateName}`}
                            onClick={() => {
                                setActiveItem(placement);
                                if (onPlacementClick) onPlacementClick(placement);
                            }}
                            role="listitem"
                            className="bg-background rounded-lg border p-4 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <motion.div className="flex -space-x-4" layoutId={`placementItemLogo-${placement.companyName}-${placement.candidateName}`}>
                                    <Avatar className="w-12 h-12 border-2 border-background">
                                        <AvatarImage data-ai-hint="logo" src={placement.companyLogoUrl} alt={placement.companyName} />
                                        <AvatarFallback>{placement.companyName.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <Avatar className="w-12 h-12 border-2 border-background">
                                        <AvatarImage data-ai-hint="person" src={placement.candidateAvatarUrl} alt={placement.candidateName} />
                                        <AvatarFallback>{placement.candidateName.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                </motion.div>
                                <div className="flex-grow">
                                    <motion.div className="flex items-center gap-2" layoutId={`placementItemCompany-${placement.companyName}-${placement.candidateName}`}>
                                        <p className="font-semibold">{placement.companyName}, {placement.companySubs}</p>
                                        <SocialIcon platform={placement.platform} className="h-4 w-4" />
                                    </motion.div>
                                    <motion.p className="text-sm text-muted-foreground" layoutId={`placementItemCandidate-${placement.companyName}-${placement.candidateName}`}>{placement.candidateName}, {placement.position}</motion.p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    )
}
