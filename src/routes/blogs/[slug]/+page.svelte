<script lang="ts">
	import { Footer } from '$lib';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
	<div class="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
		<header class="mb-8">
			<a
				href="/blogs"
				class="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
			>
				<svg class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				Back to Blogs
			</a>
		</header>

		<article class="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-sm sm:p-12 dark:bg-gray-900">
			<header class="mb-8 text-center">
				<div class="mb-4 flex items-center justify-center gap-2 text-sm text-gray-500">
					<time>{data.meta.date}</time>
					<span>•</span>
					<div class="flex gap-1">
						{#each data.meta.tags as tag}
							<span class="rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800"
								>{tag}</span
							>
						{/each}
					</div>
				</div>
				<h1 class="mb-4 text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
					{data.meta.title}
				</h1>
				<p class="text-xl text-gray-600 dark:text-gray-400">{data.meta.description}</p>
			</header>

			<div class="mx-auto prose prose-lg prose-blue dark:prose-invert">
				{#if data.content}
					{@const Content = data.content}
					<Content />
				{/if}
			</div>
		</article>
	</div>
	<Footer />
</div>
