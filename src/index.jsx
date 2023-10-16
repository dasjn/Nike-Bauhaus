import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/fonts.css'
import './styles/style.css'
import './styles/landing.css'
import './styles/shop.css'
import './styles/mobile.css'
import App from './App.jsx'
import { IsMobileProvider } from './IsMobileContext'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <React.StrictMode>
        <IsMobileProvider>
            <App />
        </IsMobileProvider>
    </React.StrictMode>
)