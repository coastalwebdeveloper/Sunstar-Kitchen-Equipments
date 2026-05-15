import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles.css'

// Import all pages
import HomePage from './routes/index'
import AboutPage from './routes/about'
import ServicesPage from './routes/services'
import ProjectsPage from './routes/projects'
import ClientsPage from './routes/clients'
import ReviewsPage from './routes/reviews'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)