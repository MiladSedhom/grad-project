import { lucia } from '$lib/server/auth';
import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies, locals }) => {
	if (locals.session) await lucia.invalidateSession(locals.session.id);
	const blankCookies = lucia.createBlankSessionCookie();

	// eat the cookie
	cookies.set(blankCookies.name, blankCookies.value, {
		path: '/',
		...blankCookies.attributes
	});

	// redirect the user
	redirect(302, '/login');
};
