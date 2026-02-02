"use client"

import React, { useEffect, useState } from 'react'
import { Send } from 'lucide-react'
import Message from "./Messages"
import socket from '@/lib/socket'
import { useSession } from "next-auth/react";

const Right_Main = () => {
  const { data: session } = useSession();

  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (!session) return;

    socket.connect();

    socket.on("chat message", (msg) => {
      if (document.hidden) {
  new Notification("New message received!");
}
      setMessages((prev) => [...prev, msg]);
      messageSound?.play().catch(() => {});
    });

    return () => {
      socket.off("chat message");
      socket.disconnect();
    };
  }, [session]);
  
  const messageSound = typeof window !== "undefined" ? new Audio("/pop.mp3") : null;

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!message.trim() || !session) return;

    socket.emit("chat message", {
      text: message,
      senderId: session.user.name,
      timestamp: new Date().toISOString(),
    });

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
          className="flex justify-between p-3 backdrop-blur-md"
        >
          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            type="text"
            className="flex-1 px-6 py-3 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
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
