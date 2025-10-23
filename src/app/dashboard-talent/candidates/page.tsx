'use client'

import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from '@/components/ui/table';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, MapPin, MoreHorizontal } from 'lucide-react';
import { allTalents, type DetailedTalent } from '@/lib/talent';
import { SocialIcon, SocialPlatform } from '@/components/shared/social-icon';
import { Progress } from '@/components/ui/progress';


const statusColorMap: { [key: string]: string } = {
  'Active': 'bg-green-500/20 text-green-400 border-green-500/30',
  'On Hold': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Rejected': 'bg-red-500/20 text-red-400 border-red-500/30',
};

export default function CandidatesPage() {
  const [search, setSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('All Roles');
  const [platformFilter, setPlatformFilter] = useState('All Platforms');
  const [statusFilter, setStatusFilter] = useState('All Statuses');
  const [levelFilter, setLevelFilter] = useState('All Levels');
  const [skillsFilter, setSkillsFilter] = useState('All Skills');

  const filteredTalent = useMemo(() => {
    return allTalents.filter(talent => {
      const nameMatch = talent.name.toLowerCase().includes(search.toLowerCase());
      const roleMatch = roleFilter === 'All Roles' || talent.role === roleFilter;
      const platformMatch = platformFilter === 'All Platforms' || (talent.platforms && talent.platforms.includes(platformFilter as SocialPlatform)) || talent.platform === platformFilter;
      const statusMatch = statusFilter === 'All Statuses' || talent.status === statusFilter;
      // Experience level and skills filters are not implemented as data is not available
      return nameMatch && roleMatch && platformMatch && statusMatch;
    });
  }, [search, roleFilter, platformFilter, statusFilter]);

  const getStatusColor = (status: string | undefined) => {
    return status ? statusColorMap[status] || 'bg-muted text-muted-foreground' : 'bg-muted text-muted-foreground';
  };
  
  const roles = ['All Roles', ...Array.from(new Set(allTalents.map(t => t.role)))];
  const platforms = ['All Platforms', ...Array.from(new Set(allTalents.flatMap(t => t.platforms || (t.platform ? [t.platform] : []))))];
  const statuses = ['All Statuses', ...Array.from(new Set(allTalents.map(t => t.status).filter(Boolean)))];


  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold font-headline">Candidates</h1>
      <Card>
        <CardHeader>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="relative lg:col-span-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by name..."
                className="pl-9"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                {roles.map(role => <SelectItem key={role} value={role}>{role}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={platformFilter} onValueChange={setPlatformFilter}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                 {platforms.map(platform => <SelectItem key={platform} value={platform}>{platform}</SelectItem>)}
              </SelectContent>
            </Select>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                 {statuses.map(status => <SelectItem key={status} value={status}>{status}</SelectItem>)}
              </SelectContent>
            </Select>
             <Button variant="outline" className="w-full">
                Apply Filters
              </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className='w-2/6'>Candidate</TableHead>
                <TableHead>Expertise</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Vouches</TableHead>
                <TableHead>Match</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredTalent.map((talent, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={talent.src} alt={talent.name} />
                        <AvatarFallback>{talent.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{talent.name}</p>
                        <p className="text-sm text-muted-foreground">{talent.role}</p>
                      </div>
                    </div>
                  </TableCell>
                   <TableCell>
                    <div className="flex items-center gap-2">
                      {talent.platforms?.map(p => <SocialIcon key={p} platform={p} className="h-5 w-5" />) || (talent.platform && <SocialIcon platform={talent.platform} className="h-5 w-5" />)}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        {talent.location || 'Remote'}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={getStatusColor(talent.status)}>
                      {talent.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{talent.vouches || 0}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                        <span className="font-semibold text-primary">92%</span>
                        <Progress value={92} className="h-1.5 w-20 bg-primary/20" />
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
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
