import React from 'react'
import Image from 'next/image'


// components
import Button from '../button'
import Container from '../Container'

// assets
import ScreenVector from '@/src/assets/ScreenVector'
import WatchVector from '@/src/assets/WatchVector'
import EmojiVector from '@/src/assets/EmojiVector'


function SectionC() {


  return (
    <Container >
      <div className="">
      <div className='grid sm:grid-cols-3 px-4 sm:px-0 justify-center sm:space-y-0 justify-items-center mt-20'>
        <div className='shadow-md mt-3 sm:mt-0 px-32 pt-12 justify-center items-center flex flex-col'>
        <ScreenVector />
        <span className='my-8 text-center'>Intuitive interface</span>
        </div>
        <div className='shadow-md mt-3 sm:mt-0 px-32 pt-12 justify-center items-center flex flex-col'>
            <WatchVector />
            <span className='text-center my-8'>Massive time savings for entire staff</span>
        </div>
        <div className='shadow-md mt-3 sm:mt-0 px-32 pt-12 justify-center items-center flex flex-col'>
            <EmojiVector />
            <span className='my-8'>Easy to use</span>
        </div>
        
        {/* <Button /> */}
    </div>
    {/* <div className=''>
    <Image src={Background}  alt='...' width={346} className='w-full relative' height={296} />
    </div> */}
    </div>
    </Container>
  )
}

export default SectionC