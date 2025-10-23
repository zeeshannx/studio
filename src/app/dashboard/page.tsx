
'use client'

import { useUser } from '@/firebase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart, Eye, FileText, Briefcase, Star, CheckCircle, Clock, Mail } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"
import { allJobs } from '@/lib/placeholder-data/jobs'
import { VacancyStats } from './_components/vacancy-stats'
import { UserProfileCard } from './_components/user-profile-card'

export default function DashboardPage() {
  const { user } = useUser()

  const stats = [
    { title: 'Profile Views', value: '45,673', icon: <Eye className="h-6 w-6 text-primary" />, change: '+12%', changeType: 'increase' },
    { title: 'Applications Sent', value: '75', icon: <FileText className="h-6 w-6 text-primary" />, change: '+5', changeType: 'increase' },
    { title: 'Interviews Scheduled', value: '86', icon: <Briefcase className="h-6 w-6 text-primary" />, change: '-3', changeType: 'decrease' },
    { title: 'Search Appearances', value: '93', icon: <BarChart className="h-6 w-6 text-primary" />, change: '+20', changeType: 'increase' },
  ];
  
  const recommendedJobs = allJobs.slice(0, 3);
  
  const recentActivities = [
      { id: '1', description: 'Your application for Creative Director at Like Nastya was viewed.', status: 'Viewed', time: '2h ago' },
      { id: '2', description: 'Quick Vids sent you an interview invitation for the Shorts Editor role.', status: 'Interview', time: '1d ago' },
      { id: '3', description: 'Your application for Brand Manager at BizBoost was accepted!', status: 'Hired!', time: '3d ago' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome back, {user?.displayName?.split(' ')[0] || 'Talent'}!</h1>
        <p className="text-muted-foreground">Here's a snapshot of your activity and opportunities.</p>
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
              <p className={cn(
                "text-xs text-muted-foreground",
                stat.changeType === 'increase' ? 'text-green-500' : 'text-red-500'
              )}>
                {stat.change} from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
            <VacancyStats />
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Recommended Jobs</CardTitle>
                        <Button variant="ghost" size="sm" asChild>
                            <Link href="/jobs">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
                        </Button>
                    </div>
                    <CardDescription>Based on your profile and skills.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {recommendedJobs.map(job => (
                            <div key={job.id} className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-muted">
                                <div className="flex items-center gap-4">
                                    <Avatar>
                                        <AvatarImage src={job.logo.src} alt={job.company} data-ai-hint={job.logo['data-ai-hint']} />
                                        <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{job.title}</p>
                                        <p className="text-sm text-muted-foreground">{job.company}</p>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <p className='font-semibold'>{job.salary}</p>
                                    <p className='text-sm text-muted-foreground'>{job.location}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
        
        <div className="space-y-6">
            <UserProfileCard />
            <Card>
                <CardHeader>
                    <CardTitle>Recent Activities</CardTitle>
                    <CardDescription>Track the status of your applications.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableBody>
                            {recentActivities.map(app => (
                                <TableRow key={app.id}>
                                    <TableCell>
                                        <p className="font-semibold text-sm line-clamp-2">{app.description}</p>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={app.status === 'Hired!' ? 'default' : 'secondary'} className={cn(app.status === 'Hired!' && 'bg-green-600')}>{app.status}</Badge>
                                        <p className="text-xs text-muted-foreground mt-1">{app.time}</p>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
