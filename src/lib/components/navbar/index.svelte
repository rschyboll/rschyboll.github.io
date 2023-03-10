<script lang="ts">
	import Item from './item.svelte';
	import Underline from './underline.svelte';
	import { page } from '$app/stores';

	export let pages: { path: string; title: string; icon?: string }[];

	let links: Record<string, HTMLElement> = {};

	$: ({ width: underlineWidth, position: underlinePosition } = getLinkWidthAndPosition(
		links[$page.url.pathname]
	));

	function getLinkWidthAndPosition(link?: HTMLElement | null): {
		width: number | null;
		position: number | null;
	} {
		if (link == null) {
			return { width: null, position: null };
		}
		const boundingClientRect = link.getBoundingClientRect();
		return { width: boundingClientRect.width, position: boundingClientRect.left };
	}
</script>

<nav>
	<a href="/">TEST</a>
	<ul>
		{#each pages as page (page)}
			<li bind:this={links[page]}>
				<a href={page}>
					{page}
				</a>
			</li>
		{/each}
	</ul>
</nav>

<Underline width={underlineWidth} position={underlinePosition} />

<style>
	nav {
		display: flex;
		justify-content: space-between;
	}

	ul {
		list-style: none;
		display: flex;
		margin: 0;
	}
</style>
