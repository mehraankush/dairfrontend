import LoginMain from '@/components/LoginPageComponents/LoginMain'


import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Dair-Signin'
}

const page = () => {
  return (
    <div>
      <LoginMain/>
    </div>
  )
}

export default page