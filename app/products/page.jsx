import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Products = () => {
  return (
    <>
    <Navbar />
    <div>
      <Image src="/productsbanner.jpg" width={1200} height={200} alt="" className="w-full"/>
    </div>
    <section className='flex flex-wrap justify-between gap-12 mx-8 mt-8'>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <Image className="w-full" height={750} width={100} src="/steth.jpg" alt="Stethoscope" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Kshs. 2,000</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Stock: 50</span>
        </div>

      </div>      
    </section>
    </>
    
  )
}

export default Products