<script>
	let { title, icon, description, redirect } = $props();
</script>

<a
	href="/{redirect}"
	class="group block h-full overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
>
	<div class="flex h-full flex-col justify-between">
		<div>
			<div
				class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50 text-2xl text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
			>
				<!-- You can replace this with an actual icon based on the 'icon' prop -->
				{#if icon === 'ipsum'}
					<span>✨</span>
				{:else}
					<img src={icon} alt="{title} icon" class="h-6 w-6" />
				{/if}
			</div>
			<h2 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
			<p class="text-gray-600 dark:text-gray-400">{description}</p>
		</div>
		<div class="mt-4 flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
			<span class="group-hover:underline">Explore</span>
			<svg
				class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
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
		</div>
	</div>
</a>
