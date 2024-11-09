import axios from 'axios';

const API = axios.create({ baseURL: 'https://final-travel-app-backend.onrender.com/api' });

export const createTrip = (tripData) => API.post('/trips', tripData);
