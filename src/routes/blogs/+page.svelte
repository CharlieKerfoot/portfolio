<script lang="ts">
	import type { PageData } from './$types';
	import { Footer } from '$lib';

	let { data } = $props<{ data: PageData }>();

	let searchQuery = $state('');

	let filteredPosts = $derived(
		data.posts.filter((post) => {
			const query = searchQuery.toLowerCase();
			return (
				post.title.toLowerCase().includes(query) ||
				post.description.toLowerCase().includes(query) ||
				post.tags.some((tag) => tag.toLowerCase().includes(query))
			);
		})
	);
</script>

<div class="min-h-screen bg-neutral-50 px-4 pt-24 md:pt-32 pb-12 dark:bg-neutral-950 sm:px-8">
	<div class="mx-auto max-w-7xl">
		<header class="mb-16 md:mb-24 border-b-4 border-neutral-900 pb-8 dark:border-white">
			<h1 class="text-5xl md:text-8xl font-black uppercase tracking-tighter text-neutral-900 dark:text-white">
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
						placeholder="SEARCH_INDEX..."
						class="w-full border-2 border-neutral-900 bg-transparent px-4 py-3 font-mono text-sm uppercase placeholder-neutral-500 focus:bg-neutral-900 focus:text-white focus:outline-none dark:border-white dark:placeholder-neutral-500 dark:focus:bg-white dark:focus:text-neutral-900"
					/>
				</div>
			</div>
		</header>

		<div class="grid grid-cols-1 gap-px bg-neutral-900 border-2 border-neutral-900 dark:bg-white dark:border-white sm:grid-cols-2 lg:grid-cols-3">
			{#each searchQuery ? filteredPosts : data.posts as post}
				<a
					href="/blogs/{post.slug}"
					class="group relative flex flex-col justify-between bg-neutral-50 p-8 transition-colors hover:bg-neutral-900 hover:text-white dark:bg-neutral-950 dark:hover:bg-white dark:hover:text-neutral-900 h-[400px]"
				>
					<div class="flex justify-between border-b border-current pb-4 opacity-50">
						<time class="font-mono text-xs">{post.date}</time>
						<div class="flex gap-2">
							{#each post.tags as tag}
								<span class="font-mono text-xs uppercase">#{tag}</span>
							{/each}
						</div>
					</div>

					<div class="my-auto">
						<h2 class="text-4xl font-bold uppercase leading-none tracking-tighter font-display mb-4">
							{post.title}
						</h2>
						<p class="font-mono text-sm leading-relaxed opacity-70 line-clamp-3">
							{post.description}
						</p>
					</div>

					<div class="flex items-center justify-end pt-4">
						<span class="font-mono text-xs uppercase tracking-widest group-hover:underline">Read Entry -></span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>
<Footer />
