
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { recentApplicants } from '@/lib/placeholder-data/recruiter'
import { Badge } from "@/components/ui/badge"
import { Gem, Medal, Star, Shield } from "lucide-react"

const badgeConfig = {
  Diamond: { icon: <Gem className="h-4 w-4 text-cyan-400" />, color: 'border-cyan-400/50 bg-cyan-400/10 text-cyan-300' },
  Gold: { icon: <Medal className="h-4 w-4 text-amber-400" />, color: 'border-amber-400/50 bg-amber-400/10 text-amber-300' },
  Silver: { icon: <Star className="h-4 w-4 text-slate-400" />, color: 'border-slate-400/50 bg-slate-400/10 text-slate-300' },
  Bronze: { icon: <Shield className="h-4 w-4 text-orange-400" />, color: 'border-orange-400/50 bg-orange-400/10 text-orange-300' },
}

type BadgeTier = keyof typeof badgeConfig;

const rankedApplicants = (recentApplicants as (typeof recentApplicants[0] & { badge: BadgeTier })[])
  .sort((a, b) => {
    const order: BadgeTier[] = ['Diamond', 'Gold', 'Silver', 'Bronze'];
    return order.indexOf(a.badge) - order.indexOf(b.badge);
  });

const applicantsByRank = {
  Diamond: rankedApplicants.filter(a => a.badge === 'Diamond'),
  Gold: rankedApplicants.filter(a => a.badge === 'Gold'),
  Silver: rankedApplicants.filter(a => a.badge === 'Silver'),
  Bronze: rankedApplicants.filter(a => a.badge === 'Bronze'),
}

const ApplicantList = ({ applicants }: { applicants: typeof rankedApplicants }) => (
  <div className="space-y-4">
    {applicants.map(applicant => (
      <div key={applicant.id} className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={applicant.avatarUrl} alt={applicant.name} data-ai-hint="person" />
            <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{applicant.name}</p>
            <p className="text-sm text-muted-foreground">{applicant.appliedFor}</p>
          </div>
        </div>
        <Badge variant="outline" className={badgeConfig[applicant.badge].color}>
          {badgeConfig[applicant.badge].icon}
          {applicant.badge}
        </Badge>
      </div>
    ))}
  </div>
);

export function RankedApplicants() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Ranked Applicants</CardTitle>
        <CardDescription>Talent categorized by their verified experience.</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-5 mb-4">
            <TabsTrigger value="all">All ({rankedApplicants.length})</TabsTrigger>
            <TabsTrigger value="diamond" className="gap-1.5">
                <Gem className="h-4 w-4 text-cyan-400" /> Diamond ({applicantsByRank.Diamond.length})
            </TabsTrigger>
            <TabsTrigger value="gold" className="gap-1.5">
                <Medal className="h-4 w-4 text-amber-400" /> Gold ({applicantsByRank.Gold.length})
            </TabsTrigger>
            <TabsTrigger value="silver" className="gap-1.5">
                <Star className="h-4 w-4 text-slate-400" /> Silver ({applicantsByRank.Silver.length})
            </TabsTrigger>
            <TabsTrigger value="bronze" className="gap-1.5">
                <Shield className="h-4 w-4 text-orange-400" /> Bronze ({applicantsByRank.Bronze.length})
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <ApplicantList applicants={rankedApplicants} />
          </TabsContent>
          <TabsContent value="diamond">
            <ApplicantList applicants={applicantsByRank.Diamond} />
          </TabsContent>
          <TabsContent value="gold">
            <ApplicantList applicants={applicantsByRank.Gold} />
          </TabsContent>
          <TabsContent value="silver">
            <ApplicantList applicants={applicantsByRank.Silver} />
          </TabsContent>
          <TabsContent value="bronze">
            <ApplicantList applicants={applicantsByRank.Bronze} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
