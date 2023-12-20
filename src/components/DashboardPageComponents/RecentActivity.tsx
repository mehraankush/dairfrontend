import Image from 'next/image'
import React from 'react'
import { ReacentActivityDummy } from './Common/ReacentActivityDummy'

export const RecentActivity = () => {
  return (
    <div className='w-full bg-white text-black-alpha-70'>
        <div className='flex justify-content-between p-2'>
            <p className='font-semibold text-lg'>Recent Activity</p>
            <p className='font-medium text-sm text-blue-500'>View All</p>
        </div>

        <div className='flex flex-column justify-content-evenly h-full p-2'>
            <ReacentActivityDummy/>
            <ReacentActivityDummy/>
            <ReacentActivityDummy/>
        </div>
    </div>
  )
}
