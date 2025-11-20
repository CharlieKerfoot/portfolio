<script lang="ts">
	import { Footer } from '$lib';
	import { fade, fly } from 'svelte/transition';

	let activeTab = $state('Projects');
	const tabs = ['Projects', 'Experience', 'Skills', 'Interests'];

	const skills = [
		'C',
		'C++',
		'Java',
		'Python',
		'Rust',
		'Haskell',
		'TypeScript',
		'JavaScript',
		'SvelteKit',
		'React',
		'Vue',
		'Angular',
		'Git',
		'Assembly',
		'LaTeX'
	];

	const projects = [
		{
			title: 'Fight Facts',
			description:
				'A UFC guessing game using Selenium web scraping and built on Vue, Typescript, Express, and SQLite.',
			tags: ['Vue', 'TypeScript', 'Express', 'SQLite', 'Selenium']
		},
		{
			title: 'Self-hosted Password Manager',
			description:
				'Password Manager hosted on a local Raspberry Pi with a Rust webserver and a Svelte interface.',
			tags: ['Rust', 'Svelte', 'Raspberry Pi', 'Security']
		},
		{
			title: 'Maze Algorithm Visualization',
			description:
				"A Three.js visualization of Kruskal's algorithm implemented in C with a Svelte webpage.",
			tags: ['Three.js', 'C', 'Svelte', 'Algorithms']
		},
		{
			title: 'AI Rat Detector',
			description:
				'A PyTorch CNN trained on sample images to detect rats in NYC apartments via a Raspberry Pi webcam.',
			tags: ['PyTorch', 'CNN', 'Python', 'Raspberry Pi', 'AI']
		},
		{
			title: 'AI Rat Detector',
			description:
				'A PyTorch CNN trained on sample images to detect rats in NYC apartments via a Raspberry Pi webcam.',
			tags: ['PyTorch', 'CNN', 'Python', 'Raspberry Pi', 'AI']
		},
		{
			title: 'AI Rat Detector',
			description:
				'A PyTorch CNN trained on sample images to detect rats in NYC apartments via a Raspberry Pi webcam.',
			tags: ['PyTorch', 'CNN', 'Python', 'Raspberry Pi', 'AI']
		}
	];

	const experience = [
		{
			company: 'Columbia University',
			role: 'Summer Intern',
			location: 'New York, NY',
			date: 'May 2024 - September 2024',
			points: [
				'Helped develop AI app TokenProbe with SURE interns and PhD students',
				"Wrote PyTorch code to visualize Meta Llama's tokenization and developed the front-end React interface",
				'Garnered financial backing for TokenProbe from VC firm Andreessen Horowitz'
			]
		},
		{
			company: 'Horace Mann Summer on the Hill',
			role: 'Coding Tutor',
			location: 'New York, NY',
			date: 'August 2023 - June 2025',
			points: [
				'Taught 25+ Bronx public elementary school children the basics of game development through introductory graphical programs like Scratch or Processing',
				'Collaborated with other tutors throughout the week to write 3 hour long weekly class curriculums',
				'Led 1 on 1 discussions mentoring each student as they built out their own custom game final project in p5.js'
			]
		}
	];

	const education = [
		{
			school: 'The University of Chicago',
			degree: 'Bachelor of Science in Computer Science',
			date: 'Expected June 2029',
			location: 'Chicago, IL',
			details: []
		},
		{
			school: 'Horace Mann',
			degree: 'Diploma',
			date: 'June 2025',
			location: 'New York, NY',
			details: [
				'Honors:',
				'36/36 ACT (99th percentile)',
				'Third Place in HackMann 2024',
				'Excellence in Filmmaking (2025)'
			]
		}
	];
</script>

<div class="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-950">
	<div class="container mx-auto flex-1 px-4 py-16 sm:px-6 lg:px-8">
		<header class="mb-12 text-center">
			<h1
				class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl dark:text-white"
			>
				Charlie Kerfoot
			</h1>
			<div class="mt-8">
				<a
					href="https://drive.google.com/file/d/1m3CGEv5d5jszNlEW3egCz0OiHodfZ9Vw/view?usp=sharing"
					class="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-700 hover:shadow-xl focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
					target="_blank"
				>
					View Resume
				</a>
			</div>
		</header>

		<div class="mb-12 flex justify-center">
			<div class="relative inline-flex rounded-full bg-gray-200 p-1 dark:bg-gray-800">
				{#each tabs as tab}
					<button
						onclick={() => (activeTab = tab)}
						class="relative z-10 rounded-full px-6 py-2 text-sm font-medium transition-colors duration-200 focus:outline-none {activeTab ===
						tab
							? 'text-gray-900 dark:text-white'
							: 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'}"
					>
						{tab}
						{#if activeTab === tab}
							<div
								class="absolute inset-0 -z-10 rounded-full bg-white shadow-sm transition-all duration-300 dark:bg-gray-700"
								in:fade={{ duration: 200 }}
							></div>
						{/if}
					</button>
				{/each}
			</div>
		</div>

		<div
			class="mx-auto transition-all duration-300 {activeTab === 'Projects'
				? 'max-w-6xl'
				: 'max-w-4xl'}"
		>
			{#if activeTab === 'Projects'}
				<div in:fly={{ y: 20, duration: 300, delay: 100 }} out:fade={{ duration: 100 }}>
					<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{#each projects as project}
							<div
								class="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
							>
								<h3
									class="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400"
								>
									{project.title}
								</h3>
								<p class="mb-4 text-sm text-gray-600 dark:text-gray-400">{project.description}</p>
								<div class="flex flex-wrap gap-2">
									{#each project.tags as tag}
										<span
											class="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300"
										>
											{tag}
										</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{:else if activeTab === 'Experience'}
				<div
					in:fly={{ y: 20, duration: 300, delay: 100 }}
					out:fade={{ duration: 100 }}
					class="space-y-12"
				>
					<section>
						<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Work Experience</h2>
						<div class="space-y-8">
							{#each experience as job}
								<div class="relative ml-3 border-l-2 border-gray-200 pl-8 dark:border-gray-800">
									<div
										class="absolute top-0 -left-[9px] h-4 w-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-950"
									></div>
									<div class="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
										<h3 class="text-xl font-bold text-gray-900 dark:text-white">{job.company}</h3>
										<span class="text-sm font-medium text-gray-500 dark:text-gray-400"
											>{job.date}</span
										>
									</div>
									<div class="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">
										{job.role}
									</div>
									<ul class="list-disc space-y-2 pl-4 text-gray-600 dark:text-gray-400">
										{#each job.points as point}
											<li>{point}</li>
										{/each}
									</ul>
								</div>
							{/each}
						</div>
					</section>

					<section>
						<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Education</h2>
						<div class="space-y-8">
							{#each education as edu}
								<div
									class="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
								>
									<div class="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
										<div>
											<h3 class="text-lg font-bold text-gray-900 dark:text-white">{edu.school}</h3>
											<p class="text-blue-600 dark:text-blue-400">{edu.degree}</p>
										</div>
										<div class="text-right text-sm text-gray-500 dark:text-gray-400">
											<p>{edu.date}</p>
											<p>{edu.location}</p>
										</div>
									</div>
									{#if edu.details.length > 0}
										<ul class="mt-4 list-disc pl-4 text-sm text-gray-600 dark:text-gray-400">
											{#each edu.details as detail}
												<li>{detail}</li>
											{/each}
										</ul>
									{/if}
								</div>
							{/each}
						</div>
					</section>
				</div>
			{:else if activeTab === 'Skills'}
				<div in:fly={{ y: 20, duration: 300, delay: 100 }} out:fade={{ duration: 100 }}>
					<div class="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
						<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">Technical Skills</h2>
						<div class="flex flex-wrap gap-3">
							{#each skills as skill}
								<span
									class="rounded-full bg-gray-100 px-4 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-blue-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900/30 dark:hover:text-blue-400"
								>
									{skill}
								</span>
							{/each}
						</div>
					</div>
				</div>
			{:else if activeTab === 'Interests'}
				<div in:fly={{ y: 20, duration: 300, delay: 100 }} out:fade={{ duration: 100 }}>
					<div class="rounded-2xl bg-white p-8 shadow-sm dark:bg-gray-900">
						<h2 class="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
							Leadership & Activities
						</h2>
						<div>
							<div class="mb-2 flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
								<h3 class="text-xl font-bold text-gray-900 dark:text-white">
									Horace Mann Varsity Football
								</h3>
								<span class="text-sm text-gray-500 dark:text-gray-400"
									>June 2021 - December 2024</span
								>
							</div>
							<p class="mb-4 text-lg font-medium text-blue-600 dark:text-blue-400">Captain</p>
							<p class="text-gray-600 dark:text-gray-400">
								Led team to first ever MIFL A bracket playoff berth in school history as a senior
								and captain. Coordinated team workouts, weekly team dinners, celebratory team
								events, and social media posts with other four co-captains. Played Offensive Tackle,
								Inside Linebacker, and Special Teams, managing top 3 in sacks, tackles, and pass
								breakups during my senior year.
							</p>
						</div>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<Footer />
</div>
