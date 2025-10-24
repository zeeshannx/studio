
'use client'
import { useState, useMemo } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ListFilter, Search, ArrowUpDown, MoreHorizontal, Video } from 'lucide-react'
import { allTalents as fetchAllTalents, DetailedTalent } from '@/lib/talent'
import { SocialIcon } from '@/components/shared/social-icon'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { allJobs } from '@/lib/placeholder-data/jobs'
import { ScheduleInterviewDialog } from '../_components/schedule-interview-dialog'

const statusColors = {
  'Hired': 'bg-green-500/20 text-green-400 border-green-500/30',
  'In Review': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Viewed': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Rejected': 'bg-red-500/20 text-red-400 border-red-500/30',
};

const verificationColors = {
    'Diamond': 'border-cyan-400/50 bg-cyan-400/10 text-cyan-300',
    'Gold': 'border-amber-400/50 bg-amber-400/10 text-amber-300',
    'Silver': 'border-slate-400/50 bg-slate-400/10 text-slate-300',
};


export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [jobFilter, setJobFilter] = useState('All Jobs')
  const [statusFilter, setStatusFilter] = useState('All Statuses')
  const [selectedApplicant, setSelectedApplicant] = useState<DetailedTalent | null>(null)

  const applicants = useMemo(() => {
    return fetchAllTalents.filter(t => t.appliedFor);
  }, []);

  const filteredApplicants = useMemo(() => {
    return applicants.filter(applicant => {
      const matchesSearch = applicant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (applicant.appliedFor && applicant.appliedFor.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesJob = jobFilter === 'All Jobs' || applicant.appliedFor === jobFilter;
      const matchesStatus = statusFilter === 'All Statuses' || applicant.applicationStatus === statusFilter;
      return matchesSearch && matchesJob && matchesStatus;
    });
  }, [applicants, searchQuery, jobFilter, statusFilter]);

  const jobOptions = ['All Jobs', ...Array.from(new Set(applicants.map(a => a.appliedFor).filter(Boolean)))];
  const statusOptions = ['All Statuses', ...Object.keys(statusColors)];
  
  const getStatusColor = (status: keyof typeof statusColors) => statusColors[status] || 'bg-muted';
  const getVerificationColor = (badge: keyof typeof verificationColors) => verificationColors[badge] || 'bg-muted';

  return (
    <>
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Applicants</h1>
        <p className="text-muted-foreground">
          Review and manage candidates for your job postings.
        </p>
      </div>

      <Card>
        <CardHeader>
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="relative w-full sm:w-auto sm:flex-grow md:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                        type="text"
                        placeholder="Search by name or job..."
                        className="pl-10 w-full"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                    <Select value={jobFilter} onValueChange={setJobFilter}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="All Jobs" />
                        </SelectTrigger>
                        <SelectContent>
                            {jobOptions.map(job => (
                                <SelectItem key={job} value={job}>{job}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                     <Select value={statusFilter} onValueChange={setStatusFilter}>
                        <SelectTrigger className="w-full sm:w-[180px]">
                            <SelectValue placeholder="All Statuses" />
                        </SelectTrigger>
                        <SelectContent>
                            {statusOptions.map(status => (
                                <SelectItem key={status} value={status}>{status}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Button variant="outline" className="w-full sm:w-auto gap-2">
                        <ArrowUpDown className="h-4 w-4" /> Sort by
                    </Button>
                </div>
            </div>
        </CardHeader>
        <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Candidate</TableHead>
                        <TableHead>Job Applied For</TableHead>
                        <TableHead className="text-center">AI Match</TableHead>
                        <TableHead className="text-center">Vouches</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Interview</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredApplicants.map((applicant) => (
                        <TableRow key={applicant.name}>
                            <TableCell>
                                <div className="flex items-center gap-3">
                                    <Avatar>
                                        <AvatarImage src={applicant.src} alt={applicant.name} data-ai-hint="person" />
                                        <AvatarFallback>{applicant.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{applicant.name}</p>
                                        <div className="text-sm text-muted-foreground flex items-center gap-1.5">
                                            {applicant.platforms && <SocialIcon platform={applicant.platforms[0]} className="h-4 w-4" />}
                                            {applicant.role}
                                        </div>
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <p className="font-medium truncate max-w-xs">{applicant.appliedFor}</p>
                            </TableCell>
                            <TableCell className="text-center">
                                <div className="flex items-center justify-center gap-2">
                                     <Progress value={applicant.aiMatch} className="h-1.5 w-16" />
                                     <span className="text-sm font-semibold">{applicant.aiMatch}%</span>
                                </div>
                            </TableCell>
                             <TableCell className="text-center">
                                <span className="font-semibold">{applicant.vouches}</span>
                            </TableCell>
                            <TableCell>
                                {applicant.applicationStatus && (
                                    <Badge variant="outline" className={cn(getStatusColor(applicant.applicationStatus))}>
                                        {applicant.applicationStatus}
                                    </Badge>
                                )}
                            </TableCell>
                             <TableCell>
                                {applicant.interviewStatus === 'Scheduled' ? (
                                    <Badge variant="secondary">Scheduled</Badge>
                                ) : applicant.interviewStatus === 'Completed' ? (
                                    <Badge variant="outline">Completed</Badge>
                                ) : (
                                    <Button variant="outline" size="sm" className="gap-2" onClick={() => setSelectedApplicant(applicant)}>
                                        <Video className="h-4 w-4" /> Schedule
                                    </Button>
                                )}
                            </TableCell>
                            <TableCell className="text-right">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                                        <DropdownMenuItem>Message</DropdownMenuItem>
                                        <DropdownMenuItem>Reject</DropdownMenuItem>
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
    {selectedApplicant && (
        <ScheduleInterviewDialog
          applicant={{
            id: selectedApplicant.name, // Assuming name is unique for now
            name: selectedApplicant.name,
            appliedFor: selectedApplicant.appliedFor || 'N/A',
            avatarUrl: selectedApplicant.src,
          }}
          open={!!selectedApplicant}
          onOpenChange={(open) => !open && setSelectedApplicant(null)}
        />
      )}
    </>
  )
}
