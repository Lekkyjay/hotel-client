import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import { useAppSelector } from './redux/hooks'
import Layout from './components/Layout'
import Register from './pages/Register'
import Login from './pages/Login'
import AddHotel from './pages/AddHotel'
import MyHotels from './pages/MyHotels'

function App() {
  const auth = useAppSelector((state) => state.auth)
  const { isAuth } = auth  
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><p>Home Page</p></Layout>} />
        <Route path="/search" element={<>Search Page</>} />
        <Route path="/register" element={<Layout><Register /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        {isAuth && (
          <>
            <Route path="/hotel/:hotelId/booking" element={<Layout><Login /></Layout>} />
            <Route path="/add-hotel" element={<Layout><AddHotel /></Layout>} />
            <Route path="/edit-hotel/:hotelId" element={<Layout><Login /></Layout>} />
            <Route path="/my-hotels" element={<Layout><MyHotels /></Layout>} />
            <Route path="/my-bookings" element={<Layout><Login /></Layout>} />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
