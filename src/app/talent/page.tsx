
'use client';
import { useState, useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { allTalents as fetchAllTalents } from '@/lib/talent';
import { ChevronRight, ListFilter, ArrowUpDown } from 'lucide-react';
import Link from 'next/link';
import { SocialIcon } from '@/components/shared/social-icon';
import TalentListingComponent from '@/components/ui/talentlisting-component';
import { cn } from '@/lib/utils';

const allTalents = fetchAllTalents;

const TALENTS_PER_PAGE = 15;

export default function TalentPage() {
    const [talents, setTalents] = useState(allTalents);
    const [currentPage, setCurrentPage] = useState(1);
    const [hireMe, setHireMe] = useState(true);
    const [bookMe, setBookMe] = useState(false);

    const totalPages = Math.ceil(talents.length / TALENTS_PER_PAGE);
    const visibleTalents = talents.slice(
        (currentPage - 1) * TALENTS_PER_PAGE,
        currentPage * TALENTS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    
    const paginationItems = () => {
        const items = [];
        if(totalPages <= 6) {
            for (let i = 1; i <= totalPages; i++) {
                items.push(i);
            }
        } else {
            items.push(1);
            if(currentPage > 3) items.push('...');
            
            let start = Math.max(2, currentPage - 1);
            let end = Math.min(totalPages - 1, currentPage + 1);

            if(currentPage <= 3) {
                start = 2;
                end = 4;
            } else if (currentPage >= totalPages - 2) {
                start = totalPages - 3;
                end = totalPages - 1;
            }

            for (let i = start; i <= end; i++) {
                items.push(i);
            }

            if(currentPage < totalPages - 2) items.push('...');
            items.push(totalPages);
        }
        return items;
    }


    return (
        <div className="bg-background min-h-screen">
            <div className="container mx-auto px-4 py-12">
                <header className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Talent</h1>
                    <div className="flex flex-wrap items-center gap-4">
                        <Button variant="outline" className="gap-2">
                           <ArrowUpDown className="h-4 w-4" /> Sort
                        </Button>
                         <Select defaultValue="all">
                            <SelectTrigger className="w-auto gap-2">
                                <ListFilter className="h-4 w-4" />
                                <SelectValue placeholder="All Categories" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Categories</SelectItem>
                                <SelectItem value="editor">Video Editor</SelectItem>
                                <SelectItem value="designer">Thumbnail Designer</SelectItem>
                                <SelectItem value="manager">Channel Manager</SelectItem>
                                <SelectItem value="director">Creative Director</SelectItem>
                            </SelectContent>
                        </Select>
                        <div className="flex items-center gap-2 rounded-md bg-muted p-1">
                            <Button variant={hireMe ? 'default' : 'ghost'} onClick={() => { setHireMe(true); setBookMe(false); }} className={cn("px-4 py-1 h-auto text-sm", hireMe && "bg-primary-gradient")}>Hire Me</Button>
                            <Button variant={bookMe ? 'default' : 'ghost'} onClick={() => { setBookMe(true); setHireMe(false); }} className={cn("px-4 py-1 h-auto text-sm", bookMe && "bg-primary-gradient")}>Book Me</Button>
                        </div>
                    </div>
                </header>

                <main className="w-full">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-muted-foreground text-sm">
                           Showing {((currentPage - 1) * TALENTS_PER_PAGE) + 1}-{Math.min(currentPage * TALENTS_PER_PAGE, talents.length)} of {talents.length} results
                        </p>
                    </div>
                    
                    <TalentListingComponent talents={visibleTalents} className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3" />

                    <div className="flex justify-center items-center gap-2 mt-12">
                        <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                            <ChevronRight className="h-4 w-4 rotate-180" />
                        </Button>
                        {paginationItems().map((page, index) => (
                            <Button 
                                key={index} 
                                variant={page === currentPage ? 'default' : 'outline'}
                                className={cn("w-10", page === currentPage && "bg-primary-gradient")}
                                onClick={() => typeof page === 'number' && handlePageChange(page)}
                                disabled={typeof page !== 'number'}
                            >
                                {page}
                            </Button>
                        ))}
                        <Button variant="outline" size="icon" onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                             <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </main>
            </div>
        </div>
    );
}

    