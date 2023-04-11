// eslint-disable-next-line import/extensions
import type { Handle } from '@sveltejs/kit';
import { defaultLocale, locales, locale } from '$lib/translations';

const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);

export const handle: Handle = async ({ event, resolve }) => {
	const { url } = event;
	const { pathname } = url;

	if (routeRegex.test(pathname)) {
		const supportedLocales = locales.get();

		const pathLocale = supportedLocales.find(
			(l) => l === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase()
		);
		if (pathLocale != null) {
			locale.set(pathLocale);
		} else {
			locale.set(defaultLocale);
		}

		return resolve(event, {
			transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`)
		});
	}

	return resolve(event);
};
