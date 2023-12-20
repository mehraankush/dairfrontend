"use client"
import { UserLoginSuccess, logOut } from '@/services/auth';
import axios from 'axios';
import Image from 'next/image'
import { useEffect, useState } from 'react';

const User = () => {
    const [toggle, setToggle] = useState(false);
    const [user, setUser] = useState<any>()
    useEffect(() => {
        getUser
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
        <>
            <div>
                <Image alt='user' width={40} height={40} src={'/dashboard/user.png'} />
            </div>
            <div>
                <p className='text-xs font-medium'>Welcome Back</p>
                <p className='text-sm font-semibold'>{user?.name}</p>
            </div>
            <div className='p-1 cursor-pointer' onClick={() => setToggle(!toggle)}>
                <i className='pi pi-angle-down'></i>
            </div>
            <div className={`bg-white border-1 mt-5 right-0 mr-5 p-3 border-round-md  ${toggle && user ? 'absolute' : 'hidden'}`}>
                <p className='text-red-600 cursor-pointer' onClick={logOut}>LogOut</p>
            </div>
        </>
    )
}

export default User