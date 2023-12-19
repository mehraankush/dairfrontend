import CurvedGraph from './Graphs/CurvedGraph'
import MonthlySubscriber from './Graphs/MonthlySubscriber'
import YearlySubscriber from './Graphs/YearlySubscriber'

export const SecondGraphContainer = () => {
  return (
    <div className='flex flex-1 border-3 justify-content-between mt-5'>
        <div >
          <CurvedGraph/>
        </div>
        <div >
         <MonthlySubscriber/>
        </div>
        <div >
          <YearlySubscriber/>
        </div>
    </div>
  )
}
