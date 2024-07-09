import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthPovider from './provider/AuthPovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthPovider>
    <RouterProvider router={router}></RouterProvider>
    </AuthPovider>
  </React.StrictMode>,
)
