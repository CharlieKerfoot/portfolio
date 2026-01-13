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
			title: 'Arb Agent',
			description:
				'A Llama 3 financial reasoning agent fine-tuned on synthetic Chain-of-Thought examples from SEC 10-Ks with a Rust inference backend.',
			tags: ['LLMs', 'AI Agents', 'Data Cleaning', 'Rust', 'NLP', 'Chain-of-Thought, Fine-Tuning'],
			github: 'https://github.com/charliekerfoot/finance-agent',
			url: ''
		},
		{
			title: 'Fight Facts',
			description:
				'A UFC guessing game using Selenium web scraping and built on Vue, Typescript, Express, and SQLite.',
			tags: ['Vue', 'TypeScript', 'Express', 'SQLite', 'Selenium'],
			github: 'https://github.com/charliekerfoot/fight-facts',
			url: 'https://fight-facts.vercel.app/'
		},
		{
			title: 'Self-hosted Password Manager',
			description:
				'Password Manager hosted on a local Raspberry Pi with a Rust webserver and a Svelte interface.',
			tags: ['Rust', 'Svelte', 'Raspberry Pi', 'Security'],
			github: 'https://github.com/charliekerfoot/pw-manager',
			url: 'https://pw-manager-ckerf.vercel.app/'
		},
		{
			title: 'Maze Algorithm Visualization',
			description:
				"A Three.js visualization of Kruskal's algorithm implemented in TypeScript with a Svelte webpage.",
			tags: ['Three.js', 'TypeScript', 'Svelte', 'Data Structures', 'Maze Generation'],
			github: 'https://github.com/charliekerfoot/maze-threejs',
			url: 'https://maze-threejs.vercel.app/'
		},
		{
			title: 'Gemini 3 File Manager Agent',
			description:
				'A CLI-based AI agent that helps you manage your files and directories using natural language commands.',
			tags: ['AI Agents', 'LLMs', 'Gemini 3', 'Python'],
			github: 'https://github.com/charliekerfoot/file-manager-agent',
			url: ''
		},
		{
			title: 'Code Executer MCP Server',
			description:
				'A Model Context Protocol server that allows LLMs to run code from user prompts.',
			tags: ['Typescript', 'MCP', 'NLP', 'LLMs'],
			github: 'https://github.com/CharlieKerfoot/code-execution-mcp',
			url: ''
		},
		{
			title: 'Rat Computer Vision Model',
			description:
				'A PyTorch CNN trained on sample images to detect rats in NYC apartments via a Raspberry Pi webcam and OpenCV.',
			tags: ['PyTorch', 'CNN', 'Python', 'OpenCV', 'Computer Vision'],
			github: '',
			url: ''
		},
		{
			title: 'Data Analysis & Visualization Blogs',
			description:
				'A collection of blogs analyzing datasets with Pandas and displaying visualizations built in Vega-Altair, MatPlotLib, or D3.',
			tags: ['Python', 'Pandas', 'Vega-Altair', 'Matplotlib', 'D3'],
			github: 'https://github.com/CharlieKerfoot/CharlieKerfoot.github.io',
			url: 'https://charliekerfoot.github.io/'
		},
		{
			title: 'Rust Web Server from Scratch',
			description: 'A HTTP Web Server built out in Rust.',
			tags: ['Rust', 'HTTP', 'HTML', 'Backend'],
			github: 'https://github.com/CharlieKerfoot/web-server-rust',
			url: ''
		},
		{
			title: "Kruskal's Algorithm Implementation",
			description: "An implementation of Kruskal's algorithm in C.",
			tags: ['C', 'Data Structures', 'Maze Generation'],
			github: 'https://github.com/CharlieKerfoot/maze-generation-c',
			url: ''
		},
		{
			title: 'Data Structures in C',
			description: 'A library implementing the core data structures in C.',
			tags: ['C', 'Data Structures'],
			github: 'https://github.com/CharlieKerfoot/data-structures',
			url: ''
		},
		{
			title: 'Haskell Hash Map Implementation',
			description: 'A hash map design in Haskell.',
			tags: ['Haskell', 'Data Structures'],
			github: 'https://github.com/CharlieKerfoot/hashmap-haskell',
			url: ''
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
						class="font-display text-6xl font-black tracking-tighter text-neutral-900 uppercase sm:text-7xl dark:text-white"
					>
						Charlie<br />Kerfoot
					</h1>
					<p
						class="max-w-md font-mono text-lg leading-relaxed text-neutral-800 dark:text-neutral-200"
					>
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
				<div class="hidden h-full w-[2px] bg-neutral-900 lg:block dark:bg-white"></div>

				<!-- Right Side: Quote -->
				<div class="flex flex-col justify-center">
					<blockquote
						class="font-display text-3xl leading-tight font-bold text-neutral-900 uppercase sm:text-4xl dark:text-white"
					>
						"In the cosmic blink of an eye, I will become once again cosmic dust."
					</blockquote>
					<cite
						class="mt-6 block font-mono text-xs font-bold tracking-widest text-neutral-500 uppercase dark:text-neutral-400"
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
						class="border-2 px-8 py-3 font-mono text-sm font-bold tracking-wider uppercase transition-all duration-200
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
							<div
								class="flex h-full flex-col justify-between border-2 border-neutral-900 bg-white p-6 transition-all hover:bg-neutral-50 dark:border-white dark:bg-neutral-950 dark:hover:bg-neutral-900"
							>
								<div>
									<div class="mb-4">
										<h3
											class="font-display text-2xl leading-tight font-bold text-neutral-900 dark:text-white"
										>
											{project.title}
										</h3>
									</div>
									<p
										class="mb-6 font-mono text-sm leading-relaxed text-neutral-600 dark:text-neutral-400"
									>
										{project.description}
									</p>
									<div class="mb-6 flex flex-wrap gap-2">
										{#each project.tags as tag}
											<span
												class="border border-neutral-900 px-2 py-1 font-mono text-xs font-bold text-neutral-900 uppercase dark:border-white dark:text-white"
											>
												{tag}
											</span>
										{/each}
									</div>
								</div>

								<div class="flex gap-3 border-t-2 border-neutral-100 pt-4 dark:border-neutral-800">
									{#if project.github}
										<a
											href={project.github}
											target="_blank"
											class="inline-flex flex-1 items-center justify-center gap-2 border-2 border-neutral-900 bg-transparent px-4 py-2 font-mono text-xs font-bold text-neutral-900 uppercase transition-colors hover:bg-neutral-900 hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-neutral-900"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												><path
													d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
												></path></svg
											>
											GitHub
										</a>
									{/if}
									{#if project.url}
										<a
											href={project.url}
											target="_blank"
											class="inline-flex flex-1 items-center justify-center gap-2 border-2 border-neutral-900 bg-neutral-900 px-4 py-2 font-mono text-xs font-bold text-white uppercase transition-colors hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="16"
												height="16"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												stroke-width="2"
												stroke-linecap="round"
												stroke-linejoin="round"
												><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
												></path><polyline points="15 3 21 3 21 9"></polyline><line
													x1="10"
													y1="14"
													x2="21"
													y2="3"
												></line></svg
											>
											Visit
										</a>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{:else if activeTab === 'Experience'}
				<div in:fly={{ y: 20, duration: 300, delay: 100 }} out:fade={{ duration: 100 }}>
					<div class="grid gap-16 lg:grid-cols-2">
						<section>
							<h2
								class="font-display mb-12 text-4xl font-black text-neutral-900 uppercase dark:text-white"
							>
								Work Experience
							</h2>
							<div class="space-y-12">
								{#each experience as job}
									<div class="relative border-l-2 border-neutral-900 pl-8 dark:border-white">
										<div
											class="absolute top-0 -left-[9px] h-4 w-4 border-2 border-neutral-900 bg-white dark:border-white dark:bg-neutral-950"
										></div>
										<div class="mb-4">
											<h3 class="font-display text-2xl font-bold text-neutral-900 dark:text-white">
												{job.company}
											</h3>
											<div
												class="mt-1 flex flex-wrap gap-x-4 gap-y-1 font-mono text-sm text-neutral-500 dark:text-neutral-400"
											>
												<span class="font-bold text-neutral-900 dark:text-white">{job.role}</span>
												<span>•</span>
												<span>{job.date}</span>
											</div>
										</div>
										<ul
											class="list-disc space-y-3 pl-4 font-mono text-sm leading-relaxed text-neutral-700 dark:text-neutral-300"
										>
											{#each job.points as point}
												<li>{point}</li>
											{/each}
										</ul>
									</div>
								{/each}
							</div>
						</section>

						<section>
							<h2
								class="font-display mb-12 text-4xl font-black text-neutral-900 uppercase dark:text-white"
							>
								Education
							</h2>
							<div class="space-y-8">
								{#each education as edu}
									<div
										class="border-2 border-neutral-900 bg-white p-8 dark:border-white dark:bg-neutral-950"
									>
										<div
											class="mb-6 flex flex-col justify-between gap-2 sm:flex-row sm:items-start"
										>
											<div>
												<h3 class="font-display text-xl font-bold text-neutral-900 dark:text-white">
													{edu.school}
												</h3>
												<p class="font-mono text-sm text-neutral-600 dark:text-neutral-400">
													{edu.degree}
												</p>
											</div>
											<div
												class="text-right font-mono text-xs text-neutral-500 dark:text-neutral-400"
											>
												<p>{edu.date}</p>
												<p>{edu.location}</p>
											</div>
										</div>
										{#if edu.details.length > 0}
											<ul
												class="list-disc pl-4 font-mono text-sm text-neutral-700 dark:text-neutral-300"
											>
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
								<h2
									class="font-display mb-8 text-2xl font-bold text-neutral-900 uppercase dark:text-white"
								>
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
						<h2
							class="font-display mb-8 text-3xl font-black text-neutral-900 uppercase dark:text-white"
						>
							Interests & Activities
						</h2>
						<ul class="grid gap-4 sm:grid-cols-2">
							{#each interests as interest}
								<li
									class="flex items-start gap-3 font-mono text-sm text-neutral-800 dark:text-neutral-200"
								>
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
