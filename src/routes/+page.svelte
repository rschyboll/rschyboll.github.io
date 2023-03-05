<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import { Theme } from '$lib/enums';

	let name = 'Svelte';
	onMount(() => {
		console.log(name);
	});
</script>

{#if false}
	<div />
{/if}
