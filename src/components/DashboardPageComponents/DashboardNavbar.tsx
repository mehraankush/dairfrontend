"use client"
import { UserLoginSuccess, logOut } from '@/services/auth';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const DashboardNavbar = () => {
   
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState<any>()
    useEffect(() => {
        getUser();
    }, [])
    const getUser = async () => {
        try {
            const { data } = await axios.get(`${UserLoginSuccess}`, { withCredentials: true });
            setUser(data?.user);
            // console.log(data?.user)
        } catch (err) {
            console.log(err);
        }
    };

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
                    <div className='flex shadow-1 border-round-lg p-2 border-1 border-blue-200'>

                        <div>
                            <div className=' flex gap-2 px-2'>
                                    <p className='text-sm font-medium'>11-10-2022</p>
                                    <Image alt='calender' width={20} height={20} src='/dashboard/calendar.svg'/>
                            </div>
                        </div>
                        <p className='font-semibold'>OR</p>
                        <div> 
                            <div className='flex gap-2 px-2'>
                                    <p className='text-sm font-medium'>11-10-2022</p>
                                    <Image alt='calender' width={20} height={20} src='/dashboard/calendar.svg'/>
                            </div>
                    </div>
                    </div>
                </div>

                <div className='flex gap-1 p-2 text-black-alpha-90 shadow-1 border-round-lg'>
                    <div>
                        <Image alt='user' width={40} height={40}  src={'/dashboard/user.png'} />
                    </div>
                    <div>
                        <p className='text-xs font-medium'>Welcome Back</p>
                        <p className='text-sm font-semibold'>{user?.name}</p>
                    </div>
                    <div className='p-1 cursor-pointer' onClick={()=>setToggle(!toggle)}>
                        <i className='pi pi-angle-down'></i>
                    </div>
                    <div className={`bg-white border-1 mt-5 right-0 mr-5 p-3 border-round-md  ${toggle ? 'absolute' : 'hidden'}`}>
                         <p className='text-red-600 cursor-pointer' onClick={logOut}>LogOut</p>
                    </div>
                </div>
             </div>


        </div>
    )
}

export default DashboardNavbar