
'use client'

import { useState, FormEvent } from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Phone, Video, MoreVertical, Paperclip, Mic, CornerDownLeft } from 'lucide-react'
import { type RecentChat, type Message } from '@/lib/placeholder-data/recruiter'
import { ChatMessageList } from '@/components/ui/chat-message-list'
import { ChatBubble, ChatBubbleAvatar, ChatBubbleMessage } from '@/components/ui/chat-bubble'
import { ChatInput } from '@/components/ui/chat-input'
import { useUser } from '@/firebase'

interface ChatViewProps {
  chat: RecentChat | null
  messages: Message[]
  onSendMessage: (content: string) => void
}

export function ChatView({ chat, messages, onSendMessage }: ChatViewProps) {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useUser()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    onSendMessage(input)
    setInput('')
  }
  
  const handleAttachFile = () => {
    //
  };

  const handleMicrophoneClick = () => {
    //
  };

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
      <div className="flex-1 overflow-hidden">
        <ChatMessageList>
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              variant={message.sender === "recruiter" ? "sent" : "received"}
            >
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src={
                  message.sender === "recruiter"
                    ? user?.photoURL || undefined
                    : chat.avatarUrl
                }
                fallback={message.sender === "recruiter" ? user?.displayName?.charAt(0) || 'R' : chat.name.charAt(0)}
              />
              <ChatBubbleMessage
                variant={message.sender === "recruiter" ? "sent" : "received"}
              >
                {message.content}
              </ChatBubbleMessage>
            </ChatBubble>
          ))}

          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar
                className="h-8 w-8 shrink-0"
                src={chat.avatarUrl}
                fallback={chat.name.charAt(0)}
              />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </div>

      <div className="p-4 border-t">
        <form
          onSubmit={handleSubmit}
          className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring p-1"
        >
          <ChatInput
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0"
          />
          <div className="flex items-center p-3 pt-0 justify-between">
            <div className="flex">
              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleAttachFile}
              >
                <Paperclip className="size-4" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                type="button"
                onClick={handleMicrophoneClick}
              >
                <Mic className="size-4" />
              </Button>
            </div>
            <Button type="submit" size="sm" className="ml-auto gap-1.5 bg-primary-gradient">
              Send
              <CornerDownLeft className="size-3.5" />
            </Button>
          </div>
        </form>
      </div>
    </Card>
  )
}
