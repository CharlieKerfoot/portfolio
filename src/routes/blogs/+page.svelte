<script lang="ts">
	import type { PageData } from './$types';
	import { Footer } from '$lib';

	let { data } = $props<{ data: PageData }>();

	let searchQuery = $state('');

	let filteredPosts = $derived(
		data.posts.filter((post) => {
			const query = searchQuery.toLowerCase();
			return (
				post.title.toLowerCase().includes(query) || post.description.toLowerCase().includes(query)
			);
		})
	);
</script>

<div class="min-h-screen bg-neutral-50 px-4 pt-24 pb-12 sm:px-8 md:pt-32 dark:bg-neutral-950">
	<div class="mx-auto max-w-7xl">
		<header class="mb-16 border-b-4 border-neutral-900 pb-8 md:mb-24 dark:border-neutral-700">
			<h1
				class="font-display text-5xl font-bold tracking-tighter text-neutral-900 uppercase md:text-8xl dark:text-white"
			>
				BEST FOOT FORWARD
			</h1>
			<div class="mt-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
				<p class="max-w-xl font-mono text-lg leading-relaxed opacity-70">
					Observations on life. In pursuit of eudaimonia.
				</p>
				<div class="w-full max-w-md">
					<input
						type="text"
						bind:value={searchQuery}
						placeholder="Search posts..."
						class="w-full border-2 border-neutral-900 bg-transparent px-4 py-3 font-mono text-sm uppercase placeholder-neutral-500 focus:bg-neutral-900 focus:text-white focus:outline-none dark:border-neutral-700 dark:placeholder-neutral-500 dark:focus:bg-neutral-100 dark:focus:text-neutral-900"
					/>
				</div>
			</div>
		</header>

		<div
			class="grid grid-cols-1 gap-px border-2 border-neutral-900 bg-neutral-900 sm:grid-cols-2 lg:grid-cols-3 dark:border-neutral-700 dark:bg-neutral-700"
		>
			{#each searchQuery ? filteredPosts : data.posts as post}
				<a
					href="/blogs/{post.slug}"
					class="group relative flex h-[400px] flex-col justify-between bg-neutral-50 p-8 transition-colors hover:bg-neutral-900 hover:text-white dark:bg-neutral-900 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
				>
					<div class="flex justify-between border-b border-current pb-4 opacity-50">
						<time class="font-mono text-xs">{post.date}</time>
					</div>

					<div class="my-auto">
						<h2
							class="font-display mb-4 text-4xl leading-none font-bold tracking-tighter uppercase"
						>
							{post.title}
						</h2>
						<p class="line-clamp-3 font-mono text-sm leading-relaxed opacity-70">
							{post.description}
						</p>
					</div>

					<div class="flex items-center justify-end pt-4">
						<span class="font-mono text-xs tracking-widest uppercase group-hover:underline"
							>Read Blog -></span
						>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
<Footer />
