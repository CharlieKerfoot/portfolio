<script>
	let { title, description, redirect, next } = $props();
</script>

<a
	href="/{redirect}"
	class="group block h-full border-2 border-neutral-900 bg-neutral-50 p-8 transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-100 dark:hover:text-neutral-900"
>
	<div class="flex h-full flex-col justify-between gap-12">
		<div class="flex items-start justify-between">
			<h2 class="font-display text-4xl font-bold tracking-tighter uppercase">{title}</h2>
			<div class="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="square"
					stroke-linejoin="miter"
				>
					<line x1="7" y1="17" x2="17" y2="7"></line>
					<polyline points="7 7 17 7 17 17"></polyline>
				</svg>
			</div>
		</div>

		<div>
			<p class="mb-6 font-mono text-sm leading-relaxed opacity-70">{description}</p>
			<div class="flex items-center gap-2 font-mono text-xs tracking-widest uppercase">
				<span>[{next}]</span>
				<span class="block h-px w-8 bg-current"></span>
			</div>
		</div>
	</div>
</a>
