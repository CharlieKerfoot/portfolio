<script>
	import { Nav, Footer } from '$lib';
</script>

<div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
	<main class="container mx-auto flex-1 px-4 py-16 sm:px-6 lg:px-8">
		<div class="mb-16 text-center">
			<h1
				class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-white"
			>
				You have arrived...
			</h1>
			<p class="mx-auto text-xl text-gray-600 dark:text-gray-400">
				Navigate my thoughts, travel through my work in 3D, or simply check out my resume.
			</p>
		</div>

		<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<Nav
				title="Best Foot Forward"
				icon="blog"
				description="My space for writing freely about life and code. Insights, tutorials, and personal stories."
				redirect="blogs"
				next="Read"
			/>
			<Nav
				title="3D Portfolio"
				icon="portfolio"
				description="Become immersed in my projects. Currently under construction."
				redirect="portfolio"
				next="Explore"
			/>
			<Nav
				title="Resume"
				icon="resume"
				description="My resume, projects, and past experience. A comprehensive look at my technical journey."
				redirect="resume"
				next="Inspect"
			/>
		</div>
	</main>

	<Footer />
</div>
