'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, Calendar, Edit, Send } from "lucide-react"
import { automatedReminders } from '@/lib/placeholder-data/recruiter'
import { cn } from "@/lib/utils"

const iconMap = {
  interview: <Calendar className="h-5 w-5" />,
  feedback: <Edit className="h-5 w-5" />,
  followup: <Send className="h-5 w-5" />,
};

const colorMap = {
    interview: 'bg-blue-500/20 text-blue-400',
    feedback: 'bg-amber-500/20 text-amber-400',
    followup: 'bg-violet-500/20 text-violet-400',
}

export function AutomatedReminders() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            <CardTitle>Automated Reminders</CardTitle>
        </div>
        <CardDescription>Upcoming interviews, feedback, and follow-ups.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {automatedReminders.map(reminder => (
          <div key={reminder.id} className="flex items-start gap-4">
            <div className={cn("p-2 rounded-full", colorMap[reminder.type])}>
              {iconMap[reminder.type]}
            </div>
            <div className="flex-grow">
              <p className="font-semibold text-sm">{reminder.details}</p>
              <p className="text-xs text-muted-foreground">
                {reminder.applicant} &bull; <span className="font-semibold">{reminder.time}</span>
              </p>
            </div>
            <Button variant="ghost" size="sm">View</Button>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
