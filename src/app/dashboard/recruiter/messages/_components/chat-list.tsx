'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Search } from 'lucide-react'
import { cn } from '@/lib/utils'
import { type RecentChat } from '@/lib/placeholder-data/recruiter'

interface ChatListProps {
  chats: RecentChat[]
  selectedChat: RecentChat | null
  onSelectChat: (chat: RecentChat) => void
}

export function ChatList({ chats, selectedChat, onSelectChat }: ChatListProps) {
  return (
    <Card className="w-1/3 min-w-[300px] h-full flex flex-col rounded-r-none">
        <div className="p-4 border-b">
            <h2 className="text-2xl font-bold font-headline">Messages</h2>
            <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input placeholder="Search messages..." className="pl-10" />
            </div>
        </div>
      <CardContent className="p-0 flex-grow overflow-y-auto">
        <div className="space-y-1">
          {chats.map(chat => (
            <button
              key={chat.id}
              className={cn(
                "w-full text-left flex items-center gap-3 p-4 transition-colors",
                selectedChat?.id === chat.id ? "bg-muted" : "hover:bg-muted/50"
              )}
              onClick={() => onSelectChat(chat)}
            >
              <Avatar className="h-12 w-12">
                <AvatarImage src={chat.avatarUrl} alt={chat.name} />
                <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-grow overflow-hidden">
                <p className="font-semibold truncate">{chat.name}</p>
                <p className={cn("text-sm text-muted-foreground truncate", chat.unread && "font-bold text-foreground")}>
                  {chat.lastMessage}
                </p>
              </div>
              <div className="text-right self-start shrink-0">
                  <p className="text-xs text-muted-foreground">{chat.time}</p>
                  {chat.unread && <div className="h-2 w-2 rounded-full bg-primary ml-auto mt-1"></div>}
              </div>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
