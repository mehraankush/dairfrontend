"use client"

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'

import SidebarBottom from "./SidebarBotom";
import { routes } from "../../data/routes";
import '@/Styles/Sidebar.scss'



const SideBar = () => {


    const pathname = usePathname();
    return (
        <div className="flex  flex-column h-full text-white bg-white justify-content-between">
            <div className="px-3 py-2">
                <Link href='/'>
                    <div className="flex justify-content-center mt-2">
                        <Image src='/logo.png'
                              width={200}
                              height={130}
                            alt="Dair Logo" />
                    </div>
                </Link>
                <div className="px-3 w-full mt-5">
                    {
                        routes.map((item) => (
                            <Link
                                href={item.href}
                                key={item.href}
                                className={`flex p-3 px-4 mt-1 cursor-pointer border-round-xl hover:bg-blue-800 hover:text-white
                                ${pathname === item.href ? 'text-white bg-blue-800' : 'text-black-alpha-90'}`}
                            >
                                <div className={`flex items-center gap-3 md:ml-3`}>
                                    <Image alt="Icons" width={20} height={20} src={item.icon} className="sideBarSvg"
                                    />
                                    <p className={`font-medium text-md `}>{item.lable}</p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

            <div>
                <SidebarBottom />
            </div>
        </div>
    )
}

export default SideBar;