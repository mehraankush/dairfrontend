"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { MicroPaymentApi } from '@/services/api';
import Image from 'next/image';

export default function CurvedGraph() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [total, setTotal] = useState('100k')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const documentStyle = getComputedStyle(document.documentElement);
                const res = await MicroPaymentApi(); 
                // console.log(res); 
                const TimeArray = res?.GraphData.map((item:any) => item.Time)
                const UsersArray = res?.GraphData.map((item:any) => item.User)
                setTotal(res?.Total)

                const data = {
                    labels: TimeArray,
                    datasets: [
                        {
                            label: 'Micropayments',
                            fill: false,
                            borderColor: documentStyle.getPropertyValue('--blue-500'),
                            yAxisID: 'y',
                            tension: 0.4,
                            data: UsersArray
                        }
                    ]
                };

                const options = {
                    stacked: false,
                    maintainAspectRatio: false,
                    aspectRatio: 0.8,
                    // plugins: {
                    //     legend: {
                    //         labels: {
                    //             color: textColor
                    //         }
                    //     }
                    // },
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
