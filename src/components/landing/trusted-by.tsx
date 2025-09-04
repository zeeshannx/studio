'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const creators = [
    { name: 'Creator 1', avatarUrl: 'https://picsum.photos/seed/c1/64/64', subs: '101M' },
    { name: 'Creator 2', avatarUrl: 'https://picsum.photos/seed/c2/64/64', subs: '138M' },
    { name: 'Creator 3', avatarUrl: 'https://picsum.photos/seed/c3/64/64', subs: '98.3M' },
    { name: 'Creator 4', avatarUrl: 'https://picsum.photos/seed/c4/64/64', subs: '76.2M' },
    { name: 'Creator 5', avatarUrl: 'https://picsum.photos/seed/c5/64/64', subs: '88.9M' },
    { name: 'Creator 6', avatarUrl: 'https://picsum.photos/seed/c6/64/64', subs: '91.3M' },
    { name: 'Creator 7', avatarUrl: 'https://picsum.photos/seed/c7/64/64', subs: '68.1M' },
    { name: 'Creator 8', avatarUrl: 'https://picsum.photos/seed/c8/64/64', subs: '27.7M' },
];

export function TrustedBy() {
    return (
        <section className="py-16 md:py-24">
            <h2 className="text-2xl font-bold text-center mb-8 font-headline">
                Trusted by 3000+ YouTube Creators
            </h2>
            <div className="relative">
                <div className="flex justify-center items-center gap-4 md:gap-8">
                    {creators.map((creator) => (
                        <div key={creator.name} className="flex flex-col items-center gap-2">
                            <Avatar className="w-16 h-16">
                                <AvatarImage data-ai-hint="person" src={creator.avatarUrl} alt={creator.name} />
                                <AvatarFallback>{creator.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <Badge variant="secondary">{creator.subs}</Badge>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
