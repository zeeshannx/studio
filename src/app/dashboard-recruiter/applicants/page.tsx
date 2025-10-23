

'use client';

import { useState, useMemo } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MoreHorizontal, User, Briefcase, Calendar, Clock } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { allJobs } from '@/lib/placeholder-data/jobs';
import { allTalents } from '@/lib/talent';
import { formatDistanceToNow } from 'date-fns';

const placeholderApplicants = allTalents.slice(0, 15).map((talent, index) => {
    const job = allJobs[index % allJobs.length];
    return {
        id: talent.name,
        talent: talent,
        job: { id: job.id, title: job.title },
        dateApplied: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000),
        stage: ['New', 'Screening', 'Interview', 'Offered', 'Hired', 'Rejected'][index % 6],
    };
});


export default function ApplicantsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [jobFilter, setJobFilter] = useState('All Jobs');
  const [statusFilter, setStatusFilter] = useState('All');
  const [dateFilter, setDateFilter] = useState('all-time');

  const filteredApplicants = useMemo(() => {
    return placeholderApplicants.filter(applicant => {
      const matchesSearch = applicant.talent.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesJob = jobFilter === 'All Jobs' || applicant.job.title === jobFilter;
      const matchesStatus = statusFilter === 'All' || applicant.stage === statusFilter;
      
      const now = new Date();
      let matchesDate = true;
      if (dateFilter === 'past-24h') {
        matchesDate = (now.getTime() - applicant.dateApplied.getTime()) < 24 * 60 * 60 * 1000;
      } else if (dateFilter === 'past-week') {
        matchesDate = (now.getTime() - applicant.dateApplied.getTime()) < 7 * 24 * 60 * 60 * 1000;
      } else if (dateFilter === 'past-month') {
        matchesDate = (now.getTime() - applicant.dateApplied.getTime()) < 30 * 24 * 60 * 60 * 1000;
      }

      return matchesSearch && matchesJob && matchesStatus && matchesDate;
    });
  }, [searchQuery, jobFilter, statusFilter, dateFilter]);
  
  const uniqueJobs = ['All Jobs', ...Array.from(new Set(placeholderApplicants.map(a => a.job.title)))];
  const uniqueStatuses = ['All', 'New', 'Screening', 'Interview', 'Offered', 'Hired', 'Rejected'];

  const getStageVariant = (stage: string): 'default' | 'secondary' | 'destructive' => {
    switch (stage) {
      case 'Hired':
      case 'Offered':
        return 'default';
      case 'Rejected':
        return 'destructive';
      default:
        return 'secondary';
    }
  };
  
   const getStageColor = (stage: string): string => {
    switch (stage) {
      case 'Hired':
        return 'bg-green-600';
      case 'Offered':
        return 'bg-blue-600';
       case 'Interview':
        return 'bg-purple-600';
      default:
        return '';
    }
  };


  return (
    <div className="space-y-8">
        <div>
            <h1 className="text-3xl font-bold font-headline">Applicants</h1>
            <p className="text-muted-foreground">
                Review and manage candidates for all your job postings.
            </p>
        </div>

      <Card>
        <CardHeader>
            <CardTitle>All Candidates</CardTitle>
            <CardDescription>A complete list of applicants for your jobs.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex flex-wrap items-center gap-4 mb-6">
                <Input 
                    placeholder="Search by name..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="max-w-sm"
                />
                <Select value={jobFilter} onValueChange={setJobFilter}>
                    <SelectTrigger className="w-full md:w-[200px]">
                        <SelectValue placeholder="Filter by job" />
                    </SelectTrigger>
                    <SelectContent>
                        {uniqueJobs.map(job => <SelectItem key={job} value={job}>{job}</SelectItem>)}
                    </SelectContent>
                </Select>
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                        {uniqueStatuses.map(status => <SelectItem key={status} value={status}>{status}</SelectItem>)}
                    </SelectContent>
                </Select>
                 <Select value={dateFilter} onValueChange={setDateFilter}>
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Filter by date" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all-time">All time</SelectItem>
                        <SelectItem value="past-24h">Past 24 hours</SelectItem>
                        <SelectItem value="past-week">Past week</SelectItem>
                        <SelectItem value="past-month">Past month</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Job Applied For</TableHead>
                <TableHead>Applied</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplicants.map((applicant) => (
                <TableRow key={applicant.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                        <Avatar>
                            <AvatarImage src={applicant.talent.src} alt={applicant.talent.name} />
                            <AvatarFallback>{applicant.talent.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-semibold">{applicant.talent.name}</p>
                            <p className="text-sm text-muted-foreground">{applicant.talent.role}</p>
                        </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <p className="font-medium">{applicant.job.title}</p>
                  </TableCell>
                  <TableCell>{formatDistanceToNow(applicant.dateApplied, { addSuffix: true })}</TableCell>
                  <TableCell>
                    <Badge variant={getStageVariant(applicant.stage)} className={getStageColor(applicant.stage)}>
                      {applicant.stage}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem><User className="mr-2 h-4 w-4" />View Application</DropdownMenuItem>
                            <DropdownMenuItem><Clock className="mr-2 h-4 w-4" />Schedule Interview</DropdownMenuItem>
                            <DropdownMenuItem><Briefcase className="mr-2 h-4 w-4" />Move to Hired</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive"><Calendar className="mr-2 h-4 w-4" />Reject</DropdownMenuItem>
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
  );
}
