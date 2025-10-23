'use client'

import { useState } from 'react'
import { ChatList } from './_components/chat-list'
import { ChatView } from './_components/chat-view'
import { recentChats, messages, type Message } from '@/lib/placeholder-data/recruiter'
import { type RecentChat } from '@/lib/placeholder-data/recruiter'

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<RecentChat | null>(recentChats[0])

  const handleSelectChat = (chat: RecentChat) => {
    setSelectedChat(chat)
    // In a real app, you might mark messages as read here
  }

  const handleSendMessage = (content: string) => {
    if (selectedChat) {
      const newMessage: Message = {
        id: `msg-${Date.now()}`,
        chatId: selectedChat.id,
        sender: 'recruiter',
        content,
        timestamp: new Date().toISOString(),
      };
      // In a real app, you would send this message to your backend.
      // For this demo, we'll just log it.
      console.log('Sending message:', newMessage);
      // You could also optimistically update the UI by adding it to the local state.
    }
  }

  return (
    <div className="h-[calc(100vh-10rem)] flex">
        <ChatList
            chats={recentChats}
            selectedChat={selectedChat}
            onSelectChat={handleSelectChat}
        />
        <ChatView
            chat={selectedChat}
            messages={selectedChat ? messages.filter(m => m.chatId === selectedChat.id) : []}
            onSendMessage={handleSendMessage}
        />
    </div>
  )
}
