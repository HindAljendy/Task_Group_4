import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Sidebar from './modules/portfolio/components/sidebar.tsx'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sidebar/>
    <App/>
  </React.StrictMode>,
)
