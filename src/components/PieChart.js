import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';  
import axios from 'axios';
import '../styles/charts.css'

// Register the components
Chart.register(ArcElement, Tooltip, Legend);

const PieChart = ({ month }) => {
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    const fetchPieChartData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/piechart?month=${month}`);
        setPieData(response.data);
      } catch (error) {
        console.error('Error fetching pie chart data:', error);
      }
    };

    fetchPieChartData();
  }, [month]);

  const data = {
    labels: Object.keys(pieData),
    datasets: [{
      label: 'Items by Category',
      data: Object.values(pieData),
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
      ],
    }],
  };

  return (
    <div className='chart'>
      <h3>Pie Chart for Month: {month}</h3>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
