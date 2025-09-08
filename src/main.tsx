import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const Root = () => {
  useEffect(() => {
    window.addEventListener('load', () => {
      document.body.classList.add('page-loaded')
    })
    return () => {
      document.body.classList.add('page-loaded')
    }
  }, [])
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
