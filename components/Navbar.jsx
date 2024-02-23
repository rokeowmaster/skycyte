import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
        <div className='bg-black h-6'>

        </div>
        <nav className='flex justify-between mx-12 h-12 mt-6'>
          <Image src="/logo.PNG" width={100} height={150} alt="skycyte logo" />
          <section className='sm:flex justify-between gap-8 hidden'>
              <a href='/about'>About</a>
              <a href='/services'>Services</a>
              <a href='/products'>Products</a>
              <a href='contacts'>Contacts</a>
          </section>
        </nav>

    </>
  )
}

export default Navbar