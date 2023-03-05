import { writable } from 'svelte/store';
import { Theme } from '$lib/enums';

export const theme = writable(Theme.system);
