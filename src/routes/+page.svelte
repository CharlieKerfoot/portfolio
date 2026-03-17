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

<div class="relative min-h-[150vh]">
	<div
		class="pointer-events-none fixed inset-0 z-0 flex flex-col items-center justify-center overflow-hidden"
	>
		<h1
			class="font-display text-[18vw] leading-none font-bold tracking-tighter text-neutral-900 transition-transform duration-75 will-change-transform dark:text-white"
			style="transform: translateX({-scrollY * 0.5}px)"
		>
			CHARLIE
		</h1>
		<h1
			class="font-display text-[18vw] leading-none font-bold tracking-tighter text-neutral-900 transition-transform duration-75 will-change-transform dark:text-white"
			style="transform: translateX({scrollY * 0.5}px)"
		>
			KERFOOT
		</h1>
	</div>

	<div
		class="pointer-events-none fixed top-1/2 left-0 z-10 w-full -translate-y-1/2 opacity-50 mix-blend-difference"
	>
		<div class="animate-marquee font-mono text-sm tracking-widest whitespace-nowrap text-white">
			MACHINE LEARNING • SOFTWARE ENGINEERING • BUILDING • CHASING VALUE • MACHINE LEARNING •
			SOFTWARE ENGINEERING • BUILDING • CHASING VALUE • MACHINE LEARNING • SOFTWARE ENGINEERING •
			BUILDING • CHASING VALUE • MACHINE LEARNING • SOFTWARE ENGINEERING • BUILDING • CHASING VALUE
		</div>
	</div>

	<div class="relative z-20 mx-auto mt-[100vh] w-full max-w-7xl pb-16">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<StartNav
				title="WORK"
				description="Selected works and experiments."
				redirect="portfolio"
				next="VIEW WORK"
			/>
			<StartNav
				title="THOUGHTS"
				description="Discussing our place in this world."
				redirect="blogs"
				next="READ POSTS"
			/>
			<StartNav
				title="RESUME"
				description="Professional history and skills."
				redirect="resume"
				next="VIEW PROFILE"
			/>
		</div>
	</div>
</div>

<Footer />

<style>
	.animate-marquee {
		animation: marquee 20s linear infinite;
	}
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-50%);
		}
	}
</style>
