import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {CssBaseline} from '@mui/material'
import {HelmetProvider} from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
    <Toaster />
    <CssBaseline />
    <div>
    <App />
    </div>
    </HelmetProvider>
  </React.StrictMode>,
)
// onContextMenu={e=>e.preventDefault()}