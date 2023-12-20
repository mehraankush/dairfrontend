"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { fetchDataRevenue } from './Functions';

export default function RevenueChart() {

    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('132k')

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const { data, options, total } = await fetchDataRevenue();
            setTotal(total)
            setChartData(data);
            setChartOptions(options);
        } catch (err) {
            console.log('Error fetching Revenue data:', err);
        }
    };


    return (
        <div className='bg-white text-black-alpha-70 p-2'>
            <div>
                <p className='font-semibold text-lg'>Revenue Chart</p>
                <p className='mt-2 text-blue-700 font-semibold'>{total}K</p>
            </div>

            <div className='flex justify-content-between bg-pink-100  border-round-sm mt-1 px-3'>
                <p className='text-xs font-semibold border-bottom-1 border-blue-700 p-2'>Revenue chart by year</p>
                <p className='text-xs font-semibold p-1 mt-1'>Revenue chart by Month</p>
            </div>

            <div className="card mt-2">
                <Chart type="bar" data={chartData} options={chartOptions} />
            </div>
        </div>
    )
}
