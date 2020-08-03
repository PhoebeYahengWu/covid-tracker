import React, { useState, useEffect } from 'react'
import { fetchDailyData } from '../../API'
import { Line } from 'react-chartjs-2'

function Chart() {
    const { dailyData, setDailyData } = useState({})

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }

        fetchAPI();
    })

    const lineChart = ( 
        dailyData[0]
        ? (
        <Line
        data={{
            labels: '',
            datasets: [{}, {}],
        }}
        />) : null
    );

    return (
        <div>
            
        </div>
    )
}

export default Chart;