import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { logout } from '../utils/apiService'
import { useAppDispatch } from '../redux/hooks'
import { unauthenticateUser } from '../redux/authSlice'

export default function SignOutButton() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleClick = async () => {
    const response = await logout()
    if (response.success) {
      dispatch(unauthenticateUser())
      localStorage.removeItem('isAuth')
      toast.success(response.message)
      return navigate('/')
    }
    toast.error(response.message)
  }

  return (
    <button onClick={handleClick} className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100">
      Sign Out
    </button>
  )
}