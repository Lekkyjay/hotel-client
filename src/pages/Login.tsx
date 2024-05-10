import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ILoginFormData } from '../utils/types'
import { loginUser } from '../utils/apiService'
import { useAppDispatch } from '../redux/hooks'
import { authenticateUser } from '../redux/authSlice'

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<ILoginFormData>()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit(async (data) => {
    const response = await loginUser(data)

    if (response.success) {
      dispatch(authenticateUser())
      localStorage.setItem('isAuth', 'true')
      toast.success(response.message)
      return navigate('/')
    }
    
    toast.error(response.message)
  })

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign In</h2>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        />
        {errors.email && (<span className="text-red-500">{errors.email.message}</span>)}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (<span className="text-red-500">{errors.password.message}</span>)}
      </label>
      <span className="flex items-center justify-between">
        <span className="text-sm">
          Not Registered?{" "}
          <Link className="underline" to="/register">Create an account here</Link>
        </span>
        <button type="submit" className="bg-blue-600 text-white p-2 font-bold hover:bg-blue-500 text-xl">Login</button>
      </span>
    </form>
  )
}