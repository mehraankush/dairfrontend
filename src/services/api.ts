import axios from 'axios'
const URL = process.env.NEXT_PUBLIC_API_LINK


export const OverallAnalitics = async() => {
   try{
      const res =  await axios.get(`${URL}`);
      return res?.data?.Overall_Analytics
   }catch(err:any){
    console.log('Error in Making OverallAnalitics Request')
    return err?.message
   }
}
export const RevenueChartApi = async() => {
   try{
      const res =  await axios.get(`${URL}`);
      return res?.data?.RevenueGraph
   }catch(err:any){
    console.log('Error in Making OverallAnalitics Request')
    return err?.message
   }
}
export const MicroPaymentApi = async() => {
   try{
      const res =  await axios.get(`${URL}`);
      return res?.data?.Micro_Payment
   }catch(err:any){
    console.log('Error in Making OverallAnalitics Request')
    return err?.message
   }
}
export const MonthlySubscriberApi = async() => {
   try{
      const res =  await axios.get(`${URL}`);
      return res?.data?.Monthly_Subscriber
   }catch(err:any){
    console.log('Error in Making OverallAnalitics Request')
    return err?.message
   }
}
export const YearlySubscriberApi = async() => {
   try{
      const res =  await axios.get(`${URL}`);
      return res?.data?.yearly_Subscriber
   }catch(err:any){
    console.log('Error in Making OverallAnalitics Request')
    return err?.message
   }
}
export const ArticleTableApi = async() => {
   try{
      const res =  await axios.get(`${URL}`);
      return res?.data?.ArticleTable
   }catch(err:any){
    console.log('Error in Making OverallAnalitics Request')
    return err?.message
   }
}