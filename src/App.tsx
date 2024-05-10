import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Register from './pages/Register'
import Login from './pages/Login'

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
        <Route path="/search" element={<>Search Page</>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
