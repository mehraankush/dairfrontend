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
            const { data } = await axios.get(`${UserLoginSuccess}`, { withCredentials: true });
            setUser(data?.user);
            // console.log(data?.user)
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className='shadow-1  mt-2 border-round-xl p-3 px-5 bg-white text-black-alpha-70 back1 '>
            <h1 className='text-xl '>Welcome Back , {user?.name}</h1>
            <p className='text-xs'>Here is today’s report and performence</p>
        </div>
    )
}
