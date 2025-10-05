'use client'

import { useUser } from '@/firebase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart, Eye, FileText, Briefcase, Star, CheckCircle, Clock } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { SocialIcon } from '@/components/shared/social-icon'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DashboardPage() {
  const { user } = useUser()

  const profileCompletion = 75;

  const stats = [
    { title: 'Profile Views', value: '1,204', icon: <Eye className="h-6 w-6 text-primary" />, change: '+12%', changeType: 'increase' },
    { title: 'Applications', value: '32', icon: <FileText className="h-6 w-6 text-primary" />, change: '5 new', changeType: 'increase' },
    { title: 'Search Appearances', value: '890', icon: <BarChart className="h-6 w-6 text-primary" />, change: '-3%', changeType: 'decrease' },
  ];
  
  const recommendedJobs = [
    { id: '1', title: 'Senior Video Editor', company: 'MrBeast', logo: 'https://yt3.ggpht.com/-egl0BJumF1A/AAAAAAAAAAI/AAAAAAAAAAA/zk1ch1-WaY8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg', platform: 'YouTube' },
    { id: '2', title: 'Thumbnail Designer', company: 'PewDiePie', logo: 'https://i.pinimg.com/originals/7e/f7/77/7ef7776d02efd1c241bf547b0a8cb719.png', platform: 'YouTube' },
    { id: '3', title: 'Community Manager', company: 'Pokimane', logo: 'https://dotesports.com/wp-content/uploads/2022/08/22211037/Feature-Image-58.jpg?w=1200', platform: 'Twitch' },
  ]
  
  const recentApplications = [
      { id: '1', title: 'Creative Director', company: 'Like Nastya', status: 'Viewed', date: '2 days ago' },
      { id: '2', title: 'Shorts Editor', company: 'Quick Vids', status: 'In Review', date: '5 days ago' },
      { id: '3', title: 'Brand Manager', company: 'BizBoost', status: 'Hired!', date: '1 week ago' },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome back, {user?.displayName?.split(' ')[0] || 'Talent'}!</h1>
        <p className="text-muted-foreground">Here's a snapshot of your activity and opportunities.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <Card className="lg:col-span-2">
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
                                    <AvatarImage src={job.logo} alt={job.company} data-ai-hint="logo" />
                                    <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="font-semibold">{job.title}</p>
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                        <SocialIcon platform={job.platform as any} className="h-4 w-4" />
                                        <span>{job.company}</span>
                                    </div>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" asChild>
                                <Link href={`/jobs/${job.id}`}>View</Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
        
        <div className="space-y-6">
            <Card>
                <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
                <CardDescription>Complete your profile to attract more employers.</CardDescription>
                </CardHeader>
                <CardContent>
                <div className="flex items-center gap-4">
                    <Progress value={profileCompletion} className="flex-1" />
                    <span className="text-lg font-semibold text-primary">{profileCompletion}%</span>
                </div>
                <div className="mt-4 flex gap-4">
                    <Button asChild className="flex-1 bg-primary-gradient">
                    <Link href="/dashboard/profile">
                        Edit Profile
                    </Link>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                    <Link href="/talent/sergey-dolgov">Public Profile</Link>
                    </Button>
                </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Applications</CardTitle>
                    <CardDescription>Track the status of your applications.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableBody>
                            {recentApplications.map(app => (
                                <TableRow key={app.id}>
                                    <TableCell>
                                        <p className="font-semibold">{app.title}</p>
                                        <p className="text-sm text-muted-foreground">{app.company}</p>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={app.status === 'Hired!' ? 'default' : 'secondary'} className={cn(app.status === 'Hired!' && 'bg-green-600')}>{app.status}</Badge>
                                        <p className="text-xs text-muted-foreground mt-1">{app.date}</p>
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
