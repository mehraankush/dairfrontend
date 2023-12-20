"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import Image from 'next/image';
import { fetchDataMicropayments } from './Functions';

export default function CurvedGraph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('100k')

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data, options, total } = await fetchDataMicropayments();
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
                    <p className='font-semibold text-lg'>Micropayments</p>
                    <p className='mt-1 text-gray-400 font-semibold'>Revenue</p>
                    <p className='mt-1 text-blue-700 font-semibold'>${total}K</p>
                 </div>
                 <div>
                    <Image alt='Views' width={40} height={40} src='/dashboard/activeUsers.svg'/>
                 </div>
            </div>

            <div className="card">
                <Chart type="line" data={chartData} options={chartOptions} />
            </div>
        </div>
        )
}
