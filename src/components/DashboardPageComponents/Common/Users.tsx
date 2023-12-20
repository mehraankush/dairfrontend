import Image from 'next/image'
import React from 'react'

type UserDataProps = {
    Img: string;
    name: string;
    description: string;
    email: string;
  };

  
export const Users = ({Img,name,description,email}:UserDataProps) => {
  return (
    <div className='flex justify-content-between p-2 px-4 mt-2'>
              <div className='flex gap-3 mr-4'>
                <div>
                    <Image alt='user' width={40} height={40} src={Img} className='border-rounded-xl'/>
                </div>
                <div>
                    <p className='font-semibold text-sm'>{name}</p>
                    <p className='text-xs'>{description}</p>
                </div>
              </div>

              <div>
                    <Image alt='user' width={40} height={40} src={email}/>
              </div>
        </div>
  )
}
