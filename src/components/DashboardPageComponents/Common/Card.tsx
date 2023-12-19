import Image from 'next/image'
import { CardProps } from '@/types'


export const Card = ({img,type,growth,time,count}:CardProps) => {
  // console.log('Type',type)
  return (
    <div className='shadow-1 flex gap-2 bg-white border-round-xl p-3'>
    <div className='flex flex-column gap-1'>
       <div>
           <Image alt='Image' width={40} height={40} src={img}/>
       </div>
       <p className='text-sm font-semibold text-black-alpha-70'>{type}</p>
       <p className='text-sm text-green-700'>{growth}<span className='text-gray-400 ml-2'>{time}</span></p>
    </div>
    <div>
       <p className='text-2xl font-bold mt-4 text-black-alpha-70'>{count}</p>
    </div>
</div>
  )
}
