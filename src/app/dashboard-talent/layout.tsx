'use client';

import { SidebarProvider, Sidebar, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { DashboardSidebar } from './_components/dashboard-sidebar';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { cn } from '@/lib/utils';
import { GridPattern } from '@/components/ui/grid-pattern';
import { SocialIconsAnimation } from '@/components/landing/social-icons-animation';

export default function DashboardTalentLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { user, isUserLoading } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!isUserLoading && !user) {
            router.push('/login');
        }
    }, [user, isUserLoading, router]);

    if (isUserLoading || !user) {
        return <div>Loading...</div>; // Or a loading spinner
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
            </SidebarInset>
        </SidebarProvider>
    );
}
