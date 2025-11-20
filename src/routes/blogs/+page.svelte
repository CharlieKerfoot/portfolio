<script lang="ts">
	import { Footer } from '$lib';
	import type { PageData } from './$types';
	import type { BlogPost } from '$lib/utils/blog';

	let { data } = $props<{ data: PageData }>();
	let searchQuery = $state('');

	// Derived state for filtered posts
	let filteredPosts = $derived(
		data.posts.filter((post: BlogPost) => {
			const query = searchQuery.toLowerCase();
			return (
				post.title.toLowerCase().includes(query) ||
				post.description.toLowerCase().includes(query) ||
				post.tags.some((tag: string) => tag.toLowerCase().includes(query))
			);
		})
	);

	// Group posts by year
	let postsByYear = $derived(
		filteredPosts.reduce(
			(acc: Record<number, BlogPost[]>, post: BlogPost) => {
				const year = new Date(post.date).getFullYear();
				if (!acc[year]) acc[year] = [];
				acc[year].push(post);
				return acc;
			},
			{} as Record<number, BlogPost[]>
		)
	);

	// Sort years descending
	let sortedYears = $derived(
		Object.keys(postsByYear)
			.map(Number)
			.sort((a, b) => b - a)
	);
</script>

<div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
	<div class="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
		<header class="mb-8 flex items-center justify-between">
			<div>
				<h1 class="text-3xl font-bold text-gray-900 dark:text-white">Best Foot Forward</h1>
				<p class="text-gray-600 dark:text-gray-400">Thoughts on life and code</p>
			</div>
			<a href="/" class="text-blue-600 hover:underline dark:text-blue-400">Back to Home</a>
		</header>

		<div class="grid gap-8 lg:grid-cols-12">
			<!-- Sidebar -->
			<aside class="lg:col-span-3">
				<div class="sticky top-8 space-y-8">
					<!-- Search -->
					<div class="relative">
						<input
							type="text"
							bind:value={searchQuery}
							placeholder="Search blogs..."
							class="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
						/>
						<svg
							class="absolute top-2.5 left-3 h-5 w-5 text-gray-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</div>

					<!-- Chronological List -->
					<nav class="space-y-6">
						{#each sortedYears as year}
							<div>
								<h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{year}</h3>
								<ul class="space-y-2 border-l-2 border-gray-200 pl-4 dark:border-gray-800">
									{#each postsByYear[year] as post}
										<li>
											<a
												href="/blogs/{post.slug}"
												class="block text-sm text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
											>
												{post.title}
											</a>
										</li>
									{/each}
								</ul>
							</div>
						{/each}
					</nav>
				</div>
			</aside>

			<!-- Main Content -->
			<main class="space-y-12 lg:col-span-9">
				{#if searchQuery}
					<!-- Search Results View -->
					<section>
						<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Search Results</h2>
						<div class="grid gap-6 sm:grid-cols-2">
							{#each filteredPosts as post}
								<a
									href="/blogs/{post.slug}"
									class="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
								>
									<div class="p-6">
										<div class="mb-2 flex items-center gap-2 text-sm text-gray-500">
											<time>{post.date}</time>
											<span>•</span>
											<div class="flex gap-1">
												{#each post.tags as tag}
													<span
														class="rounded-full bg-gray-100 px-2 py-0.5 text-xs dark:bg-gray-800"
														>{tag}</span
													>
												{/each}
											</div>
										</div>
										<h3
											class="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
										>
											{post.title}
										</h3>
										<p class="text-gray-600 dark:text-gray-400">{post.description}</p>
									</div>
								</a>
							{/each}
						</div>
					</section>
				{:else}
					<!-- Default View -->
					{#if data.posts.length > 0}
						<!-- Newest Blog -->
						<section>
							<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Newest</h2>
							<a
								href="/blogs/{data.posts[0].slug}"
								class="group relative block overflow-hidden rounded-2xl bg-blue-600 text-white shadow-xl transition-transform hover:-translate-y-1"
							>
								<div class="relative z-10 p-8 sm:p-12">
									<div class="mb-4 flex items-center gap-2 text-blue-100">
										<span
											class="rounded-full bg-white/20 px-3 py-1 text-sm font-medium backdrop-blur-sm"
											>New</span
										>
										<time>{data.posts[0].date}</time>
									</div>
									<h3 class="mb-4 text-3xl font-bold sm:text-4xl">{data.posts[0].title}</h3>
									<p class="mb-6 max-w-2xl text-lg text-blue-100">{data.posts[0].description}</p>
									<span class="inline-flex items-center font-semibold group-hover:underline">
										Read Article
										<svg
											class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												stroke-width="2"
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</span>
								</div>
								<!-- Decorative background pattern -->
								<div
									class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-90"
								></div>
							</a>
						</section>
					{/if}

					{#if data.featured}
						<!-- Featured Blog -->
						<section>
							<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Featured Today</h2>
							<a
								href="/blogs/{data.featured.slug}"
								class="group block overflow-hidden rounded-xl border border-gray-200 bg-white transition-all hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
							>
								<div class="p-8">
									<div class="mb-4 flex items-center gap-2 text-sm text-gray-500">
										<span
											class="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
											>Featured</span
										>
										<time>{data.featured.date}</time>
									</div>
									<h3
										class="mb-4 text-2xl font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
									>
										{data.featured.title}
									</h3>
									<p class="text-gray-600 dark:text-gray-400">{data.featured.description}</p>
								</div>
							</a>
						</section>
					{/if}
				{/if}
			</main>
		</div>
	</div>
	<Footer />
</div>
