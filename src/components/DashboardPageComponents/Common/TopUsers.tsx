import React from 'react'
import { Users } from './Users'
import { TopUsersData } from '../../../data/TopUsers'

export const TopUsers = () => {
  return (
    <div className='p-3 surface-200 text-black-alpha-70 border-round-lg'>
        <div className='flex justify-content-between p-2'>
             <p className='font-semibold text-lg'>Top user in last 30 days</p>
             <p className='font-medium text-sm text-blue-500 underline'>View All</p>
        </div>
        <div>
            {
                TopUsersData.map((user,i)=>(
                    <Users key={i} {...user}/>
                ))
            }
        </div>
        
    </div>
  )
}
