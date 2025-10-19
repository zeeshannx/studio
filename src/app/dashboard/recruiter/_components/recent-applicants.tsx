
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { recentApplicants } from '@/lib/placeholder-data/recruiter'
import Link from "next/link"
import { ArrowRight, MessageSquare, Mail, Phone } from "lucide-react"

export function RecentApplicants() {
  return (
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
                <p className="font-semibold">{applicant.name}</p>
                <p className="text-sm text-muted-foreground">{applicant.appliedFor}</p>
              </div>
            </div>
            <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon"><MessageSquare className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Mail className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon"><Phone className="h-4 w-4" /></Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
