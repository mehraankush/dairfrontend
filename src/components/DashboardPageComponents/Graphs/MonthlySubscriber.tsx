"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import Image from 'next/image';
import { fetchDataMonthlySubscriber } from './Functions';

export default function MonthlySubscriber() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('100')


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data, options, total } = await fetchDataMonthlySubscriber();
            setTotal(total)
            setChartData(data);
            setChartOptions(options);
        } catch (err) {
            console.log('Error fetching OverallAnalitics data:', err);
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
