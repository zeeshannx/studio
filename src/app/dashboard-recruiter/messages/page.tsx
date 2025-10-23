
'use client'

import { useState } from 'react'
import { ChatList } from './_components/chat-list'
import { ChatView } from './_components/chat-view'
import { recentChats, messages as allMessages, type Message } from '@/lib/placeholder-data/recruiter'
import { type RecentChat } from '@/lib/placeholder-data/recruiter'

export default function MessagesPage() {
  const [selectedChat, setSelectedChat] = useState<RecentChat | null>(recentChats[0])
  const [messages, setMessages] = useState(allMessages);

  const handleSelectChat = (chat: RecentChat) => {
    setSelectedChat(chat)
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
      setMessages((prevMessages) => [...prevMessages, newMessage]);
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
