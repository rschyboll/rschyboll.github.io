<script>
	let expanded = true;
</script>

<menu class:expanded>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/settings">Settings</a>
	</nav>
</menu>

<div class="page">
	<slot />
</div>

<style>
	menu {
		position: fixed;
		display: flex;
		height: 100vh;
		width: 15rem;
		margin: 0;
		padding: 0;
	}

	menu.expanded {
		width: 13rem;
	}

	.page {
		margin-left: 15rem;
	}
</style>
