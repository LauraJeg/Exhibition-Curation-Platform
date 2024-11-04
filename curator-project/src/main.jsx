import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";

import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Exhibition from './Components/Pages/Exhibition';
import About from './Components/Pages/About';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />

  </BrowserRouter>
)
