"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { MonthlySubscriberApi, OverallAnalitics } from '@/services/api';
import Image from 'next/image';

export default function MonthlySubscriber() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('100')

    const documentStyle = getComputedStyle(document.documentElement);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const res = await MonthlySubscriberApi();
            // console.log(res?.GraphData)
            setTotal(res?.Total)

            const data = {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [
                    {
                        label: 'Monthly Subscriber',
                        backgroundColor: documentStyle.getPropertyValue('--blue-600'),
                        borderColor: documentStyle.getPropertyValue('--blue-600'),
                        data: res?.GraphData
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
        <div className='bg-white text-black-alpha-70 p-2'>
            <div className='flex justify-content-between gap-5'>
                <div className='flex flex-column'>
                    <p className='font-semibold text-lg'>Monthly Subscriber</p>
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
                <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}
