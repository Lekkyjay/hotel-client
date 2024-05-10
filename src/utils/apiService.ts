import { ILoginFormData, IRegisterFormData } from './types'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || ""

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


export { registerUser, loginUser, validateToken, logout }
