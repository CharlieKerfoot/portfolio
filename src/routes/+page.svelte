<script lang="ts">
	import { StartNav, Footer } from '$lib';
	import { onMount } from 'svelte';

	let scrollY = 0;
	let innerHeight = 0;

	onMount(() => {
		const handleScroll = () => {
			scrollY = window.scrollY;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<svelte:window bind:innerHeight />

<div class="relative min-h-[200vh]">
	<div class="fixed inset-0 flex flex-col items-center justify-center pointer-events-none z-0 overflow-hidden">
		<h1
			class="text-[18vw] font-black leading-none tracking-tighter text-neutral-900 dark:text-white transition-transform duration-75 will-change-transform"
			style="transform: translateX({-scrollY * 0.5}px)"
		>
			CHARLIE
		</h1>
		<h1
			class="text-[18vw] font-black leading-none tracking-tighter text-neutral-900 dark:text-white transition-transform duration-75 will-change-transform"
			style="transform: translateX({scrollY * 0.5}px)"
		>
			KERFOOT
		</h1>
	</div>

	<div class="fixed top-1/2 left-0 w-full -translate-y-1/2 mix-blend-difference z-10 pointer-events-none opacity-50">
		<div class="whitespace-nowrap font-mono text-sm tracking-widest text-white animate-marquee">
			MACHINE LEARNING • SOFTWARE ENGINEERING • BUILDING • CHASING VALUE • MACHINE LEARNING • SOFTWARE ENGINEERING • BUILDING • CHASING VALUE • MACHINE LEARNING • SOFTWARE ENGINEERING • BUILDING • CHASING VALUE • MACHINE LEARNING • SOFTWARE ENGINEERING • BUILDING • CHASING VALUE
		</div>
	</div>

	<div
		class="relative z-20 mt-[100vh] w-full max-w-7xl mx-auto"
		style="opacity: {Math.min(Math.max((scrollY - innerHeight * 0.25) / (innerHeight * 0.3), 0), 1)}"
	>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<StartNav
				title="PORTFOLIO"
				description="Selected works and experiments."
				redirect="portfolio"
				next="VIEW WORK"
				icon="portfolio"
			/>
			<StartNav
				title="BLOG"
				description="Discussing our place in this world."
				redirect="blogs"
				next="READ POSTS"
				icon="blog"
			/>
			<StartNav
				title="RESUME"
				description="Professional history and skills."
				redirect="resume"
				next="VIEW PROFILE"
				icon="resume"
			/>
		</div>
	</div>
</div>

<style>
	.animate-marquee {
		animation: marquee 20s linear infinite;
	}
	@keyframes marquee {
		0% { transform: translateX(0); }
		100% { transform: translateX(-50%); }
	}
</style>

<Footer />
