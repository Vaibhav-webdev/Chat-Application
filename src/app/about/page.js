// import Image from 'next/image'
import React from 'react'
import { Truck } from "lucide-react"
// import Link from 'next/link'
// import Footer from '../components/footer'
import Marquee from '../components/Marquee'
import { CreditCard } from 'lucide-react'
import { Package } from 'lucide-react'
import { Gem } from 'lucide-react'

const page = () => {
  return (
    <div className='bg-black px-5 sm:px-8 lg:px-20 pb-20'>
      <div className='pt-22'>
        <div>
          <h2 className='text-center lg:text-left text-3xl sm:text-4xl text-gray-400 lg:text-6xl leading-tight font-bold'>The Story of Innovation, Style, and the Soul of Our Store.</h2>
        </div>
        <div>
          <p className='pt-4 text-center lg:text-left text-gray-500 text-base sm:text-lg'>Welcome to our digital emporium, where style meets innovation in the realm of watches, gadgets, and cutting-edge technology. Discover a curated collection that transcends time, blending timeless elegance with the latest advancements. From sleek smartwatches that seamlessly integrate with your lifestyle to futuristic gadgets that redefine convenience, our store is your gateway to a world where form and function coalesce. Explore the intersection of fashion and technology, and immerse yourself in a realm of endless possibilities. Elevate your everyday with our meticulously selected range—because time is precious, and so is staying ahead in the world of gadgets and tech. Welcome to the future of wristwear and beyond.Established with a vision to redefine the world of watches, gadgets, and technology, our journey is a testament to a relentless pursuit of excellence. We curate collections that transcend the ordinary, seamlessly blending the allure of classic timepieces with the cutting-edge allure of modern technology. Committed to providing a personalized shopping experience, we guide you through a realm of possibilities, ensuring every product resonates with your unique taste. Our story is one of crafting tomorrow's classics, a tale where gears meet dreams, and where the ticking of time harmonizes with the pulse of innovation. Join us on this odyssey as we continue to pioneer the future, one wrist at a time. Welcome to a world where sophistication meets innovation—welcome to our story.</p>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-6 mt-16'>
        <div className='bg-gray-100 py-6 px-6 rounded-lg'>
          <div>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600'>Our Vision</h2>
          </div>
          <div>
            <p className='mt-3 text-gray-700'>
              Our journey is a testament to a relentless pursuit of excellence. We curate collections that transcend the ordinary, seamlessly blending the allure of classic timepieces with the cutting-edge allure of modern technology. Committed to providing a personalized shopping experience, we guide you through a realm of possibilities, ensuring every product resonates with your unique taste. Our story is one of crafting tomorrow's classics</p>
          </div>
        </div>
        <div className='bg-gray-100 rounded-lg py-6 px-6'>
          <div>
            <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-600'>Our Approch</h2>
          </div>
          <div>
            <p className='mt-3 text-gray-700'>
              We guide you through a realm of possibilities, ensuring every product resonates with your unique taste. Our story is one of crafting tomorrow's classics, a tale where gears meet dreams, and where the ticking of time harmonizes with the pulse of innovation. Join us on this odyssey as we continue to pioneer the future, one wrist at a time. Welcome to a world where sophistication meets innovation—welcome to our story.</p>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-18 pb-10'>
        <div className='flex flex-col items-center'>
          <div className='bg-gradient-to-b from-[#5524B7] to-[#380B60] flex justify-center items-center w-20 h-20 rounded-lg'>
            <Truck width={40} height={40} className='text-gray-300' />
          </div>
          <div>
            <h2 className='font-bold text-lg sm:text-xl text-gray-400 lg:text-2xl mt-6 text-center'>Free shipping</h2>
          </div>
          <div>
            <p className='text-gray-500 text-center mt-2'>Elevate your casual style with our Men's Hoodie</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-gradient-to-b from-[#5524B7] to-[#380B60] flex justify-center items-center w-20 h-20 rounded-lg'>
            <CreditCard width={40} height={40} className='text-gray-300' />
          </div>
          <div>
            <h2 className='font-bold text-lg text-gray-400 sm:text-xl lg:text-2xl mt-6 text-center'>Secure payments</h2>
          </div>
          <div>
            <p className='text-gray-500 text-center mt-2'>Elevate your casual style with our Men's Hoodie</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-gradient-to-b from-[#5524B7] to-[#380B60] flex justify-center items-center w-20 h-20 rounded-lg'>
            <Package width={40} height={40} className='text-gray-300' />
          </div>
          <div>
            <h2 className='font-bold text-gray-400 text-lg sm:text-xl lg:text-2xl mt-6 text-center'>7 days free return</h2>
          </div>
          <div>
            <p className='text-gray-500 text-center mt-2'>Elevate your casual style with our Men's Hoodie</p>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='bg-gradient-to-b from-[#5524B7] to-[#380B60] flex justify-center items-center w-20 h-20 rounded-lg'>
            <Gem width={40} height={40} className='text-gray-300' />
          </div>
          <div>
            <h2 className='font-bold text-gray-400 text-lg sm:text-xl lg:text-2xl mt-6 text-center'>Curated collections</h2>
          </div>
          <div>
            <p className='text-gray-500 text-center mt-2'>Elevate your casual style with our Men's Hoodie</p>
          </div>
        </div>
      </div>
      <Marquee />
      {/* <Footer /> */}
    </div>
  )
}

export default page
