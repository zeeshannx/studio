'use client'

import {
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  SidebarGroup,
  useSidebar,
} from '@/components/ui/sidebar'
import {
  Home,
  Briefcase,
  Star,
  User,
  Users,
  Settings,
  LogOut,
  Bell,
  LayoutGrid,
  FileText,
  GalleryVertical,
} from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useUser, useAuth } from '@/firebase'
import { signOut } from 'firebase/auth'

export function DashboardSidebar() {
  const { user } = useUser()
  const auth = useAuth()
  const { state } = useSidebar()

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
                <AvatarFallback>{user?.displayName?.charAt(0) || 'U'}</AvatarFallback>
            </Avatar>
            <span className="text-sm font-semibold truncate group-data-[collapsible=icon]:hidden">
                {user?.displayName}
            </span>
        </div>
        <div className="group-data-[collapsible=icon]:hidden">
            <SidebarTrigger />
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard" isActive tooltip="Dashboard">
              <LayoutGrid />
              <span>Dashboard</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/recruiter/applicants" tooltip="Candidates">
              <Users />
              <span>Candidates</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/applications" tooltip="My Applications">
              <FileText />
              <span>My Applications</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/recommendations" tooltip="Recommended Jobs">
              <Star />
              <span>Recommended</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/profile" tooltip="My Profile">
              <User />
              <span>My Profile</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-2">
         <SidebarMenu>
           <SidebarMenuItem>
            <SidebarMenuButton href="/dashboard/settings" tooltip="Settings">
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