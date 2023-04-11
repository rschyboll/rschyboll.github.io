import i18n from 'sveltekit-i18n';
import type { Config } from 'sveltekit-i18n';

const en = import.meta.glob('./en/**/*.json');
const de = import.meta.glob('./de/**/*.json');
const pl = import.meta.glob('./pl/**/*.json');

function globImportToConfig(glob: Record<string, () => Promise<any>>) {
	return Object.entries(glob).map(([key, loader]) => {
		const splitPath = key.split('/');

		if (splitPath[2] == 'routes') {
			splitPath.splice(2, 1);
		}

		const locale = splitPath[1];
		const path = `/${locale}` + '/' + splitPath.slice(2, splitPath.length).join('/').split('.')[0];
		if (splitPath[2] == 'common.json') {
			return {
				locale: locale,
				key: key,
				loader: async () => (await loader()).default
			};
		}

		return {
			locale: locale,
			key: key,
			loader: async () => (await loader()).default,
			routes: [path]
		};
	});
}

export const defaultLocale = 'en';

const config: Config = {
	fallbackLocale: defaultLocale,
	loaders: [...globImportToConfig(en), ...globImportToConfig(de), ...globImportToConfig(pl)]
};

export const { t, locale, locales, loading, loadTranslations } = new i18n(config);
