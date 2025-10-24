
'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ArrowUpDown, Plus } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { allJobs } from "@/lib/placeholder-data/jobs"
import Link from "next/link"

const statusColorMap: { [key: string]: string } = {
  'Active': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Paused': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Closed': 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function ManageJobsPage() {
    const jobs = allJobs.map(job => ({
        ...job,
        status: ['Active', 'Paused', 'Closed'][Math.floor(Math.random() * 3)]
    }));

    const getStatusColor = (status: string) => {
        return statusColorMap[status] || 'bg-muted text-muted-foreground';
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Manage Jobs</h1>
                    <p className="text-muted-foreground">Oversee all your job postings, from active to closed.</p>
                </div>
                <Button className="bg-primary-gradient" asChild>
                    <Link href="/dashboard/recruiter/post-job">
                        <Plus className="mr-2 h-4 w-4" />
                        Post a New Job
                    </Link>
                </Button>
            </div>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>All Job Postings</CardTitle>
                        <div className="flex items-center gap-2">
                             <Select defaultValue="all-status">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all-status">All Statuses</SelectItem>
                                    <SelectItem value="active">Active</SelectItem>
                                    <SelectItem value="paused">Paused</SelectItem>
                                    <SelectItem value="closed">Closed</SelectItem>
                                </SelectContent>
                            </Select>
                            <Button variant="outline" className="gap-2">
                                <ArrowUpDown className="h-4 w-4" />
                                Sort
                            </Button>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-2/5">Job Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Applicants</TableHead>
                                <TableHead>Date Posted</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {jobs.map(job => (
                                <TableRow key={job.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={job.logo.src} alt={job.company} />
                                                <AvatarFallback>{job.company.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{job.title}</p>
                                                <p className="text-sm text-muted-foreground">{job.company}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                     <TableCell>
                                        <Badge variant="outline" className={cn("capitalize", getStatusColor(job.status))}>
                                            {job.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>
                                        <span className="font-medium">{job.applicants}</span>
                                    </TableCell>
                                    <TableCell>{job.posted_at}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>View Applicants</DropdownMenuItem>
                                                <DropdownMenuItem>Edit Job</DropdownMenuItem>
                                                <DropdownMenuItem>Pause Job</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Close Job</DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
