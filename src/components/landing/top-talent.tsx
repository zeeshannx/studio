'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const talents = [
    { name: 'Sergey Dolgov', role: 'Creative Director', avatarUrl: 'https://picsum.photos/seed/tt1/64/64' },
    { name: 'Thomas Beer', role: 'Channel Manager', avatarUrl: 'https://picsum.photos/seed/tt2/64/64' },
    { name: 'Walker', role: 'Thumbnail Designer', avatarUrl: 'https://picsum.photos/seed/tt3/64/64' },
    { name: 'Neox', role: 'Thumbnail Designer', avatarUrl: 'https://picsum.photos/seed/tt4/64/64' },
    { name: 'VANISZ WORKS', role: 'Video Editor', avatarUrl: 'https://picsum.photos/seed/tt5/64/64' },
    { name: 'Hald', role: 'Thumbnail Designer', avatarUrl: 'https://picsum.photos/seed/tt6/64/64' },
    { name: 'TKG', role: 'Thumbnail Designer', avatarUrl: 'https://picsum.photos/seed/tt7/64/64' },
    { name: 'OscarVLTR', role: 'Creative Director', avatarUrl: 'https://picsum.photos/seed/tt8/64/64' },
    { name: 'Dimcha', role: 'Thumbnail Designer', avatarUrl: 'https://picsum.photos/seed/tt9/64/64' },
];

export function TopTalent() {
    return (
        <section id="talent" className="py-16 md:py-24">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold font-headline">Top Talent</h2>
                <Link href="#" className="text-primary hover:underline flex items-center gap-1">
                    Explore 97K+ Talent <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {talents.map((talent, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <Avatar className="w-12 h-12">
                                        <AvatarImage data-ai-hint="person" src={talent.avatarUrl} alt={talent.name} />
                                        <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h3 className="font-semibold">{talent.name}</h3>
                                        <p className="text-sm text-muted-foreground">{talent.role}</p>
                                    </div>
                                </div>
                                <ArrowRight className="h-5 w-5 text-muted-foreground" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
}
