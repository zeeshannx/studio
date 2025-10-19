
'use client'

import { useUser } from '@/firebase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import { ApplicantsChart } from './_components/applicants-chart'
import { RecentApplicants } from './_components/recent-applicants'
import { ResponsiveContainer, LineChart, Line } from 'recharts'
import { RecentChats } from './_components/recent-chats'
import { TodaySchedule } from './_components/today-schedule'
import { cn } from '@/lib/utils'
import { ActiveJobs } from './_components/active-jobs'
import { RecommendedTalent } from './_components/recommended-talent'

const sparklineData = [
  { value: 10 }, { value: 20 }, { value: 15 }, { value: 30 },
  { value: 25 }, { value: 40 }, { value: 35 },
]

export default function RecruiterDashboardPage() {
  const { user } = useUser()

  const stats = [
    { title: 'Candidates', value: '3918', change: '+53.43%', changeType: 'increase' },
    { title: 'On Hold', value: '25', change: '-10.21%', changeType: 'decrease' },
    { title: 'Appointment', value: '3918', change: '+53.43%', changeType: 'increase' },
    { title: 'Passed', value: '3918', change: '+53.43%', changeType: 'increase' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold font-headline">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, {user?.displayName?.split(' ')[0] || 'Recruiter'}!</p>
        </div>
        <Button className="bg-primary-gradient">
          <Plus className="mr-2 h-4 w-4" />
          Post a New Job
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="pb-2">
              <CardTitle className="text-base font-medium">{stat.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex items-end justify-between gap-4">
                <div className="flex-shrink-0">
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">since last week</p>
                    <p className={cn(
                        "text-sm font-semibold",
                        stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
                    )}>
                        {stat.change}
                    </p>
                </div>
                <div className="h-12 w-24 flex-shrink">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={sparklineData}>
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke={stat.changeType === 'increase' ? "hsl(var(--primary))" : "hsl(var(--destructive))"}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <ApplicantsChart />
            <TodaySchedule />
            <ActiveJobs />
        </div>
        <div className="lg:col-span-1 flex flex-col gap-6">
            <RecentApplicants />
            <RecommendedTalent />
            <RecentChats />
        </div>
      </div>
    </div>
  )
}
