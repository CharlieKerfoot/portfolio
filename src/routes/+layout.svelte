<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { ThemeToggle } from '$lib';

	let innerWidth = 0;
	let innerHeight = 0;

	onMount(() => {
		const updateCursor = (e: MouseEvent) => {
			document.body.style.setProperty('--cursor-x', `${e.clientX}px`);
			document.body.style.setProperty('--cursor-y', `${e.clientY}px`);
		};
		window.addEventListener('mousemove', updateCursor);
		return () => window.removeEventListener('mousemove', updateCursor);
	});
</script>

<svelte:window bind:innerWidth bind:innerHeight />

<svelte:head>
	<link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
	<link rel="shortcut icon" href="/favicon/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
	<link rel="manifest" href="/favicon/site.webmanifest" />
</svelte:head>

<div
	class="pointer-events-none fixed inset-0 z-50 border-[12px] border-neutral-200 transition-colors duration-300 dark:border-neutral-900"
></div>

<!-- Top Left: Brand -->
<div class="fixed top-4 left-4 z-40 mix-blend-difference md:top-8 md:left-8">
	<a
		href="/"
		class="font-mono text-lg font-bold tracking-tighter text-white transition-opacity hover:opacity-50 md:text-xl"
	>
		CKERF
	</a>
</div>

<!-- Top Right: Menu (Placeholder/Link) -->
<div
	class="fixed top-4 right-4 z-40 flex gap-4 font-mono text-xs text-white mix-blend-difference md:top-8 md:right-8 md:gap-6 md:text-sm"
>
	<a href="/portfolio" class="decoration-2 underline-offset-4 hover:underline">WORK</a>
	<a href="/blogs" class="decoration-2 underline-offset-4 hover:underline">THOUGHTS</a>
	<a href="/resume" class="decoration-2 underline-offset-4 hover:underline">RESUME</a>
</div>

<!-- Bottom Left: Context -->
<div
	class="fixed bottom-4 left-4 z-40 font-mono text-[10px] text-white mix-blend-difference md:bottom-8 md:left-8 md:text-xs"
>
	<span class="opacity-50">LOC:</span>
	{$page.url.pathname === '/' ? 'INDEX' : $page.url.pathname.toUpperCase().slice(1)}
</div>

<!-- Bottom Right: Controls -->
<div
	class="pointer-events-auto fixed right-4 bottom-4 z-40 flex items-center gap-4 md:right-6 md:bottom-6"
>
	<ThemeToggle />
</div>

<main
	class="relative min-h-screen w-full overflow-x-hidden px-8 pt-32 pb-16 selection:bg-white selection:text-black"
>
	<slot />
</main>
