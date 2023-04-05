import React from 'react'
import Link from 'next/link'
// components
import Container from './container'

// assets
import Logo from '../assets/logo'

function Navbar() {
  return (
    <>
    <Container>
    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:mt-8'>
      <div className='mt-4'>
      <Logo />
      </div>
    <ul className='md:mr-14 flex mt-16  justify-center text-center px-8 md:px-0 space-y-4 md:space-y-0  md:mt-0 items-center flex-col md:flex-row'>
    <Link  className='md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585] active' href="/">Home</Link>
    <Link className='md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]' href="/about">About</Link>
    <Link className='md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]' href="/products">Products</Link>
    <Link className='md:ml-12 hover:text-[#F18585] hover:border-b-2 hover:border-b-[#F18585]' href="/contact">Contact</Link>
    <Link className='md:ml-12 bg-[#F18585] px-8 md:px-16 rounded-full text-white md:py-2 py-1.5' href="/login">Sign In</Link>
    </ul>
    </div>
    </Container>
    </>
  )
}

export default Navbar