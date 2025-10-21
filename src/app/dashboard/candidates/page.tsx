
'use client';

import { allTalents } from '@/lib/talent';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SocialIcon } from '@/components/shared/social-icon';
import { ShieldCheck, MoreHorizontal } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

export default function CandidatesPage() {
  const candidates = allTalents;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Candidates</h1>
        <p className="text-muted-foreground">
          Manage and review all candidates for your jobs.
        </p>
      </div>
      <Card>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Vouches</TableHead>
                <TableHead className="text-right">Match</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {candidates.map((candidate) => (
                <TableRow key={candidate.name}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={candidate.src} alt={candidate.name} data-ai-hint="person" />
                        <AvatarFallback>{candidate.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold flex items-center gap-1.5">
                          {candidate.name}
                          {candidate.vouches && candidate.vouches > 0 && <ShieldCheck className="h-4 w-4 text-primary" />}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {candidate.role}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    {candidate.platform && <SocialIcon platform={candidate.platform} className="h-5 w-5" />}
                  </TableCell>
                  <TableCell>
                     <Badge variant="outline">Active</Badge>
                  </TableCell>
                  <TableCell>{candidate.vouches || 0}</TableCell>
                   <TableCell className="text-right font-semibold">92%</TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Profile</DropdownMenuItem>
                            <DropdownMenuItem>Message</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">Reject</DropdownMenuItem>
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
