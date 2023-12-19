"use client"
import Image from 'next/image';
import Link from 'next/link';
import Cookies from 'js-cookie'

import LoginButtons from './LoginButtons';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';



const LoginForm = () => {
  const router = useRouter();

 useEffect(() => {
  getCookies();
 }, [])

 const getCookies = () =>{
   const token =  Cookies.get('token')
   console.log(token)
   if(token){
     router.push('/dashboard')
   }
 }
 

  return (
    <div className="bg-white h-full">
      <div className="w-10/12 max-w-[500px] border-3 h-full">
        <div className="border-3 flex justify-content-center align-items-center flex-column ">
          <Link href='/' className='mt-5 ml-[-1rem]'>
            <Image
              src="/logo.png"
              alt="Dair Logo"
              width={180}
              height={150}
              quality={100}
              className="border-2"
            />
          </Link>
          <div className="mt-2">
            <p className="text-black-alpha-90 ml-2">
              Enter your username and password
            </p>
          </div>
        </div>
        <div className="border-3">
             <LoginButtons />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
