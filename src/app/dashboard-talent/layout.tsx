
'use client';

import { SidebarProvider, Sidebar, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { DashboardSidebar } from './_components/dashboard-sidebar';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/ui/grid-pattern';
import { SocialIconsAnimation } from '@/components/landing/social-icons-animation';
import { Button } from '@/components/ui/button';
import { PenSquare } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { FeedbackDialog } from '@/components/shared/feedback-dialog';
import PulsatingDots from '@/components/ui/pulsating-loader';

export default function DashboardTalentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isUserLoading } = useUser();
    const router = useRouter();
    const [isFeedbackDialogOpen, setIsFeedbackDialogOpen] = useState(false);

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/login');
        }
    }, [user, isUserLoading, router]);

    if (isUserLoading || !user) {
        return (
            <div className="flex h-screen items-center justify-center">
                <PulsatingDots />
            </div>
        );
    }

    return (
        <SidebarProvider>
            <Sidebar>
                <DashboardSidebar />
            </Sidebar>
            <SidebarInset className="bg-transparent">
                 <GridPattern
                    width={40}
                    height={40}
                    x={-1}
                    y={-1}
                    className={cn(
                    '[mask-image:radial-gradient(ellipse_at_center,white,transparent)]',
                    'absolute inset-0 z-0 h-full w-full skew-y-12 opacity-50'
                    )}
                />
                <SocialIconsAnimation />
                <div className="relative z-10 p-4 md:p-8">
                    <div className="md:hidden mb-4">
                        <SidebarTrigger />
                    </div>
                    {children}
                </div>
                 <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button 
                                className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-primary-gradient gap-2 z-50"
                                onClick={() => setIsFeedbackDialogOpen(true)}
                            >
                                <PenSquare className="h-6 w-6" />
                                <span className="sr-only">Submit Feedback</span>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left">
                            <p>Submit Feedback</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
                <FeedbackDialog open={isFeedbackDialogOpen} onOpenChange={setIsFeedbackDialogOpen} />
            </SidebarInset>
        </SidebarProvider>
    );
}
