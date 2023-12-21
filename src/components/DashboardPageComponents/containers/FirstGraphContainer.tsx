import VerticalBarDemo from '@/components/DashboardPageComponents/Graphs/Graph'
import RevenueChart from '../Graphs/RevenueChart'

 const FirstGraphContainer = () => {
  return (
    <div className='flex border-3 gap-5 mt-5'>
        <div className='border-3 w-8'>
         <VerticalBarDemo/>
        </div>

        <div className='border-3 w-4'>
         <RevenueChart/>
        </div>
    </div>
  )
}
export default FirstGraphContainer
