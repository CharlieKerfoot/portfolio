<script lang="ts">
	import { onMount } from 'svelte';

	let scrollContainer: HTMLElement;

	onMount(() => {
		const handleWheel = (e: WheelEvent) => {
			if (scrollContainer) {
				e.preventDefault();
				scrollContainer.scrollLeft += e.deltaY;
			}
		};
		window.addEventListener('wheel', handleWheel, { passive: false });
		return () => window.removeEventListener('wheel', handleWheel);
	});

	let projects = [
		{
			title: 'Work in Progress',
			description: 'This section is still under construction',
			tags: ['CHECK', 'BACK', 'SOON'],
			link: ''
		},
	];
</script>

<div class="fixed inset-0 flex items-center overflow-hidden bg-neutral-50 dark:bg-neutral-950">
	<div
		bind:this={scrollContainer}
		class="flex h-full w-full items-center gap-8 md:gap-16 overflow-x-auto px-4 md:px-[20vw] pb-12 pt-32 scrollbar-hide"
	>
		<div class="flex-shrink-0">
			<h1 class="text-6xl md:text-9xl font-black writing-vertical-rl rotate-180 text-neutral-900 dark:text-white">
				WORK
			</h1>
		</div>

		{#each projects as project, i}
			<a
				href={project.link}
				class="group relative flex h-[50vh] md:h-[60vh] w-[85vw] md:w-[40vw] flex-shrink-0 flex-col justify-between border-2 border-neutral-900 bg-white p-6 md:p-8 transition-all hover:bg-neutral-900 hover:text-white dark:border-white dark:bg-neutral-900 dark:hover:bg-white dark:hover:text-neutral-900"
			>
				<div class="flex justify-between border-b-2 border-current pb-4">
					<span class="font-mono text-lg md:text-xl">0{i + 1}</span>
					<span class="font-mono text-lg md:text-xl">2026</span>
				</div>

				<div class="space-y-4">
					<h2 class="text-4xl md:text-5xl font-bold uppercase leading-none tracking-tighter font-display">{project.title}</h2>
					<p class="max-w-md font-mono text-xs md:text-sm leading-relaxed opacity-70">
						{project.description}
					</p>
				</div>

				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span class="border border-current px-2 py-1 md:px-3 md:py-1 font-mono text-[10px] md:text-xs uppercase tracking-widest">
							{tag}
						</span>
					{/each}
				</div>
			</a>
		{/each}
		
		<div class="flex-shrink-0 w-4 md:w-[20vw]"></div>
	</div>
</div>

<style>
	.scrollbar-hide::-webkit-scrollbar {
		display: none;
	}
	.scrollbar-hide {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.writing-vertical-rl {
		writing-mode: vertical-rl;
	}
</style>
