<script lang="ts">
	import { locale } from '$lib/translations';

	$: console.log($locale);
</script>

<slot />

<button on:click={() => locale.set('en')}>EN</button>
<button on:click={() => locale.set('pl')}>PL</button>
<button on:click={() => locale.set('de')}>DE</button>
