import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/Routes.tsx'
import { BrowserRouter as MainRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainRouter>
      <div className="container">
        <AppRoutes />
      </div>
    </MainRouter>
  </StrictMode>,
)
