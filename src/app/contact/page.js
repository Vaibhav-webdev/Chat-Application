"use client"

import { PhoneCall } from 'lucide-react'
import React from 'react'
import Link from 'next/link'
import { CheckCircle } from "lucide-react"
import { LocationEdit } from 'lucide-react'
import { useState } from 'react'
import Questions from '../components/questions'
import { useEffect } from 'react'

const page = () => {
  const [showCheck, setShowCheck] = useState(false)

  useEffect(() => {
    // Fake payment processing delay
    const timer = setTimeout(() => {
      setShowCheck(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    const response = await fetch("https://formspree.io/f/mjkyyeoa", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setSubmitted(true);
      form.reset();
    } else {
      alert("Error sending message. Try again!");
    }
  };

  return (
    <div className="bg-black lg:pt-16 px-4 relative sm:px-6 md:px-10 lg:px-20 pb-20">
      <div className="absolute -top-40 left-0 w-[600px] h-[600px] bg-purple-500 rounded-full blur-[250px] opacity-40"></div>
      <div className="bg-gray-100 z-20 opacity-90 mt-10 mb-10 shadow-xl px-5 sm:px-10 py-10 sm:py-12 rounded-xl flex flex-col lg:flex-row gap-10">

        {/* Left Info Section */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-3xl text-gray-600 sm:text-4xl lg:text-5xl font-bold leading-snug">
            Get In Touch With Our Team Today
          </h2>
          <p className="text-gray-600 text-base sm:text-lg py-2 sm:py-5">
            Dive into a world where fashion meets expression. Our online clothing emporium is a curated destination for style enthusiasts.
          </p>

          {/* Call Us */}
          <div className="flex items-center mt-2 sm:mt-4 gap-4">
            <div className="bg-gradient-to-b from-[#5524B7] to-[#380B60] p-4 rounded-xl flex justify-center items-center">
              <PhoneCall className="text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Call Us!</h2>
              <p className="text-sm sm:text-base">+938 453 984</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center mt-2 sm:mt-4 gap-4">
            <div className="bg-gradient-to-b from-[#5524B7] to-[#380B60] p-4 rounded-xl flex justify-center items-center">
              <LocationEdit className="text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold">Location</h2>
              <p className="text-sm sm:text-base">London, UK, 23035</p>
            </div>
          </div>
        </div>

        {/* Right Form Section */}
        <div className="lg:w-1/2">
          {submitted ? (
            <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-10 w-full text-center">
              {/* Success Animation */}
              <div className="flex justify-center mb-4 sm:mb-6 animate-scale">
                <CheckCircle size={60} className="sm:text-6xl text-green-600" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-green-700">
                Sent Successful!
              </h2>
              <p className="text-gray-600 mt-2 sm:mt-3">
                Thanks For Connecting Us! 🎉
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 py-2">
              {/* Name & Subject */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                  className="border-white py-3 sm:py-4 px-3 sm:px-4 bg-white rounded-lg shadow-lg w-full"
                />
                <input
                  type="text"
                  placeholder="subject"
                  name="subject"
                  required
                  className="border-white py-3 sm:py-4 px-3 sm:px-4 bg-white rounded-lg shadow-lg w-full"
                />
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="email"
                name="email"
                required
                className="border-white w-full py-3 sm:py-4 px-3 sm:px-4 shadow-lg bg-white rounded-lg"
              />

              {/* Message */}
              <textarea
                placeholder="message"
                name="message"
                required
                className="border resize-none border-white shadow-lg w-full h-40 sm:h-50 py-3 sm:py-4 px-3 sm:px-4 bg-white rounded-lg"
              />

              {/* Submit Button */}
              <div className="flex justify-start">
                <button
                  type="submit"
                  className="bg-gradient-to-b from-[#5524B7] to-[#380B60] text-white mt-2 sm:mt-3 px-4 py-3 text-sm sm:text-base rounded-lg hover:bg-green-700 transition-all"
                >
                  Send Now
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* FAQ / Questions Section */}
      <Questions />
    </div>

  )
}

export default page
