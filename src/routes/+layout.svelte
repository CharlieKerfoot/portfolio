<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	// import favicon from '$lib/assets/favicon.svg'; // Commenting out as I don't have the asset

	let { children } = $props();
</script>

<!-- <svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head> -->

{@render children()}
<ThemeToggle />
