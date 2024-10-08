
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/table.css';

const TransactionTable = ({ month, searchText }) => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(10); // Items per page

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/transactions?page=${page}&perPage=${perPage}&month=${month}&search=${searchText}`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };
    
    fetchTransactions();
  }, [month, searchText, page, perPage]);

  return (
    <div>
      <table className='transactionTable'>
        <thead>
          <tr>
            <th>ID</th> 
            <th>Image</th> 
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Sold</th>
            <th>Date of Sale</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction._id}</td> 
              <td>
                <img 
                  src={transaction.image} 
                  alt={transaction.title} 
                  width="50" 
                  height="50" 
                  style={{ borderRadius: '5px' }} 
                />
              </td>
              <td>{transaction.title}</td>
              <td>{transaction.description}</td>
              <td>{transaction.price}</td>
              <td>{transaction.category}</td>
              <td>{transaction.sold ? 'Yes' : 'No'}</td>
              <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))}>Previous</button>
        <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      </div>
    </div>
  );
};

export default TransactionTable;
