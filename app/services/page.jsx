"use client"
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Services = () => {

  return (
    <>
      <Navbar />
      <div>
        <Image src="/serviceban.png" height={200} width={1200} alt="services-banner" className="w-full"/>
      </div>
    </>
        
  )
}

export default Services