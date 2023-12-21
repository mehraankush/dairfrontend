import React from 'react'
import { Users } from '@/data/Cards'
import { Card } from './Common/Card'

const Insides = () => {
  return (
    <div className='flex gap-3 p-2 mt-2 justify-content-between'>
        {
            Users.map((user,i)=>(
                <Card key={i} {...user}/>
            ))
        }
    </div>
  )
}
export  default Insides