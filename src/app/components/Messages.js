"use client"

import React from 'react'
import { Clock } from 'lucide-react';

const Messages = ({ sender, text, timestamp }) => {
    const time = new Date(timestamp);
  const hour = time.getHours().toString().padStart(2, "0");
  const minutes = time.getMinutes().toString().padStart(2, "0");
  return (
    <li className="flex text-gray-200 justify-between items-center py-2 px-4">
        <span>
          <strong className='text-gray-100'>{sender}:</strong> {text}
        </span>
        <span className="flex items-center text-xs text-gray-300 gap-1">
          <Clock className="w-3 h-3" /> {hour}:{minutes}
        </span>
      </li>
  )
}

export default Messages