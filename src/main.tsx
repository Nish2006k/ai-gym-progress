import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const Root = () => {
  useEffect(() => {
    // Ensure body becomes visible even if load already fired
    document.body.classList.add('page-loaded')
    const onLoad = () => document.body.classList.add('page-loaded')
    window.addEventListener('load', onLoad)
    return () => window.removeEventListener('load', onLoad)
  }, [])
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
