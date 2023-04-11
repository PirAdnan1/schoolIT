import React from 'react'

// components
import AccountData from '@/src/components/admin/Account'
import Layout from '@/src/layout/dashboard'

Account.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
  };
function Account() {
  return (
    <div>
        <AccountData />
    </div>
  )
}

export default Account