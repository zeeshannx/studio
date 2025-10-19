
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, MoreHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { activeJobs } from '@/lib/placeholder-data/recruiter'
import Link from "next/link"

export function ActiveJobs() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Active Jobs</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <CardDescription>Manage your current job postings and applicants.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activeJobs.map(job => (
            <div key={job.id} className="flex items-center justify-between p-3 rounded-lg hover:bg-muted">
              <div>
                <p className="font-semibold">{job.title}</p>
                <p className="text-sm text-muted-foreground">{job.applicants} applicants</p>
              </div>
              <div className="flex items-center gap-4">
                <Badge variant={job.status === 'Active' ? 'default' : 'secondary'} className={job.status === 'Active' ? 'bg-green-600' : ''}>
                  {job.status}
                </Badge>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Applicants</DropdownMenuItem>
                        <DropdownMenuItem>Edit Job</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Close Job</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

