"use client"

import React from 'react'
import Show from './Show'
import { useSearchParams } from 'next/navigation'
import Right_Main from './Right_Main'
import { useState, useEffect } from 'react'

const Right = () => {
  const searchParams = useSearchParams()
  const [show, setshow] = useState(false)

  const show_data = searchParams.get("show")
  
  useEffect(() => {
    if (show_data === "true") {
      setshow(true)
    }
  }, [show_data])
  
  return (
    <div className='relative w-full'>
        {show ? <Right_Main /> : <Show />}
    </div>
  )
}

export default Right