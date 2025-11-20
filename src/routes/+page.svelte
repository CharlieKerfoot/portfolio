<script>
	import { Nav, Footer } from '$lib';
</script>

<div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
	<main class="container mx-auto flex-1 px-4 py-16 sm:px-6 lg:px-8">
		<!-- Hero Section -->
		<div class="mb-16 text-center">
			<h1
				class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
			>
				Welcome to My <span class="text-blue-600 dark:text-blue-400">Digital Space</span>
			</h1>
			<p class="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400">
				Explore my thoughts, visualize my work in 3D, or check out my professional portfolio.
			</p>
		</div>

		<!-- Navigation Grid -->
		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<Nav
				title="Blogs"
				icon="ipsum"
				description="Where I write blogs about life and writing code. Insights, tutorials, and personal stories."
				redirect="blogs"
			/>
			<Nav
				title="3D Portfolio"
				icon="ipsum"
				description="A 3D tour through my projects. Interactive experiences built with Three.js."
				redirect="portfolio"
			/>
			<Nav
				title="CV Site"
				icon="ipsum"
				description="My resume, projects, and past experience. A comprehensive look at my professional journey."
				redirect="CV"
			/>
		</div>
	</main>

	<Footer />
</div>
