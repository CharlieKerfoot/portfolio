<script lang="ts">
	import { Footer } from '$lib';
	import { fade, fly } from 'svelte/transition';

	let activeTab = $state('Projects');
	const tabs = ['Projects', 'Experience', 'Skills', 'Interests'];

	const skillCategories = [
		{
			name: 'Programming Languages',
			skills: ['C', 'C++', 'Java', 'Python', 'Rust', 'Haskell', 'JavaScript', 'Assembly']
		},
		{
			name: 'Web Frameworks',
			skills: ['React', 'Svelte', 'TypeScript', 'CSS', 'HTML', 'Vue', 'Angular', 'Tailwind']
		},
		{
			name: 'Tools & Other',
			skills: [
				'PyTorch',
				'Docker',
				'Pandas',
				'SQL',
				'Express',
				'Git',
				'GitHub',
				'Markdown',
				'LaTeX',
				'Adobe Premiere Pro',
				'Microsoft Office'
			]
		}
	];

	const projects = [
		{
			title: 'Fight Facts',
			description:
				'A UFC guessing game using Selenium web scraping and built on Vue, Typescript, Express, and SQLite.',
			tags: ['Vue', 'TypeScript', 'Express', 'SQLite', 'Selenium'],
			link: 'https://github.com/charliekerfoot/fight-facts'
		},
		{
			title: 'Self-hosted Password Manager',
			description:
				'Password Manager hosted on a local Raspberry Pi with a Rust webserver and a Svelte interface.',
			tags: ['Rust', 'Svelte', 'Raspberry Pi', 'Security'],
			link: 'https://github.com/charliekerfoot/pw-manager'
		},
		{
			title: 'Maze Algorithm Visualization',
			description:
				"A Three.js visualization of Kruskal's algorithm implemented in TypeScript with a Svelte webpage.",
			tags: ['Three.js', 'TypeScript', 'Svelte', 'Data Structures', 'Maze Generation'],
			link: 'https://github.com/charliekerfoot/maze-threejs'
		},
		{
			title: 'Rat Computer Vision Model',
			description:
				'A PyTorch CNN trained on sample images to detect rats in NYC apartments via a Raspberry Pi webcam and OpenCV.',
			tags: ['PyTorch', 'CNN', 'Python', 'OpenCV', 'Computer Vision']
		},
		{
			title: 'Gemini 3 File Manager Agent',
			description:
				'A CLI-based AI agent that helps you manage your files and directories using natural language commands.',
			tags: ['AI Agents', 'LLMs', 'Gemini 3', 'Python'],
			link: 'https://github.com/charliekerfoot/file-manager-agent'
		},
		{
			title: 'Code Executer MCP Server',
			description:
				'A Model Context Protocol server that allows LLMs to run code from user prompts.',
			tags: ['Typescript', 'MCP', 'NLP', 'LLMs'],
			link: 'https://github.com/CharlieKerfoot/code-execution-mcp'
		},
		{
			title: 'Data Analysis & Visualization Blogs',
			description:
				'A collection of blogs analyzing datasets with Pandas and displaying visualizations built in Vega-Altair, MatPlotLib, or D3.',
			tags: ['Python', 'Pandas', 'Vega-Altair', 'Matplotlib', 'D3'],
			link: 'https://charliekerfoot.github.io/'
		},
		{
			title: 'Rust Web Server from Scratch',
			description: 'A HTTP Web Server built out in Rust.',
			tags: ['Rust', 'HTTP', 'HTML', 'Backend'],
			link: 'https://github.com/CharlieKerfoot/web-server-rust'
		},
		{
			title: "Kruskal's Algorithm Implementation",
			description: "An implementation of Kruskal's algorithm in C.",
			tags: ['C', 'Data Structures', 'Maze Generation'],
			link: 'https://github.com/CharlieKerfoot/maze-generation-c'
		},
		{
			title: 'Data Structures in C',
			description: 'A library implementing the core data structures in C.',
			tags: ['C', 'Data Structures'],
			link: 'https://github.com/CharlieKerfoot/data-structures'
		},
		{
			title: 'Haskell Hash Map Implementation',
			description: 'A hash map design in Haskell.',
			tags: ['Haskell', 'Data Structures'],
			link: 'https://github.com/CharlieKerfoot/hashmap-haskell'
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

	const interests = [
		'Watching Sports (NFL, College Football, MLB, NBA, College Basketball, UFC, Boxing)',
		'Playing Sports (American Football, Baseball, BJJ)',
		'Building Electronics',
		'Weight Training',
		'Reading (Sci-fi, Stephen King, High-Fantasy, Biographies, Technical Books)',
		'Watching Movies',
		'Music (Country, EDM, Grunge, Indie Pop)'
	];
</script>

<div class="flex min-h-screen flex-col bg-neutral-50 dark:bg-neutral-950">
	<div class="container mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
		<header class="mb-20">
			<div class="grid gap-12 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
				<!-- Left Side: Name & Bio -->
				<div class="flex flex-col gap-6">
					<h1
						class="font-display text-6xl font-black uppercase tracking-tighter text-neutral-900 dark:text-white sm:text-7xl"
					>
						Charlie<br />Kerfoot
					</h1>
					<p class="font-mono text-lg leading-relaxed text-neutral-800 dark:text-neutral-200 max-w-md">
						Obsessive about creating value through software. Human beings are responsible for
						shaping the future. Let's build the world that we want to live in. Check out my
						<a
							href="https://drive.google.com/file/d/1m3CGEv5d5jszNlEW3egCz0OiHodfZ9Vw/view?usp=sharing"
							class="inline-flex items-center gap-1 text-neutral-900 underline decoration-2 underline-offset-3 hover:text-neutral-600 dark:text-white dark:hover:text-neutral-300"
							target="_blank"
						>
							Formal Resume
						</a>.
					</p>
				</div>

				<!-- Vertical Divider (Desktop only) -->
				<div class="hidden h-full w-[2px] bg-neutral-900 dark:bg-white lg:block"></div>

				<!-- Right Side: Quote -->
				<div class="flex flex-col justify-center">
					<blockquote
						class="font-display text-3xl font-bold leading-tight uppercase text-neutral-900 dark:text-white sm:text-4xl"
					>
						"In the cosmic blink of an eye, I will become once again cosmic dust."
					</blockquote>
					<cite
						class="mt-6 block font-mono text-xs font-bold tracking-widest uppercase text-neutral-500 dark:text-neutral-400"
					>
						— Bangambiki Habyarimana
					</cite>
				</div>
			</div>
		</header>

		<div class="mb-16">
			<div class="flex flex-wrap gap-4">
				{#each tabs as tab}
					<button
						onclick={() => (activeTab = tab)}
						class="border-2 px-8 py-3 font-mono text-sm font-bold uppercase tracking-wider transition-all duration-200
                        {activeTab === tab
							? 'border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900'
							: 'border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900'}"
					>
						{tab}
					</button>
				{/each}
			</div>
		</div>

		<div class="min-h-[50vh]">
			{#if activeTab === 'Projects'}
				<div in:fly={{ y: 20, duration: 300, delay: 100 }} out:fade={{ duration: 100 }}>
					<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{#each projects as project}
							<a
								href={project.link}
								target={project.link ? '_blank' : ''}
								class="group flex h-full flex-col justify-between border-2 border-neutral-900 bg-white p-6 transition-all hover:bg-neutral-50 dark:border-white dark:bg-neutral-950 dark:hover:bg-neutral-900"
							>
								<div>
									<div class="mb-4 flex items-start justify-between">
										<h3
											class="font-display text-2xl font-bold leading-tight text-neutral-900 group-hover:underline dark:text-white"
										>
											{project.title}
										</h3>
										{#if project.link}
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="square"
												stroke-linejoin="miter"
												class="h-6 w-6 shrink-0 text-neutral-900 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-white"
											>
												<line x1="7" y1="17" x2="17" y2="7"></line>
												<polyline points="7 7 17 7 17 17"></polyline>
											</svg>
										{/if}
									</div>
									<p class="mb-6 font-mono text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
										{project.description}
									</p>
								</div>
								<div class="flex flex-wrap gap-2">
									{#each project.tags as tag}
										<span
											class="border border-neutral-900 px-2 py-1 font-mono text-xs font-bold uppercase text-neutral-900 dark:border-white dark:text-white"
										>
											{tag}
										</span>
									{/each}
								</div>
							</a>
						{/each}
					</div>
				</div>
			{:else if activeTab === 'Experience'}
				<div in:fly={{ y: 20, duration: 300, delay: 100 }} out:fade={{ duration: 100 }}>
					<div class="grid gap-16 lg:grid-cols-2">
						<section>
							<h2 class="font-display mb-12 text-4xl font-black uppercase text-neutral-900 dark:text-white">
								Work Experience
							</h2>
							<div class="space-y-12">
								{#each experience as job}
									<div class="relative border-l-2 border-neutral-900 pl-8 dark:border-white">
										<div
											class="absolute -left-[9px] top-0 h-4 w-4 border-2 border-neutral-900 bg-white dark:border-white dark:bg-neutral-950"
										></div>
										<div class="mb-4">
											<h3 class="font-display text-2xl font-bold text-neutral-900 dark:text-white">
												{job.company}
											</h3>
											<div class="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-neutral-500 dark:text-neutral-400">
												<span class="font-bold text-neutral-900 dark:text-white">{job.role}</span>
												<span>•</span>
												<span>{job.date}</span>
											</div>
										</div>
										<ul class="list-disc space-y-3 pl-4 font-mono text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
											{#each job.points as point}
												<li>{point}</li>
											{/each}
										</ul>
									</div>
								{/each}
							</div>
						</section>

						<section>
							<h2 class="font-display mb-12 text-4xl font-black uppercase text-neutral-900 dark:text-white">
								Education
							</h2>
							<div class="space-y-8">
								{#each education as edu}
									<div
										class="border-2 border-neutral-900 bg-white p-8 dark:border-white dark:bg-neutral-950"
									>
										<div class="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
											<div>
												<h3 class="font-display text-xl font-bold text-neutral-900 dark:text-white">
													{edu.school}
												</h3>
												<p class="font-mono text-sm text-neutral-600 dark:text-neutral-400">{edu.degree}</p>
											</div>
											<div class="text-right font-mono text-xs text-neutral-500 dark:text-neutral-400">
												<p>{edu.date}</p>
												<p>{edu.location}</p>
											</div>
										</div>
										{#if edu.details.length > 0}
											<ul class="list-disc pl-4 font-mono text-sm text-neutral-700 dark:text-neutral-300">
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
				</div>
			{:else if activeTab === 'Skills'}
				<div in:fly={{ y: 20, duration: 300, delay: 100 }} out:fade={{ duration: 100 }}>
					<div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
						{#each skillCategories as category}
							<div
								class="border-2 border-neutral-900 bg-white p-8 dark:border-white dark:bg-neutral-950"
							>
								<h2 class="font-display mb-8 text-2xl font-bold uppercase text-neutral-900 dark:text-white">
									{category.name}
								</h2>
								<div class="flex flex-wrap gap-3">
									{#each category.skills as skill}
										<span
											class="border border-neutral-900 px-3 py-1.5 font-mono text-sm font-bold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
										>
											{skill}
										</span>
									{/each}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{:else if activeTab === 'Interests'}
				<div in:fly={{ y: 20, duration: 300, delay: 100 }} out:fade={{ duration: 100 }}>
					<div
						class="border-2 border-neutral-900 bg-white p-12 dark:border-white dark:bg-neutral-950"
					>
						<h2 class="font-display mb-8 text-3xl font-black uppercase text-neutral-900 dark:text-white">
							Interests & Activities
						</h2>
						<ul class="grid gap-4 sm:grid-cols-2">
							{#each interests as interest}
								<li class="flex items-start gap-3 font-mono text-sm text-neutral-800 dark:text-neutral-200">
									<span class="mt-1.5 h-1.5 w-1.5 shrink-0 bg-neutral-900 dark:bg-white"></span>
									{interest}
								</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<Footer />
</div>
