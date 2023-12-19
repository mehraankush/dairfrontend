"use client"
import SideBar from "@/components/DashboardPageComponents/SideBar";
import { usePathname } from "next/navigation";


const DashboardLayout = ({children}:{children:React.ReactNode})=>{
    const pathname = usePathname();
    const parts = pathname.split('/')
    const id = parts[3];
     return (
      <div className="h-full relative overflow-y-hidden">
         <div className="flex h-screen">
            <div className={`hidden h-full md:flex md:inset-y-0 bg-gray-900 ${pathname === `/challenge/attempt/${id}`?'':'md:w-80'}`}>
               <SideBar/>
            </div>
          <main className={` bg-black h-screen w-screen ${pathname === `/dashboard/${id}`?'md:pl-20':'md:pl-0'}`}>
             {children}
          </main>
         </div>

      </div>
     )
}

export default DashboardLayout;