
'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { cn } from '@/lib/utils'
import { type RecentChat, type Message } from '@/lib/placeholder-data/recruiter'
import { useUser } from '@/firebase'

interface ChatMessageProps {
  message: Message
  chat: RecentChat
}

export function ChatMessage({ message, chat }: ChatMessageProps) {
  const { user } = useUser()
  const isSender = message.sender === 'recruiter'

  return (
    <div className={cn('flex items-end gap-3', isSender ? 'justify-end' : 'justify-start')}>
      {!isSender && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={chat.avatarUrl} alt={chat.name} />
          <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          'max-w-xs md:max-w-md lg:max-w-lg rounded-xl p-3',
          isSender ? 'bg-primary text-primary-foreground rounded-br-none' : 'bg-muted rounded-bl-none'
        )}
      >
        <p className="text-sm">{message.content}</p>
      </div>
      {isSender && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={user?.photoURL || undefined} alt={user?.displayName || 'You'} />
          <AvatarFallback>{user?.displayName?.charAt(0) || 'Y'}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}
