import Joi from 'joi'

const registerValidationSchema = Joi.object({
  name: Joi.string().required().alphanum().min(3).max(30).label('Name'),
  email: Joi.string().email().required().label('Email'),
  password: Joi.string().required().min(6).label('Password'),
})

export { registerValidationSchema }
