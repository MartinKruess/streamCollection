import React, { Component } from "react";
import { Line } from  "react-chartjs-2"

const data = {
    labels: ["Twitch", "Youtube"],
    datasets: [{
        data: [3, 12]
    }]
}

export const DashboardChart = () => {
    return (
        <canvas id="lineChart">
            <Line data={data}/>
        </canvas>
    )
}