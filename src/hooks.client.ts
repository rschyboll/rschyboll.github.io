// eslint-disable-next-line import/extensions
import type { Handle } from '@sveltejs/kit';
import { defaultLocale, locales } from '$lib/translations';

const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);

export function handleError() {
	console.log('ERROR HANDLE');
}

export const handle: Handle = async ({ event, resolve }) => {
	console.log('HANDLE');
	const { url, request } = event;
	const { pathname } = url;
	console.log(pathname);

	// If this request is a route request
	if (routeRegex.test(pathname)) {
		// Get defined locales
		const supportedLocales = locales.get();

		// Try to get locale from `pathname`.
		let locale = supportedLocales.find(
			(l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase()
		);

		// If route locale is not supported
		if (!locale) {
			// Get user preferred locale
			locale = `${`${request.headers.get('accept-language')}`.match(
				/[a-zA-Z]+?(?=-|_|,|;)/
			)}`.toLowerCase();
			console.log(locale);

			// Set default locale if user preferred locale does not match
			if (!supportedLocales.includes(locale)) locale = defaultLocale;

			// 301 redirect
			return new Response(undefined, {
				headers: { location: `/${locale}${pathname}` },
				status: 301
			});
		}

		// Add html `lang` attribute
		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`)
		});
	}

	return resolve(event);
};
