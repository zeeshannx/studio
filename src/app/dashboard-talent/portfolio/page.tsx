
'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { clients, portfolioItems } from "@/lib/placeholder-data/portfolio"
import { Film, Image as ImageIcon, Plus, SortAsc } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { AddVideoDialog } from "./_components/add-video-dialog"


export default function PortfolioPage() {
    const [isAddVideoOpen, setIsAddVideoOpen] = useState(false);

    return (
        <>
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-grow lg:w-2/3 space-y-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <h1 className="text-3xl font-bold font-headline">Portfolio</h1>
                        <div className="flex items-center gap-2">
                            <Button
                                className="bg-primary-gradient gap-2"
                                onClick={() => setIsAddVideoOpen(true)}
                            >
                                <Plus className="h-4 w-4" /> Add Work
                            </Button>
                            <Button variant="outline" className="gap-2">
                               <Plus className="h-4 w-4" /> Quick Add
                            </Button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-muted-foreground">
                        <p>45 VIDEOS</p>
                        <Separator orientation="vertical" className="h-4" />
                        <p>+312M VIEWS</p>
                        <Separator orientation="vertical" className="h-4" />
                        <p>+4M LIKES</p>
                    </div>
                    
                    <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <SortAsc className="h-4 w-4" /> Reorder
                        </Button>
                        <Button variant="ghost" size="sm" className="bg-accent">All</Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><ImageIcon className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8"><Film className="h-4 w-4" /></Button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portfolioItems.map(item => (
                            <Card key={item.id} className="overflow-hidden group">
                                <div className="relative aspect-video">
                                    <Image
                                        src={item.thumbnailUrl}
                                        alt={item.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    {item.verified && (
                                        <Badge className="absolute top-2 left-2 bg-green-500/20 text-green-300 border-green-500/30">Verified</Badge>
                                    )}
                                </div>
                                <CardContent className="p-4 space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Avatar className="h-5 w-5">
                                            <AvatarImage src={item.creatorAvatarUrl} />
                                            <AvatarFallback>{item.title.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                        <div className="text-xs text-green-400 font-semibold">
                                            {item.views} &bull; {item.likes}
                                        </div>
                                    </div>
                                    <h3 className="font-semibold leading-tight truncate">{item.title}</h3>
                                    <Badge variant="outline">{item.tag}</Badge>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Right Sidebar */}
                <aside className="lg:w-1/3 lg:sticky top-8 self-start space-y-6">
                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-4">{clients.length} Clients</h2>
                            <div className="space-y-4">
                                {clients.map(client => (
                                    <div key={client.name} className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={client.avatarUrl} alt={client.name} />
                                                <AvatarFallback>{client.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{client.name}</p>
                                                <p className="text-sm text-muted-foreground">{client.subscribers}</p>
                                            </div>
                                        </div>
                                        <Link href="#" className="text-sm font-semibold text-primary hover:underline">Ask</Link>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </aside>
            </div>
            <AddVideoDialog open={isAddVideoOpen} onOpenChange={setIsAddVideoOpen} />
        </>
    )
}
