
'use client'

import { useUser } from '@/firebase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Briefcase, Users, CalendarCheck, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { ActiveJobs } from './_components/active-jobs'
import { ApplicantsChart } from './_components/applicants-chart'
import { RecentApplicants } from './_components/recent-applicants'

export default function RecruiterDashboardPage() {
  const { user } = useUser()

  const stats = [
    { title: 'Active Jobs', value: '12', icon: <Briefcase className="h-6 w-6 text-primary" />, change: '+2 from last month' },
    { title: 'Total Applicants', value: '2,345', icon: <Users className="h-6 w-6 text-primary" />, change: '+15% from last month' },
    { title: 'Interviews Today', value: '6', icon: <CalendarCheck className="h-6 w-6 text-primary" />, change: '3 scheduled' },
    { title: 'Hired This Month', value: '5', icon: <CheckCircle2 className="h-6 w-6 text-green-500" />, change: 'Target: 8' },
  ];

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-headline">Recruiter Dashboard</h1>
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
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                {stat.change}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
            <ApplicantsChart />
        </div>
        <div className="lg:row-span-2">
            <RecentApplicants />
        </div>
         <div className="lg:col-span-2">
           <ActiveJobs />
        </div>
      </div>
    </div>
  )
}
