import Image from 'next/image';
import User from './User';

const DashboardNavbar = () => {

    return (
        <div className='flex justify-content-between'>

            <div>
                <span className=" border-round-2xl px-3">
                    <i className='pi pi-search ' style={{ color: '#B2BEB5' }}></i>
                    <input type='text' placeholder='Search' className='p-2 bg-transparent border-none outline-none text-500' />
                </span>
            </div>


            <div className='flex text-black-alpha-90'>
                <div className='flex justify-content-center align-items-center mr-3 '>
                    <div className='flex  border-round-lg p-2 border-1 border-blue-200'>

                        <div>
                            <div className=' flex gap-2 px-2'>
                                <p className='text-sm font-medium'>11-10-2022</p>
                                <Image alt='calender' width={20} height={20} src='/dashboard/calendar.svg' />
                            </div>
                        </div>
                        <p className='font-semibold'>OR</p>
                        <div>
                            <div className='flex gap-2 px-2'>
                                <p className='text-sm font-medium'>11-10-2022</p>
                                <Image alt='calender' width={20} height={20} src='/dashboard/calendar.svg' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='flex gap-1 p-2 text-black-alpha-90 shadow-1 border-round-lg'>
                    <User />
                </div>
            </div>

        </div>
    )
}

export default DashboardNavbar