<script lang="ts">
	import { Footer } from '$lib';
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<div class="min-h-screen bg-neutral-50 px-4 pt-32 pb-12 dark:bg-neutral-950 sm:px-8">
	<div class="mx-auto max-w-4xl">
		<header class="mb-16 border-b-4 border-neutral-900 pb-8 dark:border-white">
			<a
				href="/blogs"
				class="mb-8 inline-block font-mono text-sm uppercase tracking-widest hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900 px-2 py-1 transition-colors"
			>
				&lt;- INDEX
			</a>
			
			<div class="mb-6 flex flex-wrap items-center gap-4 font-mono text-sm opacity-70">
				<time>{data.meta.date}</time>
				<span>//</span>
				<div class="flex gap-2">
					{#each data.meta.tags as tag}
						<span class="uppercase">#{tag}</span>
					{/each}
				</div>
			</div>

			<h1 class="text-4xl sm:text-5xl md:text-7xl font-black uppercase leading-none tracking-tighter text-neutral-900 font-display dark:text-white mb-8">
				{data.meta.title}
			</h1>
			
			<p class="font-mono text-lg leading-relaxed opacity-70 max-w-2xl">
				{data.meta.description}
			</p>
		</header>

		<article class="prose prose-neutral prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-headings:uppercase prose-headings:tracking-tighter prose-p:font-sans prose-code:font-mono prose-code:bg-neutral-100 dark:prose-code:bg-neutral-900 prose-code:px-1 prose-code:py-0.5 prose-code:before:content-none prose-code:after:content-none">
			{#if data.content}
				{@const Content = data.content}
				<Content />
			{/if}
		</article>
	</div>
</div>
<Footer />
