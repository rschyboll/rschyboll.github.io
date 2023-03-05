<script lang="ts">
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
	<!-- TODO add theme-color meta element -->
</svelte:head>

<menu class:expanded>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/settings">Settings</a>
	</nav>
</menu>

<div class="page">
	<slot />
	<button on:click={setSystemTheme}>System</button>
	<button on:click={setDarkTheme}>Dark</button>
	<button on:click={setLightTheme}>Light</button>
</div>

<style>
	menu {
		position: fixed;
		display: flex;
		height: 100vh;
		width: 15rem;
		margin: 0;
		padding: 0;
		background-color: var(--color-lightest);
	}

	.page {
		margin-left: 15rem;
	}
</style>
