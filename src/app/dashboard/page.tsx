'use client'

import { useUser } from '@/firebase'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Button } from '@/components/ui/button'
import { ArrowRight, BarChart, Eye, FileText } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function DashboardPage() {
  const { user } = useUser()

  const profileCompletion = 60; // Example value

  const stats = [
    { title: 'Profile Views', value: '1,204', icon: <Eye className="h-6 w-6 text-primary" />, change: '+12%', changeType: 'increase' },
    { title: 'Applications', value: '32', icon: <FileText className="h-6 w-6 text-primary" />, change: '5 new', changeType: 'increase' },
    { title: 'Search Appearances', value: '890', icon: <BarChart className="h-6 w-6 text-primary" />, change: '-3%', changeType: 'decrease' },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Welcome back, {user?.displayName?.split(' ')[0] || 'Talent'}!</h1>
        <p className="text-muted-foreground">Here's a snapshot of your activity.</p>
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
            <Button asChild>
              <Link href="/dashboard/profile">
                Edit Profile <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/talent/sergey-dolgov">View Public Profile</Link>
            </Button>
          </div>
        </CardContent>
      </Card>

    </div>
  )
}
