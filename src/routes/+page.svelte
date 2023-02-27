<script>
	import { test } from './test';
	import { zest } from './zest';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if zest}
	<div>foo</div>
{:else if test}
	<div>bar</div>
{:else if test}
	<div>baz</div>
{/if}
