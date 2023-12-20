"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { fetchDataAnalytics } from './Functions';

export default function VerticalBarDemo() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('')

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data, options, total } = await fetchDataAnalytics();
            setTotal(total)
            setChartData(data);
            setChartOptions(options);
        } catch (err) {
            console.log('Error fetching OverallAnalitics data:', err);
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
