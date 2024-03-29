import { fail, redirect } from '@sveltejs/kit'
import type { Action } from './$types'
import { lucia } from '$lib/server/auth'
import { db } from '$lib/server/database'
import bcrypt from 'bcrypt'
import { loginSchema } from '$lib/zodSchemas'

// to login a user
// 		get form data
// 		validate
// 		check credentials
// 		create session
// 		set a cookie

const login: Action = async ({ request, cookies }) => {
	const formData = await request.formData()
	const result = loginSchema.safeParse(formData)

	//validate form
	if (!result.success)
		return fail(400, {
			data: Object.fromEntries(formData),
			errors: result.error.flatten().fieldErrors
		})
	const { email, password } = result.data

	// if credentials is wrong
	const user = await db.user.findUnique({ where: { email } })
	if (!user) return fail(400, { credentials: true })

	if (user.passwordHash) {
		const userPassword = await bcrypt.compare(password, user.passwordHash)
		if (!userPassword) return fail(400, { credentials: true })
	}

	// generate new session and store it
	const session = await lucia.createSession(user.id, {})
	const sessionCookie = lucia.createSessionCookie(session.id)

	cookies.set(sessionCookie.name, sessionCookie.value, {
		path: '/',
		...sessionCookie.attributes
	})

	redirect(302, '/')
}

export const actions = { login }
