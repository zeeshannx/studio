
'use client';

import { allTalents, DetailedTalent } from '@/lib/talent';
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
import { Card, CardContent } from '@/components/ui/card';
import { SocialIcon } from '@/components/shared/social-icon';
import { ShieldCheck, MoreHorizontal, MapPin } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useMemo, useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';

export default function CandidatesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [platformFilter, setPlatformFilter] = useState('All Platforms');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [experienceFilter, setExperienceFilter] = useState('All Levels');
  const [skillsFilter, setSkillsFilter] = useState('All Skills');

  const filteredCandidates = useMemo(() => {
    return allTalents.filter((candidate) => {
      const matchesSearch = candidate.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesRole = roleFilter === 'All Roles' || candidate.role === roleFilter;
      
      const candidatePlatforms = [candidate.platform, ...(candidate.platforms || [])].filter(Boolean);
      const matchesPlatform = platformFilter === 'All Platforms' || candidatePlatforms.includes(platformFilter as any);
      
      const matchesStatus = statusFilter === 'All Statuses' || candidate.status === statusFilter;
      const matchesExperience = experienceFilter === 'All Levels' || (candidate.experience && candidate.experience.length > 0 && candidate.experience[0].title.includes(experienceFilter)); // Simplified logic
      const matchesSkills = skillsFilter === 'All Skills' || (candidate.categories && candidate.categories.includes(skillsFilter));
      
      return matchesSearch && matchesRole && matchesPlatform && matchesStatus && matchesExperience && matchesSkills;
    });
  }, [searchQuery, roleFilter, platformFilter, statusFilter, experienceFilter, skillsFilter]);

  const uniqueRoles = ['All Roles', ...Array.from(new Set(allTalents.map(t => t.role)))];
  const uniquePlatforms = ['All Platforms', ...Array.from(new Set(allTalents.flatMap(t => [t.platform, ...(t.platforms || [])]).filter(Boolean)))];
  const uniqueStatuses = ['All Statuses', ...Array.from(new Set(allTalents.map(t => t.status).filter(Boolean)))];
  const uniqueExperienceLevels = ['All Levels', 'Senior', 'Mid-level', 'Junior']; // Example levels
  const uniqueSkills = ['All Skills', ...Array.from(new Set(allTalents.flatMap(t => t.categories || [])))];

  const getStatusVariant = (status?: string): 'default' | 'secondary' | 'destructive' | 'outline' => {
    switch (status) {
      case 'Active':
        return 'default';
      case 'On Hold':
        return 'secondary';
      case 'Rejected':
        return 'destructive';
      default:
        return 'outline';
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Candidates</h1>
        <p className="text-muted-foreground">
          Manage and review all candidates for your jobs.
        </p>
      </div>
      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
             <Input 
                placeholder="Search candidates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="col-span-2 lg:col-span-1"
             />
            <Select value={roleFilter} onValueChange={setRoleFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{uniqueRoles.map(r => <SelectItem key={r} value={r}>{r}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{uniquePlatforms.map(p => <SelectItem key={p} value={p!}>{p}</SelectItem>)}</SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{uniqueStatuses.map(s => <SelectItem key={s} value={s!}>{s}</SelectItem>)}</SelectContent>
            </Select>
             <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{uniqueExperienceLevels.map(e => <SelectItem key={e} value={e}>{e}</SelectItem>)}</SelectContent>
            </Select>
             <Select value={skillsFilter} onValueChange={setSkillsFilter}>
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>{uniqueSkills.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Candidate</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Vouches</TableHead>
                <TableHead className="text-right">Match</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCandidates.map((candidate) => (
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
                    <div className="flex gap-2">
                        {candidate.platform && <SocialIcon platform={candidate.platform} className="h-5 w-5" />}
                        {candidate.platforms && candidate.platforms.map(p => <SocialIcon key={p} platform={p} className="h-5 w-5" />)}
                    </div>
                  </TableCell>
                  <TableCell>
                      <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
                        {candidate.location && <MapPin className="h-4 w-4" />}
                        {candidate.location}
                      </div>
                  </TableCell>
                  <TableCell>
                     <Badge variant={getStatusVariant(candidate.status)}>{candidate.status || 'N/A'}</Badge>
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
                            <DropdownMenuItem>Put on Hold</DropdownMenuItem>
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
