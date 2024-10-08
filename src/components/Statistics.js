
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/statistics.css'

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({ totalSales: 0, soldItems: 0, notSoldItems: 0 });

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/statistics?month=${month}`);
        setStatistics(response.data);
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    fetchStatistics();
  }, [month]);

  return (
    <div className='statistics'>
      <h3>Statistics for Month: {month}</h3>
      <p>Total Sales: {statistics.totalSales}</p>
      <p>Total Sold Items: {statistics.soldItems}</p>
      <p>Total Not Sold Items: {statistics.notSoldItems}</p>
    </div>
  );
};

export default Statistics;
