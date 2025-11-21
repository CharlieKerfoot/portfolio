<script lang="ts">
	import '../app.css';
	import { ThemeToggle } from '$lib';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	injectSpeedInsights()
	injectAnalytics()

	import { page } from '$app/state';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
	<link rel="shortcut icon" href="/favicon/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
	<link rel="manifest" href="/favicon/site.webmanifest" />
</svelte:head>

<div class="fixed top-6 right-6 z-50 flex items-center gap-4">
	<ThemeToggle />
	{#if page.url.pathname !== '/'}
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
