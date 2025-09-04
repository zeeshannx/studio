'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Trophy } from 'lucide-react';

const topTalents = [
  { rank: 1, name: 'Casey Neistat', score: '9.8M', avatarUrl: 'https://picsum.photos/seed/t1/40/40' },
  { rank: 2, name: 'Marques Brownlee', score: '9.5M', avatarUrl: 'https://picsum.photos/seed/t2/40/40' },
  { rank: 3, name: 'Huda Kattan', score: '9.2M', avatarUrl: 'https://picsum.photos/seed/t3/40/40' },
  { rank: 4, name: 'Charli D’Amelio', score: '9.1M', avatarUrl: 'https://picsum.photos/seed/t4/40/40' },
  { rank: 5, name: 'Gary Vaynerchuk', score: '8.9M', avatarUrl: 'https://picsum.photos/seed/t5/40/40' },
];

const topCompanies = [
  { rank: 1, name: 'Creative Co.', score: '524 Jobs', avatarUrl: 'https://picsum.photos/seed/c1/40/40' },
  { rank: 2, name: 'Trendsetters Inc.', score: '488 Jobs', avatarUrl: 'https://picsum.photos/seed/c2/40/40' },
  { rank: 3, name: 'VidSuccess', score: '450 Jobs', avatarUrl: 'https://picsum.photos/seed/c3/40/40' },
  { rank: 4, name: 'ProConnect', score: '412 Jobs', avatarUrl: 'https://picsum.photos/seed/c4/40/40' },
  { rank: 5, name: 'BuzzHub', score: '398 Jobs', avatarUrl: 'https://picsum.photos/seed/c6/40/40' },
];

export function Leaderboards() {
  return (
    <section id="leaderboards" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-4 font-headline">
        <Trophy className="inline-block h-8 w-8 mr-2 text-accent" />
        Community Leaderboards
      </h2>
      <p className="text-muted-foreground text-center mb-12">See who's making waves in the SocialVerse ecosystem.</p>
      
      <Tabs defaultValue="talents" className="w-full max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="talents">Top Talents</TabsTrigger>
          <TabsTrigger value="companies">Top Companies</TabsTrigger>
        </TabsList>
        <TabsContent value="talents">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Rank</TableHead>
                <TableHead>Talent</TableHead>
                <TableHead className="text-right">Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topTalents.map(talent => (
                <TableRow key={talent.rank}>
                  <TableCell className="font-medium">{talent.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage data-ai-hint="person" src={talent.avatarUrl} alt={talent.name} />
                        <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{talent.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{talent.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
        <TabsContent value="companies">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Rank</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className="text-right">Jobs Posted</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {topCompanies.map(company => (
                <TableRow key={company.rank}>
                  <TableCell className="font-medium">{company.rank}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage data-ai-hint="logo" src={company.avatarUrl} alt={company.name} />
                        <AvatarFallback>{company.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="font-medium">{company.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">{company.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TabsContent>
      </Tabs>
    </section>
  );
}
