
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
import { MoreHorizontal, Plus } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { allJobs as placeholderJobs } from '@/lib/placeholder-data/jobs';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

// Add a status to the placeholder jobs for demonstration
const jobsWithStatus = placeholderJobs.map((job, index) => ({
    ...job,
    status: index % 3 === 0 ? 'Active' : index % 3 === 1 ? 'Paused' : 'Closed',
    datePosted: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000)
}));

export default function ManageJobsPage() {
  const [statusFilter, setStatusFilter] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  const filteredAndSortedJobs = useMemo(() => {
    let jobs = jobsWithStatus;

    if (statusFilter !== 'All') {
      jobs = jobs.filter(job => job.status === statusFilter);
    }

    jobs.sort((a, b) => {
        if (sortBy === 'newest') {
            return b.datePosted.getTime() - a.datePosted.getTime();
        } else {
            return a.datePosted.getTime() - b.datePosted.getTime();
        }
    });

    return jobs;
  }, [statusFilter, sortBy]);

  const getStatusVariant = (status: string): 'default' | 'secondary' | 'destructive' => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'Paused':
        return 'secondary';
      case 'Closed':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-headline">Manage Jobs</h1>
          <p className="text-muted-foreground">
            Oversee your company's job postings and applicant pipeline.
          </p>
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
            <CardTitle>Your Job Postings</CardTitle>
            <CardDescription>A list of all jobs your company has posted.</CardDescription>
        </CardHeader>
        <CardContent>
            <div className="flex items-center gap-4 mb-6">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="All">All Statuses</SelectItem>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Paused">Paused</SelectItem>
                        <SelectItem value="Closed">Closed</SelectItem>
                    </SelectContent>
                </Select>
                 <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="oldest">Oldest</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Job Title</TableHead>
                <TableHead>Applicants</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date Posted</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedJobs.map((job) => (
                <TableRow key={job.id}>
                  <TableCell>
                    <p className="font-semibold">{job.title}</p>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </TableCell>
                  <TableCell>{job.applicants}</TableCell>
                  <TableCell>
                    <Badge variant={getStatusVariant(job.status)} className={job.status === 'Active' ? 'bg-green-600' : ''}>
                      {job.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{formatDistanceToNow(job.datePosted, { addSuffix: true })}</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
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
  );
}
