<script lang="ts">
	import type { PageData } from './$types';

	let { data } = $props<{ data: PageData }>();
</script>

<div class="min-h-screen bg-neutral-50 px-4 pt-32 pb-12 sm:px-8 dark:bg-neutral-950">
	<div class="mx-auto max-w-4xl">
		<header class="mb-16 border-b-4 border-neutral-900 pb-8 dark:border-white">
			<a
				href="/blogs"
				class="mb-8 inline-block px-2 py-1 font-mono text-sm tracking-widest uppercase transition-colors hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-neutral-900"
			>
				&lt;- INDEX
			</a>

			<div class="mb-6 flex flex-wrap items-center gap-4 font-mono text-sm opacity-70">
				<time>{data.meta.date}</time>
			</div>

			<h1
				class="mb-8 font-display text-4xl leading-none font-black tracking-tighter text-neutral-900 uppercase sm:text-5xl md:text-7xl dark:text-white"
			>
				{data.meta.title}
			</h1>

			<p class="max-w-2xl font-mono text-lg leading-relaxed opacity-70">
				{data.meta.description}
			</p>
		</header>

		<article
			class="prose prose-base max-w-none prose-neutral dark:prose-invert prose-headings:font-display prose-headings:tracking-tighter prose-headings:uppercase prose-p:font-sans prose-code:bg-neutral-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-neutral-900"
		>
			{#if data.content}
				{@const Content = data.content}
				<Content />
			{/if}
		</article>
	</div>
</div>
