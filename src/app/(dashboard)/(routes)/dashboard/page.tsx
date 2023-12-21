import {
  DashboardNavbar,
  FirstGraphContainer,
  ForthSection, Insides,
  SecondGraphContainer,
  ThirdSection,
  UserWelcome
} from '@/components/DashboardPageComponents'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dair-Dashboard'
}
const Page = () => {
  return (
    <div className=' h-full overflow-y-auto bg-white'>
      <div className='px-4 mt-2'>
        <DashboardNavbar />
        <UserWelcome />
        <Insides />
        <FirstGraphContainer />
        <SecondGraphContainer />
        <ThirdSection />
        <ForthSection />
      </div>
    </div>
  )
}

export default Page