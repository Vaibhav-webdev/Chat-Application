"use client"

import React from 'react'
import { Clock } from 'lucide-react';
import { useSession } from 'next-auth/react';

const Messages = ({ sender, text, timestamp }) => {
  const { data: session } = useSession();
  
  const isMe = sender === session.user.name;
  let real_sender = ""
  if (session.user.name === sender) {
    real_sender = "You"
  } else {
    real_sender = sender
  }
  
  const time = new Date(timestamp);
  const hour = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  
  return (
    <li
      className={`flex py-2 px-4 ${
        isMe ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[70%] rounded-lg px-3 py-2 ${
          isMe
            ? "bg-blue-400 text-white text-right"
            : "bg-gray-700 text-gray-200 text-left"
        }`}
      >
        {!isMe && (
          <strong className="block text-xs opacity-70 mb-1">
            {sender}
          </strong>
        )}

        <p>{text}</p>

        <span className="flex items-center text-xs opacity-60 gap-1 justify-end mt-1">
          <Clock className="w-3 h-3" />
          {hour}:{minutes}
        </span>
      </div>
    </li>
  )
}

export default Messages