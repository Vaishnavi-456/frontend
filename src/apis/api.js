// src/api/api.js
import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api'; 


export const fetchTransactions = async (month, searchText, page, perPage) => {
  const response = await axios.get(`${BASE_URL}/transactions`, {
    params: { month, search: searchText, page, perPage },
  });
  return response.data;
};


export const fetchStatistics = async (month) => {
  const response = await axios.get(`${BASE_URL}/statistics`, { params: { month } });
  return response.data;
};


export const fetchBarChartData = async (month) => {
  const response = await axios.get(`${BASE_URL}/barchart`, { params: { month } });
  return response.data;
};


export const fetchPieChartData = async (month) => {
  const response = await axios.get(`${BASE_URL}/piechart`, { params: { month } });
  return response.data;
};
