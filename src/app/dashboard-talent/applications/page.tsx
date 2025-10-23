'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const applications = [
  {
    id: '1',
    company: 'Like Nastya',
    companyLogo: 'https://picsum.photos/seed/client1/64/64',
    role: 'Creative Director',
    date: '2024-07-15',
    status: 'Viewed',
  },
  {
    id: '2',
    company: 'Quick Vids',
    companyLogo: 'https://picsum.photos/seed/cl8/40/40',
    role: 'Shorts Editor',
    date: '2024-07-12',
    status: 'Interview',
  },
  {
    id: '3',
    company: 'BizBoost',
    companyLogo: 'https://picsum.photos/seed/cl7/40/40',
    role: 'Brand Manager',
    date: '2024-07-10',
    status: 'Hired',
  },
  {
    id: '4',
    company: 'MrBeast',
    companyLogo: 'https://yt3.ggpht.com/-egl0BJumF1A/AAAAAAAAAAI/AAAAAAAAAAA/zk1ch1-WaY8/s900-c-k-no-mo-rj-c0xffffff/photo.jpg',
    role: 'Senior Video Editor',
    date: '2024-07-08',
    status: 'Applied',
  },
  {
    id: '5',
    company: 'Gamer\'s Nexus',
    companyLogo: 'https://picsum.photos/seed/cl4/40/40',
    role: 'Community Manager',
    date: '2024-07-05',
    status: 'Rejected',
  },
]

const statusColorMap: { [key: string]: string } = {
  'Applied': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Viewed': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Interview': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Hired': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Rejected': 'bg-red-500/20 text-red-400 border-red-500/30',
};


export default function ApplicationsPage() {

    const getStatusColor = (status: string) => {
        return statusColorMap[status] || 'bg-muted text-muted-foreground';
    };

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold font-headline">My Applications</h1>
                <p className="text-muted-foreground">Track and manage all your job applications in one place.</p>
            </div>
            <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>Application History</CardTitle>
                        <div className="flex items-center gap-2">
                             <Select defaultValue="all-time">
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all-time">All Time</SelectItem>
                                    <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                                    <SelectItem value="last-90-days">Last 90 Days</SelectItem>
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
                                <TableHead className="w-2/5">Company</TableHead>
                                <TableHead>Date Applied</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {applications.map(app => (
                                <TableRow key={app.id}>
                                    <TableCell>
                                        <div className="flex items-center gap-3">
                                            <Avatar>
                                                <AvatarImage src={app.companyLogo} alt={app.company} />
                                                <AvatarFallback>{app.company.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">{app.role}</p>
                                                <p className="text-sm text-muted-foreground">{app.company}</p>
                                            </div>
                                        </div>
                                    </TableCell>
                                    <TableCell>{new Date(app.date).toLocaleDateString()}</TableCell>
                                    <TableCell>
                                        <Badge variant="outline" className={cn("capitalize", getStatusColor(app.status))}>
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent>
                                                <DropdownMenuItem>View Application</DropdownMenuItem>
                                                <DropdownMenuItem>Message Recruiter</DropdownMenuItem>
                                                <DropdownMenuItem className="text-destructive">Withdraw</DropdownMenuItem>
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
