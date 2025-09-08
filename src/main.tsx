import React, { useEffect } from 'react'
import { initAllEffects } from './utils/effects'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const Root = () => {
  useEffect(() => {
    const cleanup = initAllEffects()
    return cleanup
  }, [])
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<Root />)
