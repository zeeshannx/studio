
'use client'

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import {
  LayoutGrid,
  Users,
  Briefcase,
  FilePlus,
  MessageSquare,
  Settings,
  LogOut,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUser, useAuth } from '@/firebase'
import { signOut } from 'firebase/auth'

export function RecruiterSidebar() {
  const { user } = useUser()
  const auth = useAuth()

  const handleSignOut = async () => {
    if (auth) {
      await signOut(auth)
    }
  }

  return (
    <>
      <SidebarHeader className="flex items-center justify-between">
        <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
                <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'User'} />
                <AvatarFallback>{user?.displayName?.charAt(0) || 'R'}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold truncate group-data-[collapsible=icon]:hidden">
                {user?.displayName || 'Recruiter'}
            </span>
        </div>
        <div className="group-data-[collapsible=icon]:hidden">
            <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/recruiter" isActive tooltip="Dashboard">
              <LayoutGrid />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/recruiter/jobs" tooltip="Manage Jobs">
              <Briefcase />
              <span>Manage Jobs</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
           <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/recruiter/post-job" tooltip="Post a New Job">
              <FilePlus />
              <span>Post a Job</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/recruiter/applicants" tooltip="Applicants">
              <Users />
              <span>Applicants</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/recruiter/messages" tooltip="Messages">
              <MessageSquare />
              <span>Messages</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-2">
         <SidebarMenu>
           <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/recruiter/settings" tooltip="Settings">
              <Settings />
              <span>Settings</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton onClick={handleSignOut} tooltip="Log Out">
              <LogOut />
              <span>Log Out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </>
  )
}
