// frontend/App.js
import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import HotelLinks from './components/HotelLinks';

// Create a router configuration with the v7_relativeSplatPath flag
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/bookings',
    element: <HotelLinks destination="Your Destination" />,
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
});

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
