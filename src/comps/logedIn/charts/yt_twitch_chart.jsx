import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const labels = ['01.05', '02.05','03.05', '04.05','05.05', '06.05','07.05', '08.05', '09.05', '10.05', '11.05', '12.05', '13.05', '14.05', ' '];

export const data = {
    labels,
    datasets: [
        {
            label: 'Twitch',
            data: [8, 14, 16, 10, 17, 11, 30, 21, 30, 48],
            borderColor: "violet",
            fill: false
        },
        {
            label: 'Youtube',
            data: [16, 17, 17, 19, 20, 27, 40, 29, 35, 20],
            borderColor: "red",
            fill: false
        },
    ],
    options: {
        legend: {
            labels: {
                fontColor: 'white'
            }
        }
    }
};

const TTV_YTLinechart = () => {
    return <Line options={options} data={data} />;
}

export default TTV_YTLinechart;