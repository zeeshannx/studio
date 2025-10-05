'use client';

import { SidebarProvider, Sidebar, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { DashboardSidebar } from './_components/dashboard-sidebar';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({
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
            <SidebarInset>
                <div className="p-4 md:p-8">
                    <div className="md:hidden mb-4">
                        <SidebarTrigger />
                    </div>
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
