import { MicroPaymentApi, MonthlySubscriberApi, OverallAnalitics, RevenueChartApi, YearlySubscriberApi } from "@/services/api";

const fetchDataRevenue = async () => {
    try {
        const res = await RevenueChartApi();
        // console.log(res);
        const total = res?.Total;

        const yearArray = res?.GraphData.map((item: any) => item.Year);
        const revenueArray = res?.GraphData.map((item: any) => item.Revenue);

        const data = {
            labels: yearArray,
            datasets: [
                {
                    label: 'Revenue Chart',
                    backgroundColor: '#4238ff',
                    borderColor: '#4238ff',
                    data: revenueArray,
                }
            ]
        };

        const options = {
            layout: {
                padding: {
                    left: 20
                }
            },
            maintainAspectRatio: false,
            aspectRatio: 1,
            scales:{
                x:{
                    grid:{
                        drawOnChartArea:false
                    }
                },
                y:{
                    grid:{
                        drawOnChartArea:false
                    }
                },
            }
        };

        return { data, options, total };
    } catch (err) {
        console.log('Error fetching Revenue data :', err);
        // Handle the error if needed
        throw err;
    }
};

export { fetchDataRevenue };


const fetchDataAnalytics = async () => {
    try {
        const res = await OverallAnalitics();
        // console.log(res?.GraphData)
        const monthsArray = res?.GraphData.map((item: any) => item.Month);
        const usersArray = res?.GraphData.map((item: any) => item.Users);
        //  console.log(res?.Total)
        const total = res?.Total
        const data = {
            labels: monthsArray,
            datasets: [
                {
                    label: 'Overall Analytics',
                    backgroundColor: '#4238ff',
                    borderColor: '#4238ff',
                    data: usersArray
                }
            ]
        };

        const options = {
            layout:{
               padding:{
                left:5,
                right:5
               }
            },
            maintainAspectRatio: false,
            aspectRatio: 1,
            scales:{
                x:{
                    grid:{
                        drawOnChartArea:false
                    }
                },
                y:{
                    grid:{
                        drawOnChartArea:false
                    }
                },
            }
        };

        return { data, options, total };
    } catch (err) {
        console.log('Error fetching OverallAnalitics data:', err);
        // Handle the error if needed
        throw err;
    }
};

export { fetchDataAnalytics };

const fetchDataMicropayments = async () => {
    try {
        const res = await MicroPaymentApi();
        // console.log(res); 
        const TimeArray = res?.GraphData.map((item: any) => item.Time)
        const UsersArray = res?.GraphData.map((item: any) => item.User)
        const total = res?.Total

        const data = {
            labels: TimeArray,
            datasets: [
                {
                    label: 'Micropayments',
                    fill: false,
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
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'easeInOutQuad',
                    from: 1,
                    to: 0,
                    loop: true
                }
            },
            scales:{
                x:{
                    grid:{
                        drawOnChartArea:false
                    }
                },
                y:{
                    grid:{
                        drawOnChartArea:false
                    }
                },
            }
        };

        return { data, options, total };
    } catch (err) {
        console.log('Error fetching OverallAnalitics data:', err);
        // Handle the error if needed
        throw err;
    }
};

export { fetchDataMicropayments };

const fetchDataMonthlySubscriber = async () => {
    try {
        const res = await MonthlySubscriberApi();
            // console.log(res?.GraphData)
            const total = res?.Total

            const data = {
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                datasets: [
                    {
                        label: 'Monthly Subscriber',
                        backgroundColor:'#2563eb',
                        borderColor: '#2563eb',
                        data: res?.GraphData
                    }
                ]
            };

            const options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                scales:{
                    x:{
                        grid:{
                            drawOnChartArea:false
                        }
                    },
                    y:{
                        grid:{
                            drawOnChartArea:false
                        }
                    },
                }
            };

        return { data, options, total };
    } catch (err) {
        console.log('Error fetching OverallAnalitics data:', err);
        // Handle the error if needed
        throw err;
    }
};

export { fetchDataMonthlySubscriber };

const fetchDataYearlySubscriber = async () => {
    try {
        const res = await YearlySubscriberApi();
        // console.log(res?.GraphData)
        const total = res?.Total
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
            animations: {
                tension: {
                  duration: 1000,
                  easing: 'easeInOutQuad',
                  from: 1,
                  to: 0,
                  loop: true
                }
              },
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            scales:{
                x:{
                    grid:{
                        drawOnChartArea:false
                    }
                },
                y:{
                    grid:{
                        drawOnChartArea:false
                    }
                },
            }
        };
        return { data, options, total };
    } catch (err) {
        console.log('Error fetching OverallAnalitics data:', err);
        // Handle the error if needed
        throw err;
    }
};

export { fetchDataYearlySubscriber };
