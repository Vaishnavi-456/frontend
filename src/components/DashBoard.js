
import React, { useState } from 'react';
import TransactionTable from './TransactionTable';
import BarChart from './BarChart'
import Statistics from './Statistics';
import '../styles/dashboard.css'

import PieChart from './PieChart'; 

const Dashboard = () => {
  const [month, setMonth] = useState('03'); // Default to March
  const [searchText, setSearchText] = useState('');

  return (
    <div className='dashboard-container'>
      <h1>Transaction Dashboard</h1>

      <div className='select-search-container'>

     
      <label htmlFor="month-select">Select Month:</label>
      <select 
        id="month-select" 
        value={month} 
        onChange={e => setMonth(e.target.value)}
      >
        <option value="01">January</option>
        <option value="02">February</option>
        <option value="03">March</option>
        <option value="04">April</option>
        <option value="05">May</option>
        <option value="06">June</option>
        <option value="07">July</option>
        <option value="08">August</option>
        <option value="09">September</option>
        <option value="10">October</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>

     
      <input 
        type="text" 
        placeholder="Search transactions..." 
        value={searchText} 
        onChange={e => setSearchText(e.target.value)} 
        style={{ marginTop: '10px'}}
      />
      </div>
     
      <Statistics month={month} />
      <TransactionTable month={month} searchText={searchText} />
       <BarChart month={month} />
      <PieChart month={month} /> 
    </div>
  );
};

export default Dashboard;
