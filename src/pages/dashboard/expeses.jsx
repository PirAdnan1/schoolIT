import React from 'react'

import Layout from '@/src/layout/dashboard'
Expenses.getLayout = function getLayout(page){
    return(
        <Layout>{page}</Layout>
    )
}
function Expenses() {
  return (
    <div className='h-screen bg-[#F2EFEF]'>Expenses Page</div>
  )
}

export default Expenses