import { ILoginFormData, IRegisterFormData } from './types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ''

const registerUser = async (registerFormData: IRegisterFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(registerFormData)
  })
  const data = await response.json()
  return data
}

const loginUser = async (loginFormData: ILoginFormData) => {
  const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(loginFormData)
  })
  const data = await response.json()
  return data
}

const validateToken = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
    credentials: 'include',
  })

  const data = await response.json()
  return data.success
}

const logout = async () => {
  const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  })

  const data = await response.json()
  return data
}

const addMyHotel = async (hotelFormData: FormData) => {
  const response = await fetch(`${API_BASE_URL}/api/myhotel`, {
    method: 'POST',
    credentials: 'include',
    body: hotelFormData,
  })

  if (!response.ok) {
    throw new Error('Failed to add hotel')
  }

  return response.json()
}

const fetchMyHotels = async () => {
  const response = await fetch(`${API_BASE_URL}/api/myhotel`, {
    method: 'GET',
    credentials: 'include'
  })

  if (!response.ok) {
    throw new Error('Failed to fetch my hotels')
  }

  return response.json()
}

export { registerUser, loginUser, validateToken, logout, addMyHotel, fetchMyHotels }
