import React from 'react'

// assets
import ScreenVector from '@/src/assets/ScreenVector'
import WatchVector from '@/src/assets/WatchVector'
import EmojiVector from '@/src/assets/EmojiVector'
function SectionC() {
  return (
    <div className='grid sm:grid-cols-3 justify-items-center mt-20'>
        <div className='shadow-2xl max-h-[322px] px-32 pt-12 justify-center items-center flex flex-col'>
        <ScreenVector />
        <span className='my-8'>Intuitive interface</span>
        </div>
        <div className='shadow-2xl max-h-[322px] px-32 pt-12 justify-center items-center flex flex-col'>
            <WatchVector />
            <span className='text-center my-8'>Massive time savings for entire staff</span>
        </div>
        <div className='shadow-2xl max-h-[322px] px-32 pt-12 justify-center items-center flex flex-col'>
            <EmojiVector />
            <span className='my-8'>Easy to use</span>
        </div>
    </div>
  )
}

export default SectionC