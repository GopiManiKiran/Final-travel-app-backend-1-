import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import { BrowserRouter, Routes, Route, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter({
  future: {
    v7_relativeSplatPath: true, // Opt-in to v7's relative splat path behavior
  },
});


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
