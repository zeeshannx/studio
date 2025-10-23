'use client'

import { useState, useRef, useEffect } from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Send, Phone, Video, MoreVertical } from 'lucide-react'
import { type RecentChat, type Message } from '@/lib/placeholder-data/recruiter'
import { ChatMessage } from './chat-message'

interface ChatViewProps {
  chat: RecentChat | null
  messages: Message[]
  onSendMessage: (content: string) => void
}

export function ChatView({ chat, messages, onSendMessage }: ChatViewProps) {
  const [newMessage, setNewMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      onSendMessage(newMessage.trim())
      setNewMessage('')
    }
  }

  if (!chat) {
    return (
      <Card className="flex-grow h-full flex items-center justify-center rounded-l-none">
        <div className="text-center text-muted-foreground">
          <p>Select a conversation to start chatting</p>
        </div>
      </Card>
    )
  }

  return (
    <Card className="flex-grow h-full flex flex-col rounded-l-none">
      <CardHeader className="flex flex-row items-center justify-between border-b p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={chat.avatarUrl} alt={chat.name} />
            <AvatarFallback>{chat.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{chat.name}</p>
            <p className="text-sm text-muted-foreground">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon"><Phone className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><Video className="h-5 w-5" /></Button>
          <Button variant="ghost" size="icon"><MoreVertical className="h-5 w-5" /></Button>
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-4 overflow-y-auto space-y-6">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} chat={chat} />
        ))}
        <div ref={messagesEndRef} />
      </CardContent>
      <div className="p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            autoComplete="off"
          />
          <Button type="submit" size="icon" className="bg-primary-gradient shrink-0">
            <Send className="h-5 w-5" />
          </Button>
        </form>
      </div>
    </Card>
  )
}
