import React from 'react'
import Image from 'next/image'
// components
import Container from '../container'

// assets
import HeroImg from "@/src/assets/hero.png"
function Hero() {
  return (
    <Container>
        <div className='flex flex-col md:flex-row justify-center px-4 md:px-0 mt-24'>
         <h1 className='md:text-[48px] text-[22px] max-w-[527px]'>A student-centered education and experiential learning platform</h1>
         <Image src={HeroImg} className='mt-4 md:mt-0' alt='...' width={527} height={367} />
        </div>
    </Container>
  )
}

export default Hero