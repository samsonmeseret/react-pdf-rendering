import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import pdf from "../public/html_tutorial.pdf"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App  pdfUrl={pdf}/>
  </React.StrictMode>,
)
