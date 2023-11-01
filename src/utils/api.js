// utils/api.js

import axios from 'axios';

const API_BASE = 'https://api.quicksell.co/v1/internal/frontend-assignment';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(`${API_BASE}/columns`);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
