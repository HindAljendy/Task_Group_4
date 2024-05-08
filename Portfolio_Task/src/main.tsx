import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
<<<<<<< HEAD
import Sidebar from './modules/portfolio/components/sidebar.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sidebar/>
    <App/>
=======
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import "bootstrap/dist/css/bootstrap.min.css";



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
>>>>>>> 1c99ef06b5c570141fc8b7646136ea5775989d61
  </React.StrictMode>,
)
