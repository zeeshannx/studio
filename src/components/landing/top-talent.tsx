import { rankTopTalents, type RankTopTalentsInput, type RankTopTalentsOutput } from '@/ai/flows/rank-top-talents';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, AlertTriangle } from 'lucide-react';
import { SocialIcon } from '@/components/shared/social-icon';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const talentProfiles: RankTopTalentsInput['talentProfiles'] = [
  { name: 'Casey Neistat', skills: ['Vlogging', 'Filmmaking', 'Storytelling'], experience: '10+ years', socialMediaPlatform: 'YouTube' },
  { name: 'Charli D’Amelio', skills: ['Dancing', 'Choreography', 'Brand Deals'], experience: '5 years', socialMediaPlatform: 'TikTok' },
  { name: 'Marques Brownlee (MKBHD)', skills: ['Tech Reviews', 'Video Production', 'Analysis'], experience: '12+ years', socialMediaPlatform: 'YouTube' },
  { name: 'Huda Kattan', skills: ['Makeup Artistry', 'Beauty Blogging', 'Entrepreneurship'], experience: '10+ years', socialMediaPlatform: 'Instagram' },
  { name: 'Justin Kan', skills: ['Startups', 'Tech', 'Live Streaming'], experience: '15+ years', socialMediaPlatform: 'Twitch' },
  { name: 'Gary Vaynerchuk', skills: ['Marketing', 'Public Speaking', 'Business Strategy'], experience: '20+ years', socialMediaPlatform: 'LinkedIn' },
];

export async function TopTalent() {
  const rankingCriteria: RankTopTalentsInput['rankingCriteria'] = 'A mix of influence, content quality, engagement rate, and marketability for brand partnerships.';
  let rankedTalents: RankTopTalentsOutput | null = null;
  let error: string | null = null;

  try {
    rankedTalents = await rankTopTalents({ talentProfiles, rankingCriteria });
  } catch (e: any) {
    console.error(e);
    error = e.message || 'An unknown error occurred.';
  }

  return (
    <section id="talent" className="py-16 md:py-24">
      <h2 className="text-3xl font-bold text-center mb-4 font-headline">
        <TrendingUp className="inline-block h-8 w-8 mr-2 text-primary" />
        AI-Ranked Top Talent
      </h2>
      <p className="text-muted-foreground text-center mb-12">Discover premier creators, ranked by our proprietary AI algorithm.</p>
      
      {error && (
        <Alert variant="destructive" className="max-w-3xl mx-auto">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Error Loading AI Rankings</AlertTitle>
          <AlertDescription>
            There was a problem fetching the AI-ranked talent list. This might be due to an invalid or missing API key for the generative AI service. Please check your environment variables.
          </AlertDescription>
        </Alert>
      )}

      {rankedTalents && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rankedTalents.map((talent) => {
            const profile = talentProfiles.find(p => p.name === talent.name);
            return (
              <Card key={talent.name} className="flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{talent.name}</CardTitle>
                    <div className="flex items-center gap-1 text-accent font-bold">
                      <Star className="h-5 w-5 fill-current" />
                      <span>#{talent.rank}</span>
                    </div>
                  </div>
                  {profile && <CardDescription className="flex items-center gap-2"><SocialIcon platform={profile.socialMediaPlatform as any} className="h-4 w-4" /> {profile.socialMediaPlatform}</CardDescription>}
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-4">{talent.reason}</p>
                    {profile && (
                      <div className="flex flex-wrap gap-2">
                        {profile.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </section>
  );
}
