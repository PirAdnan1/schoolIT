import React from 'react'


// components
import Button from '../button'
import Container from '@/src//Mycontainer/Container'

// assets
import ScreenVector from '@/src/assets/ScreenVector'
import WatchVector from '@/src/assets/WatchVector'
import EmojiVector from '@/src/assets/EmojiVector'


function SectionC() {


  return (
    <Container >
      <div className="">
      <div className='grid lg:grid-cols-3  xl:mx-10 px-4 gap-7 sm:px-0 justify-center justify-items-center mt-20'>
        <div className='shadow-md mt-3 w-full max-w-[415px] pt-12 justify-center items-center flex flex-col'>
        <ScreenVector />
        <span className='my-8 text-center'>Intuitive interface</span>
        </div>
        <div className='shadow-md mt-12 w-full max-w-[415px] lg:mt-0 pt-12 justify-center items-center flex flex-col'>
            <WatchVector />
            <span className='text-center w-[368px] my-8'>Massive time savings for entire staff</span>
        </div>
        <div className='shadow-md mt-12 w-full max-w-[415px] lg:mt-0 pt-12 justify-center items-center flex flex-col'>
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