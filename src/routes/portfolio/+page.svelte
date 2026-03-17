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
		}
	];
</script>

<div class="fixed inset-0 flex items-center overflow-hidden bg-neutral-50 dark:bg-neutral-950">
	<div
		bind:this={scrollContainer}
		class="scrollbar-hide flex h-full w-full items-center gap-8 overflow-x-auto px-4 pt-32 pb-12 md:gap-16 md:px-[20vw]"
	>
		<div class="shrink-0">
			<h1
				class="writing-vertical-rl rotate-180 text-6xl font-black text-neutral-900 md:text-9xl dark:text-white"
			>
				WORK
			</h1>
		</div>

		{#each projects as project, i}
			<a
				href={project.link}
				class="group relative flex h-[50vh] w-[85vw] shrink-0 flex-col justify-between border-2 border-neutral-900 bg-white p-6 transition-colors hover:bg-neutral-900 hover:text-white md:h-[60vh] md:w-[40vw] md:p-8 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
			>
				<div class="flex justify-between border-b-2 border-current pb-4">
					<span class="font-mono text-lg md:text-xl">0{i + 1}</span>
					<span class="font-mono text-lg md:text-xl">2026</span>
				</div>

				<div class="space-y-4">
					<h2
						class="font-display text-4xl leading-none font-bold tracking-tighter uppercase md:text-5xl"
					>
						{project.title}
					</h2>
					<p class="max-w-md font-mono text-xs leading-relaxed opacity-70 md:text-sm">
						{project.description}
					</p>
				</div>

				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span
							class="border border-current px-2 py-1 font-mono text-[10px] tracking-widest uppercase md:px-3 md:py-1 md:text-xs"
						>
							{tag}
						</span>
					{/each}
				</div>
			</a>
		{/each}

		<div class="w-4 shrink-0 md:w-[20vw]"></div>
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
