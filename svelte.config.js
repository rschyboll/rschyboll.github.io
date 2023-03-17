import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import { readdirSync } from 'fs';

const getDirectories = (source) =>
	readdirSync(source, { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

const locales = getDirectories('./src/lib/translations');

const config = {
	preprocess: vitePreprocess(),
	kit: {
		alias: {
			$components: 'src/lib/components'
		},
		adapter: adapter(),
		prerender: {
			entries: locales.reduce((acc, locale) => [...acc, `/${locale}`], ['*'])
		}
	}
};

export default config;
