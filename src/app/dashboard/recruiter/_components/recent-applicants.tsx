
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { recentApplicants } from '@/lib/placeholder-data/recruiter'
import Link from "next/link"

export function RecentApplicants() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Applicants</CardTitle>
        <CardDescription>New candidates waiting for review.</CardDescription>
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
            <Button variant="outline" size="sm" asChild>
                <Link href={`/talent/${applicant.name.toLowerCase().replace(/ /g, '-')}`}>
                    View
                </Link>
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
