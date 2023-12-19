"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { RevenueChartApi } from '@/services/api';

export default function RevenueChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('132k')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const documentStyle = getComputedStyle(document.documentElement);
                const res = await RevenueChartApi();
                // console.log(res);
                setTotal(res?.Total)

                const YearArray = res?.GraphData.map((item:any) => item.Year);
                const RevenueArray = res?.GraphData.map((item:any) => item.Revenue);

                const data = {
                    labels: YearArray,
                    datasets: [
                        {
                            label: 'Revenue Chart',
                            backgroundColor: documentStyle.getPropertyValue('--indigo-600'),
                            borderColor: documentStyle.getPropertyValue('--indigo-600'),
                            data: RevenueArray
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

        fetchData();
    }, []);
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
        