import React from 'react'
import Link from 'next/link'

// components
import Container from './Container'


// assets
import Logo from '../assets/logo'


function Footer() {
  return (
    <Container>
    <div className='grid lg:grid-cols-3 items-center space-y-9 px-4 lg:px-0 lg:space-y-0 justify-items-center mt-36'>
        <div>
        <Logo />
        </div>
        <div className='flex flex-col text-[24px]'>
            <h5>Legal</h5>
            <Link href="#" className='text-[#F18585] mt-6'>Terms</Link>
            <Link href="#" className='text-[#F18585] mt-6'>Privacy</Link>
            <Link href="#" className='text-[#F18585] mt-6'>Cookies</Link>
        </div>
        <div className='flex flex-col text-[24px]'>
            <h5 className='text-center'>Contact us</h5>
            <span className='text-[#F18585] mt-6 text-center'>contact@piradnan.com</span>
           <span className='text-[#F18585] mt-6 text-center'>+992-235432132</span> 
        </div>
    </div>
    <p className='text-base text-center mt-28 mb-6'>Copyright @  schoolIT, 2019</p>
    </Container>
  )
}

export default Footer