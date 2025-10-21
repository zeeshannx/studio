
'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { recentChats } from '@/lib/placeholder-data/recruiter'
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function RecentChats() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Recent Chats</CardTitle>
          <Button variant="ghost" size="sm" asChild>
            <Link href="#">View All <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
        <CardDescription>Your latest conversations with candidates.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {recentChats.map(chat => (
          <div key={chat.id} className="flex items-center justify-between gap-3 p-2 -m-2 rounded-lg hover:bg-muted cursor-pointer">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={chat.avatarUrl} alt={chat.name} data-ai-hint="person" />
                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow">
                <p className="font-semibold text-sm">{chat.name}</p>
                <p className={cn(
                    "text-xs text-muted-foreground truncate max-w-40",
                    chat.unread && "font-bold text-foreground"
                )}>
                  {chat.lastMessage}
                </p>
              </div>
            </div>
            <div className="text-right shrink-0">
                <p className="text-xs text-muted-foreground">{chat.time}</p>
                {chat.unread && <div className="h-2 w-2 rounded-full bg-primary ml-auto mt-1"></div>}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
