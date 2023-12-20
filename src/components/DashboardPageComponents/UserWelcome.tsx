"use client"
import '@/Styles/Dashboard.scss'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { UserLoginSuccess } from '@/services/auth'

export const UserWelcome = () => {
    const [user, setUser] = useState<any>();

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        try {
            console.log('Dashboard user called')
            const { data } = await axios.get(`${UserLoginSuccess}`, { withCredentials: true });
            setUser(data?.user);
            // console.log(data?.user)
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='shadow-1  mt-2 border-round-xl p-3 px-5 bg-white text-black-alpha-70 flex back1 justify-content-between'>
            <div className='w-full'>
                <h1 className='text-xl '>Welcome Back , {user?.name}</h1>
                <p className='text-xs'>Here is today’s report and performence</p>
            </div>
            <div className='back2 w-full flex justify-content-between'>
                <div className='back2 w-full'></div>
                <div className='back3 w-full flex justify-content-between'>
                    <div className='back4 w-full'></div>
                    <div className='back5 w-full'></div>
                </div>
            </div>
        </div>
    )
}
