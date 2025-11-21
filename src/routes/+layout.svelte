<script lang="ts">
	import '../app.css';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	// import favicon from '$lib/assets/favicon.svg'; // Commenting out as I don't have the asset

	import { page } from '$app/stores';

	let { children } = $props();
</script>

<!-- <svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head> -->

<div class="fixed top-6 right-6 z-50 flex items-center gap-4">
	<ThemeToggle />
	{#if $page.url.pathname !== '/'}
		<a
			href="/"
			class="inline-flex items-center rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:bg-white dark:bg-gray-800/80 dark:text-gray-300 dark:hover:bg-gray-800"
		>
			<svg
				class="mr-2 h-4 w-4"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				stroke-width="2"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
			Back to Home
		</a>
	{/if}
</div>

{@render children()}
