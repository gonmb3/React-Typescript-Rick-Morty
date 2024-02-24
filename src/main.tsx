import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeConfig } from './config/theme.config.tsx'
import { NotificationProvider } from './context/NotificationContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(

     <React.StrictMode>
        <NotificationProvider>
    <ThemeConfig>
          <App />
    </ThemeConfig>
    </NotificationProvider>
  </React.StrictMode>

 
)
