import z from 'zod'
import { zfd } from 'zod-form-data'

export const registerSchema = zfd.formData({
	email: zfd.text(
		z
			.string({ required_error: 'Email is required.' })
			.email('Please provide a valid email address.')
			.endsWith('gmail.com', 'Please enter an email address ending with @gmail.com.')
			.transform((s) => s.toLowerCase())
	),
	username: zfd.text(
		z
			.string({ required_error: 'Username is required.' })
			.min(4, 'Username must have at least 4 characters.')
			.max(32, 'Username must be 32 characters or less.')
	),
	password: zfd.text(
		z.string({ required_error: 'Please enter a password.' })
		//TODO uncomment this, commented it out for easier testing
		// .regex(
		// 	/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{3,}$/,
		// 	'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number.'
		// )
	)
})

export const loginSchema = zfd.formData({
	email: zfd.text(
		z
			.string({ required_error: 'Please enter your email' })
			.email('Please provide a valid email address.')
			.transform((s) => s.toLowerCase())
	),
	password: zfd.text(z.string({ required_error: 'Please enter your password.' }))
})
