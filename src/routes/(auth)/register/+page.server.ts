import { fail, redirect } from '@sveltejs/kit'
import type { Action } from './$types'
import { db } from '$lib/server/database'
import bcrypt from 'bcrypt'
import { registerSchema } from '$lib/zodSchemas'

const register: Action = async ({ request }) => {
	const formData = await request.formData()

	const result = registerSchema.safeParse(formData)

	//validate form
	if (!result.success)
		return fail(400, {
			data: Object.fromEntries(formData),
			errors: result.error.flatten().fieldErrors
		})
	const { email, username, password } = result.data

	//if ther is a user with the same name return name is already taken
	const existingEmail = await db.user.findUnique({ where: { email } })

	if (existingEmail)
		return fail(400, {
			errors: {
				email: 'This email has been registered as an account already.'
			}
		})

	//if success return add them to db and log them in
	try {
		await db.user.create({
			data: {
				email,
				username,
				passwordHash: await bcrypt.hash(password, 10)
			}
		})
	} catch (error) {
		console.log(error)
		return fail(500, { message: 'oops' })
	}
	redirect(303, '/login')
}

export const actions = { register }
