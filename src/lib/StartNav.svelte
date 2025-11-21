<script>
	let { title, icon, description, redirect, next } = $props();
</script>

<a
	href="/{redirect}"
	class="group block h-full border-2 border-neutral-900 bg-neutral-50 p-8 transition-all duration-300 hover:bg-neutral-900 hover:text-white dark:border-white dark:bg-neutral-950 dark:hover:bg-white dark:hover:text-neutral-900"
>
	<div class="flex h-full flex-col justify-between gap-12">
		<div class="flex justify-between items-start">
			<h2 class="text-4xl font-bold tracking-tighter font-display uppercase">{title}</h2>
			<div class="h-8 w-8 opacity-0 transition-opacity group-hover:opacity-100">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter">
					<line x1="7" y1="17" x2="17" y2="7"></line>
					<polyline points="7 7 17 7 17 17"></polyline>
				</svg>
			</div>
		</div>
		
		<div>
			<p class="font-mono text-sm leading-relaxed opacity-70 mb-6">{description}</p>
			<div class="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
				<span>[{next}]</span>
				<span class="block h-[1px] w-8 bg-current"></span>
			</div>
		</div>
	</div>
</a>
