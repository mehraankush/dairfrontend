import Image from 'next/image'

export const ReacentActivityDummy = () => {
  return (
    <div className='flex gap-5  p-2'>
    <div>
        <Image alt='bell' width={50} height={50} src='/dashboard/Bell.svg'/>
    </div>
    <div className='flex flex-column gap-2'>
        <div className='flex gap-3 text-sm font-semibold'>
            <p>11:20</p>
            <p>New User</p>
            <p>John Doe</p>
        </div>
        <p className='text-xs font-semibold text-black-alpha-90'>Add New Post «Second»</p>
        <div>
            <p className='text-xs gont-light'>
            You might remember the Dell computer commercials friends that they are about to get their new computer.
            </p>
        </div>
    </div>
</div>
  )
}
