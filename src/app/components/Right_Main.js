"use client"

import React, { useEffect, useState, useRef } from 'react'
import { Send } from 'lucide-react'
import { toast } from 'sonner'
import Message from "./Messages"
import { useSearchParams } from 'next/navigation'
import socket from '@/lib/socket'
import { useSession } from "next-auth/react";

const Right_Main = () => {
  const searchParams = useSearchParams()
  const groupId = searchParams.get("room")

  const { data: session } = useSession();
  const popSoundRef = useRef(null)

  const [message, setMessage] = useState("")
  const [show, setshow] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    popSoundRef.current = new Audio("/pop.mp3")

    if (!socket.connected) {
      socket.connect();
    }

    socket.on("connect", () => {
      console.log("Connected:", socket.id);
    });

    socket.on("chat message", (data) => {
      setMessages(prev => [...prev, data])
      popSoundRef.current?.play().catch(() => {})
    });

    return () => {
      socket.off("chat message"); 
      socket.disconnect();
    };
  }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    socket.emit("chat message", {
      text: message,
      senderId: session.user.name,
      timestamp: Date.now(),
    })
    setMessage("")
  }
  return (
    <div className="relative h-full">
      <div className='p-4'>
        {messages.map((item, index) => (
          <Message
            key={index}
            sender={item.senderId}
            text={item.text}
            timestamp={item.timestamp}
          />
        ))}
      </div>
      <div className='absolute bottom-0 w-full'>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between p-3 backdrop-blur-md bg-b"
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="flex-1 px-2 lg:px-6 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type a message..."
          />

          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-500 text-gray-300 shadow-lg rounded-lg hover:bg-blue-600 transition"
          >
            <Send />
          </button>
        </form>
      </div>
    </div>
  )
}

export default Right_Main
