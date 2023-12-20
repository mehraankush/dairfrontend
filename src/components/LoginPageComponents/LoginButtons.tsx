"use client"

import { Button } from 'primereact/button';
import { BsGithub } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc'
import { InputText } from 'primereact/inputtext';
import { useRef, useState } from 'react';
import { MagicLinkRequestApi, handleGithubLogin, handleGoogleLogin } from "@/services/auth";
import { Toast } from 'primereact/toast';

const LoginButtons = () => {
    const [email, setEmail] = useState('');
    const toast = useRef<Toast>(null);

    const show = () => {
        toast.current?.show({ severity: 'info', summary: 'Message', detail: 'Check your email for authentication and get ready to unlock the magic! 🌟✨'});
    };

    const handleLogin = async (e:any) => {
        e.preventDefault()
        try {
            const res = await MagicLinkRequestApi(email)
            if (res) {
                show();
            }
            console.log(res);
            setEmail('')
        } catch (err) {
            console.log("Error in making Magliclink Login Request")
        }
    }

    const isEmailValid = email.trim() !== '';
    return (
        <form className="w-full flex flex-column gap-5 p-8">
            <div className="flex mt-9 justify-center">
                <div className="flex flex-column gap-3 w-full">
                    {/* Github SignIn */}
                    <Button className="flex items-center gap-2 p-2" onClick={handleGithubLogin}>
                        <BsGithub size="23px" />
                        <p className="text-sm">Sign In With Github</p>
                    </Button>
                    {/* Google SignIn */}
                    <Button className="flex items-center gap-2 p-2" onClick={handleGoogleLogin}>
                        <span className="inline-block">
                            <FcGoogle size="23px" />
                        </span>
                        <p className="text-sm">Sign In With Google</p>
                    </Button>
                </div>
            </div>

            <div className='flex flex-column gap-3'>
                <span className="p-float-label">
                    <InputText id="email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} className="p-3 border-noround border-bottom-3 loginInput" />
                    <label htmlFor="username" className="text-black">Username</label>
                </span>
            </div>

            <Button label='Log in' className="p-2" onClick={handleLogin} disabled={!isEmailValid} />
            <Toast ref={toast} position='top-center'/>
        </form>
    )
}

export default LoginButtons