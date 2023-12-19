"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { OverallAnalitics } from '@/services/api';

export default function VerticalBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('')

    const documentStyle = getComputedStyle(document.documentElement);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await OverallAnalitics();
            // console.log(res?.GraphData)
            const monthsArray = res?.GraphData.map((item:any) => item.Month);
            const usersArray = res?.GraphData.map((item:any) => item.Users);
            //  console.log(res?.Total)
             setTotal(res?.Total)
            const data = {
                labels: monthsArray,
                datasets: [
                    {
                        label: 'Overall Analytics',
                        backgroundColor: documentStyle.getPropertyValue('--indigo-600'),
                        borderColor: documentStyle.getPropertyValue('--indigo-600'),
                        data: usersArray
                    }
                ]
            };

            const options = {
                maintainAspectRatio: false,
                aspectRatio: 1,
            };

            setChartData(data);
            setChartOptions(options);
        } catch (err) {
            console.log('Error fetching data:', err);
        }
    };

    return (
    <div className='bg-white text-black-alpha-70  p-2'>
        <div>
            <p className='font-semibold text-lg'>Overall Analytics</p>
            <p className='mt-2 text-blue-700 font-semibold'>{total}K</p>
        </div>
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>

        <div className='flex justify-content-between gap-5 font-medium'>
           <div className='p-3 border-round-xl bg-pink-100'>
            <p className='text-xs text-indigo-600'>Number of stories published</p>
           </div>
           <div className='p-3 border-round-xl'>
            <p className='text-xs'>Number of stories published</p>
           </div>
           <div className='p-3 border-round-xl'>
            <p className='text-xs'>Number of stories published</p>
           </div>
           <div className='p-3 border-round-xl'>
            <p className='text-xs'>Number of stories published</p>
           </div>
        </div>

    </div>
    )
}
