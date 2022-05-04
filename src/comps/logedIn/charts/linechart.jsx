import React, { Component } from "react";
import {Line} from "react-chartjs-2"

const Legend = ['Twitch','Youtube']

const xValues = ['01',200,300,400,500,600,700,800,900,1000];
const viewCounter = new Chart("viewCounter", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{ 
      data: [80,140,160,100,170,110,130,210,830,478],
      borderColor: "violet",
      fill: false
    }, { 
      data: [160,170,170,190,200,270,400,930,350,200],
      borderColor: "red",
      fill: false
    }]
  },
  options: {
    legend: Legend
  }
});


export const DashboardChart = () => {
    return (
        <canvas id="viewCounter" className="lineChart"></canvas>
    )
} 