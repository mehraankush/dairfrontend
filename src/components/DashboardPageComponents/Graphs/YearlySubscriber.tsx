"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { YearlySubscriberApi } from '@/services/api';
import Image from 'next/image';

export default function YearlySubscriber() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('100')


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await YearlySubscriberApi();
            // console.log(res?.GraphData)
            setTotal(res?.Total)
            const simplifiedGraphData = res?.GraphData.map((entry: any) => ({
                Year: parseInt(entry.Date.split('-')[2]),
                Subscribers: entry.Subscribers
            }));

            const yearsArray = simplifiedGraphData.map((entry: any) => entry.Year);
            const subscribersArray = simplifiedGraphData.map((entry: any) => entry.Subscribers);

            //   console.log(simplifiedGraphData)

            const data = {
                labels: yearsArray,
                datasets: [
                    {
                        label: 'Yearly Subscriber',
                        backgroundColor: '#64748b',
                        borderColor: '#64748b',
                        data: subscribersArray
                    }
                ]
            };

            const options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
            };

            setChartData(data);
            setChartOptions(options);
        } catch (err) {
            console.log('Error fetching data:', err);
        }
    };

    return (
        <div className='bg-white text-black-alpha-90 p-2'>
            <div className='flex justify-content-between gap-5'>
                <div className='flex flex-column'>
                    <p className='font-semibold text-lg'>Yearhly Subscriber</p>
                    <p className='mt-1 text-gray-400 font-semibold'>Revenue</p>
                    <p className='mt-1 text-blue-700 font-semibold'>${total}K</p>
                </div>
                <div className='flex'>
                    <div>
                        <div className=' flex gap-2 px-2 shadow-1 p-1 border-round-sm mr-2 mt-2'>
                            <p className='text-sm font-medium'>2020-2021</p>
                            <Image alt='calender' width={20} height={20} src='/dashboard/calendar.svg' />
                        </div>
                    </div>
                    <Image alt='Views' width={40} height={40} src='/dashboard/activeUsers.svg' />
                </div>
            </div>
            <div className="card">
                <Chart type="line" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}
