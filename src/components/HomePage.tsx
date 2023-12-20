'use client'
import Link from 'next/link'
import { Button } from 'primereact/button'
import TypewriterComponent from 'typewriter-effect'

export const HomePage = () => {

  return (
    <div className='flex flex-column w-8 justify-content-center align-items-center'>

      <div className="text-4xl  flex w-9 mb-6">
        <h1 className='text-blue-600 mr-3'>Sorry</h1>
        <div className="text-blue-600 text-6xl font-bold mt-3">
          <TypewriterComponent
            options={{
              strings: [
                "For the......",
                "light theme..👉👈",

              ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <div>
        <Link href="/login">
          <Button label="Login" icon="pi pi-check" className="p-4 gap-2" />
        </Link>
      </div>
    </div>
  )
}
