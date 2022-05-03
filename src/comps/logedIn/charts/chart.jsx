import React, { Component } from "react";
import { Doughnut } from  "react-chartjs-2"

const data = {
    labels: ["Twitch", "Youtube"],
    datasets: [{
        data: [3, 12, 7]
    }]
}

export const DashboardChart = () => {
    return (
        <canvas id="lineChart">
            <Doughnut data={data}/>
        </canvas>
    )
}