'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, TrendingUp, Star, ShieldCheck, Medal } from 'lucide-react';
import Link from 'next/link';

const trendingTalent = [
  { rank: 1, name: 'Sam Mankar', avatarUrl: 'https://picsum.photos/seed/tt1/40/40' },
  { rank: 2, name: 'Ali Bushe', avatarUrl: 'https://picsum.photos/seed/tt2/40/40' },
  { rank: 3, name: 'levelup', avatarUrl: 'https://picsum.photos/seed/tt3/40/40' },
  { rank: 4, name: 'Shaheer Kashif', avatarUrl: 'https://picsum.photos/seed/tt4/40/40' },
  { rank: 5, name: 'a Shet', avatarUrl: 'https://picsum.photos/seed/tt5/40/40' },
];

const topReviewed = [
  { rank: 1, name: 'Mohammad Parvej', avatarUrl: 'https://picsum.photos/seed/tr1/40/40' },
  { rank: 2, name: 'Sath Wikum', avatarUrl: 'https://picsum.photos/seed/tr2/40/40' },
  { rank: 3, name: 'Sadqain Norain', avatarUrl: 'https://picsum.photos/seed/tr3/40/40' },
  { rank: 4, name: 'asadullah changezi', avatarUrl: 'https://picsum.photos/seed/tr4/40/40' },
  { rank: 5, name: 'The Mystery Zero Studio', avatarUrl: 'https://picsum.photos/seed/tr5/40/40' },
];

const verifiedCollabs = [
  { rank: 1, name: 'levelup', avatarUrl: 'https://picsum.photos/seed/vc1/40/40' },
  { rank: 2, name: 'The Mystery Zero Studio', avatarUrl: 'https://picsum.photos/seed/vc2/40/40' },
  { rank: 3, name: 'Sath Wikum', avatarUrl: 'https://picsum.photos/seed/vc3/40/40' },
  { rank: 4, name: 'Uzair Khan', avatarUrl: 'https://picsum.photos/seed/vc4/40/40' },
  { rank: 5, name: 'Sadqain Norain', avatarUrl: 'https://picsum.photos/seed/vc5/40/40' },
];

const LeaderboardCard = ({ title, icon: Icon, data }: { title: string, icon: React.ElementType, data: any[] }) => (
    <Card className="hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{title}</CardTitle>
                </div>
                <ArrowRight className="h-5 w-5 text-muted-foreground" />
            </div>
        </CardHeader>
        <CardContent>
            <Table>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index}>
                            <TableCell className="font-medium w-6 pr-0">{item.rank}</TableCell>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage data-ai-hint="person" src={item.avatarUrl} alt={item.name} />
                                        <AvatarFallback>{item.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span>{item.name}</span>
                                </div>
                            </TableCell>
                            <TableCell className="text-right">
                                <Medal className="h-5 w-5 text-yellow-500 inline" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>
);

export function Leaderboards() {
  return (
    <section id="leaderboards" className="py-16 md:py-24">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold font-headline">Leaderboards</h2>
        <Link href="#" className="text-primary hover:underline flex items-center gap-1">
          VIEW ALL <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <LeaderboardCard title="Trending Talent" icon={TrendingUp} data={trendingTalent} />
        <LeaderboardCard title="Top Reviewed" icon={Star} data={topReviewed} />
        <LeaderboardCard title="Verified Collaborations" icon={ShieldCheck} data={verifiedCollabs} />
      </div>
    </section>
  );
}
