<script lang="ts">
	import { Navbar } from '$components';

	import { Theme } from '$lib/enums';
	import { theme } from '$lib/stores';

	let expanded = false;

	function setSystemTheme() {
		theme.set(Theme.system);
	}

	function setDarkTheme() {
		theme.set(Theme.dark);
	}

	function setLightTheme() {
		theme.set(Theme.light);
	}
</script>

<svelte:head>
	<meta name="color-scheme" content={$theme == Theme.system ? 'dark light' : $theme} />
	<link rel="stylesheet" href={`/themes/${$theme}.css`} />
	<meta name="theme-color" content="var(--theme-color)" />
</svelte:head>

<header>
	<Navbar pages={['/about', '/projects']} />
</header>

<div class="page">
	<slot />
	<button on:click={setSystemTheme}>System</button>
	<button on:click={setDarkTheme}>Dark</button>
	<button on:click={setLightTheme}>Light</button>
</div>

<style>
	header {
		width: 100vw;
		padding: 50px 0px;
	}

	.page {
		margin-left: 15rem;
	}
</style>
