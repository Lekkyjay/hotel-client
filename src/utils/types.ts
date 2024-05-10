export interface IUser {
  email: string
  password: string
  firstName: string
  LastName: string
}

export interface IRegisterFormData {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
}

export interface ILoginFormData {
  email: string
  password: string
}