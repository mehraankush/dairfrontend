import DashboardNavbar from '@/components/DashboardPageComponents/DashboardNavbar'
import { FirstGraphContainer } from '@/components/DashboardPageComponents/FirstGraphContainer'
import { ForthSection } from '@/components/DashboardPageComponents/ForthSection'
import { Insides } from '@/components/DashboardPageComponents/Insides'
import { SecondGraphContainer } from '@/components/DashboardPageComponents/SecondGrapgContainer'
import { ThirdSection } from '@/components/DashboardPageComponents/ThirdSection'
import { UserWelcome } from '@/components/DashboardPageComponents/UserWelcome'

import React from 'react'

const Page = () => {
  return (
    <div className=' h-full overflow-y-auto bg-white'>
        <div className='px-4 mt-2'>
           <DashboardNavbar/>
           <UserWelcome/>
           <Insides/>
           <FirstGraphContainer/>
           <SecondGraphContainer/>
           <ThirdSection/>
           <ForthSection/>
      </div>
    </div>
  )
}

export default Page