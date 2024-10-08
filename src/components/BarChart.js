import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, BarElement, Tooltip, Legend, LinearScale, CategoryScale } from 'chart.js';
import axios from 'axios';
import '../styles/charts.css'

Chart.register(BarElement, Tooltip, Legend, LinearScale, CategoryScale);

const BarChart = ({ month }) => {
  const [barData, setBarData] = useState({});
  
  useEffect(() => {
    const fetchBarChartData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/barchart?month=${month}`);
        setBarData(response.data);
      } catch (error) {
        console.error('Error fetching bar chart data:', error);
      }
    };
    fetchBarChartData();
  }, [month]);

  const data = {
    labels: Object.keys(barData),
    datasets: [{
      label: 'Number of Items',
      data: Object.values(barData),
      backgroundColor: 'rgba(75, 192, 192, 0.6)',
    }],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 20,
        },
      },
    },
  };

  return (
    <div className='chart'>
      <h3>Bar Chart for Month: {month}</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarChart;