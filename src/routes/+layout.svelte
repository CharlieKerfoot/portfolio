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

<div class="fixed inset-0 z-50 pointer-events-none border-[12px] border-neutral-200 dark:border-neutral-900 transition-colors duration-300"></div>

<!-- Top Left: Brand -->
<div class="fixed top-4 left-4 md:top-8 md:left-8 z-40 mix-blend-difference">
	<a href="/" class="text-lg md:text-xl font-bold tracking-tighter text-white font-mono hover:opacity-50 transition-opacity">
		CKERF
	</a>
</div>

<!-- Top Right: Menu (Placeholder/Link) -->
<div class="fixed top-4 right-4 md:top-8 md:right-8 z-40 mix-blend-difference flex gap-4 md:gap-6 font-mono text-xs md:text-sm text-white">
	<a href="/portfolio" class="hover:underline decoration-2 underline-offset-4">WORK</a>
	<a href="/blogs" class="hover:underline decoration-2 underline-offset-4">THOUGHTS</a>
	<a href="/resume" class="hover:underline decoration-2 underline-offset-4">PROFILE</a>
</div>

<!-- Bottom Left: Context -->
<div class="fixed bottom-4 left-4 md:bottom-8 md:left-8 z-40 mix-blend-difference font-mono text-[10px] md:text-xs text-white">
	<span class="opacity-50">LOC:</span> {$page.url.pathname === '/' ? 'INDEX' : $page.url.pathname.toUpperCase().slice(1)}
</div>

<!-- Bottom Right: Controls -->
<div class="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-center gap-4 pointer-events-auto">
	<ThemeToggle />
</div>

<main class="relative min-h-screen w-full overflow-x-hidden pt-32 pb-16 px-8 selection:bg-white selection:text-black">
	<slot />
</main>
