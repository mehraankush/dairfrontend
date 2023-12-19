import React from 'react'
import USerTable from './Graphs/UserTable'
import { RecentActivity } from './RecentActivity'

export const ThirdSection = () => {
  return (
    <div className='flex mt-5 gap-4'>
         <USerTable/>
        <RecentActivity/>
    </div>
  )
}
