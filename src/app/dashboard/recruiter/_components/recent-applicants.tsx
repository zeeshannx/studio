
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { recentApplicants } from '@/lib/placeholder-data/recruiter'
import Link from "next/link"
import { ArrowRight, MessageSquare, Mail, Phone, Gem, Medal, Star, Shield, ShieldCheck, Video } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { SocialIcon } from "@/components/shared/social-icon"
import { useState } from "react"
import { ScheduleInterviewDialog } from "./schedule-interview-dialog"

const badgeConfig = {
  Diamond: { icon: <Gem className="h-3 w-3" />, color: 'border-cyan-400/50 bg-cyan-400/10 text-cyan-300' },
  Gold: { icon: <Medal className="h-3 w-3" />, color: 'border-amber-400/50 bg-amber-400/10 text-amber-300' },
  Silver: { icon: <Star className="h-3 w-3" />, color: 'border-slate-400/50 bg-slate-400/10 text-slate-300' },
  Bronze: { icon: <Shield className="h-3 w-3" />, color: 'border-orange-400/50 bg-orange-400/10 text-orange-300' },
}

export function RecentApplicants() {
  const [selectedApplicant, setSelectedApplicant] = useState<(typeof recentApplicants)[0] | null>(null)

  return (
    <>
      <Card>
        <CardHeader>
           <div className="flex justify-between items-center">
              <CardTitle>New Applicant</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                  <Link href="#">See all</Link>
              </Button>
          </div>
          <CardDescription>Fresh faces awaiting your review.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentApplicants.map(applicant => (
            <div key={applicant.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={applicant.avatarUrl} alt={applicant.name} data-ai-hint="person" />
                  <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold flex items-center gap-1.5">{applicant.name} <ShieldCheck className="h-4 w-4 text-primary" /></p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1.5">
                      {applicant.platform && <SocialIcon platform={applicant.platform} className="h-4 w-4" />}
                      {applicant.appliedFor}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                  <Badge variant="outline" className={`gap-1 ${badgeConfig[applicant.badge].color}`}>
                      {badgeConfig[applicant.badge].icon}
                      {applicant.badge}
                  </Badge>
                   <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setSelectedApplicant(applicant)}>
                        <Video className="h-4 w-4" />
                    </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
      {selectedApplicant && (
        <ScheduleInterviewDialog
          applicant={selectedApplicant}
          open={!!selectedApplicant}
          onOpenChange={(open) => !open && setSelectedApplicant(null)}
        />
      )}
    </>
  )
}
