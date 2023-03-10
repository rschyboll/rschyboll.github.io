<script lang="ts">
	import { tick } from 'svelte';

	export let position: number | null;
	export let width: number | null;

	let prevPosition: number | null = null;
	let prevWidth: number | null = null;

	let currPosition: number;
	let currWidth: number;

	let transitionEnabled = true;

	$: {
		if (prevPosition == null && prevWidth == null && position != null && width != null) {
			show(position, width);
		} else if (prevPosition != null && prevWidth != null && position == null && width == null) {
			hide(prevPosition, prevWidth);
		} else if (prevPosition != null && prevWidth != null && position != null && width != null) {
			move(position, width);
		}
		prevPosition = position;
		prevWidth = width;
	}

	async function show(position: number, width: number) {
		currPosition = position + width / 2;
		currWidth = 0;
		transitionEnabled = false;
		await tick();
		currPosition = position;
		currWidth = width;
		transitionEnabled = true;
	}

	function hide(position: number, width: number) {
		currPosition = position + width / 2;
		currWidth = 0;
	}

	function move(position: number, width: number) {
		currPosition = position;
		currWidth = width;
	}
</script>

<div
	style="--width: {currWidth}px; 
		   --position: {currPosition}px; 
		   --transTime: {transitionEnabled ? 0.5 : 0}s"
/>

<style>
	div {
		position: fixed;
		width: var(--width);
		height: 1px;
		left: var(--position);
		background-color: black;
		transition: width var(--transTime), left var(--transTime);
	}
</style>
