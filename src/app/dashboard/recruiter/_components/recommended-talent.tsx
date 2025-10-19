'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { recommendedTalent } from '@/lib/placeholder-data/recruiter'
import { Progress } from "@/components/ui/progress"
import { ShieldCheck } from "lucide-react"

export function RecommendedTalent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Talent</CardTitle>
        <CardDescription>AI-powered recommendations for your active jobs.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {recommendedTalent.map(talent => (
          <div key={talent.id}>
            <p className="text-sm font-semibold mb-2">{talent.jobTitle}</p>
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={talent.avatarUrl} alt={talent.name} data-ai-hint="person" />
                  <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold flex items-center gap-1.5">{talent.name} <ShieldCheck className="h-4 w-4 text-primary" /></p>
                  <p className="text-sm text-muted-foreground">{talent.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 text-right">
                    <p className="text-sm font-bold">{talent.match}% Match</p>
                    <Progress value={talent.match} className="h-1.5" />
                </div>
                <Button variant="outline" size="sm">View</Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
