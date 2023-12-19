'use client'
import Link from 'next/link'
import { Button } from 'primereact/button'
import Cookies from 'js-cookie'

export const HomePage = () => {

    const user = Cookies.get('token')
  return (
    <div>
         {user ? (
        <Link href="/dashboard">
            <Button label="Dashboard" icon="pi pi-check" className="p-4 gap-2" />
        </Link>
      ) : (
        <Link href="/login">
            <Button label="Login" icon="pi pi-check" className="p-4 gap-2" />
        </Link>
      )}
    </div>
  )
}
