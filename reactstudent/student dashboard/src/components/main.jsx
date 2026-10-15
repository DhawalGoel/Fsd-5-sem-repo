import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import Student from './component/Student.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Student />
  </StrictMode>,
)