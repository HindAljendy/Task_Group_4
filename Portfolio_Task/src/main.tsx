import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './modules/routes/route.tsx'
import Sidebar from './modules/components/sidebar.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Sidebar/>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
