import React from 'react'

// components
import Main from "@/src/components/admin/Index"
import Layout from '@/src/layout/dashboard'

Home.getLayout = function getLayout(page){
    return(
        <Layout>{page}</Layout>
    )
}
function Home() {
  return (
    <div className='h-screen'>
      <Main />
    </div>
  )
}

export default Home