import React from 'react'

import Layout from '@/src/layout/dashboard'
Events.getLayout = function getLayout(page){
    return(
        <Layout>{page}</Layout>
    )
}
function Events() {
  return (
    <div className='h-screen bg-[#F2EFEF]'>Events Page</div>
  )
}

export default Events