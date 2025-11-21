<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import * as THREE from 'three';
	import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
	import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
	import { Footer } from '$lib';

	let container: HTMLDivElement;
	let renderer: THREE.WebGLRenderer;
	let scene: THREE.Scene;
	let camera: THREE.PerspectiveCamera;
	let textMesh: THREE.Mesh;
	let animationId: number;
	let observer: MutationObserver;

	onMount(() => {
		init();
		animate();
		setupThemeObserver();
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('resize', onWindowResize);
			cancelAnimationFrame(animationId);
			if (renderer) renderer.dispose();
			if (observer) observer.disconnect();
		}
	});

	function setupThemeObserver() {
		const updateTheme = () => {
			if (!scene) return;
			const isDark = document.documentElement.classList.contains('dark');
			// Dark: gray-950 (0x030712 - tailwind v4 or 0x111827 - v3), Light: gray-50 (0xf9fafb)
			// Using the values from app.html/css context if possible, or standard tailwind colors.
			// Previous dark was 0x111827. Let's stick to that for dark.
			// Light mode background: 0xf9fafb
			const targetColor = isDark ? 0x111827 : 0xf9fafb;
			scene.background = new THREE.Color(targetColor);
		};

		// Initial check
		updateTheme();

		// Observer
		observer = new MutationObserver(updateTheme);
		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});
	}

	function init() {
		// Scene
		scene = new THREE.Scene();
		// Background set by setupThemeObserver immediately after init

		// Camera
		camera = new THREE.PerspectiveCamera(
			45,
			container.clientWidth / container.clientHeight,
			1,
			10000
		);
		camera.position.set(0, 0, 600);

		// Lights
		const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
		scene.add(ambientLight);

		const dirLight = new THREE.DirectionalLight(0xffffff, 1);
		dirLight.position.set(100, 200, 100);
		scene.add(dirLight);

		// Renderer
		renderer = new THREE.WebGLRenderer({ antialias: true });
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(container.clientWidth, container.clientHeight);
		container.appendChild(renderer.domElement);

		// Load Font and Create Text
		const loader = new FontLoader();
		loader.load(
			'https://threejs.org/examples/fonts/helvetiker_bold.typeface.json',
			function (font) {
				const geometry = new TextGeometry('Under Construction', {
					font: font,
					size: 40,
					curveSegments: 12,
					bevelEnabled: true,
					bevelThickness: 2,
					bevelSize: 1,
					bevelOffset: 0,
					bevelSegments: 5
				});

				geometry.computeBoundingBox();
				const xMid = -0.5 * (geometry.boundingBox!.max.x - geometry.boundingBox!.min.x);
				geometry.translate(xMid, 0, 0);

				const material = new THREE.MeshStandardMaterial({
					color: 0x3b82f6, // Blue-500
					roughness: 0.4,
					metalness: 0.3
				});

				textMesh = new THREE.Mesh(geometry, material);
				scene.add(textMesh);
			}
		);

		window.addEventListener('resize', onWindowResize);
	}

	function onWindowResize() {
		if (!container || !camera || !renderer) return;
		camera.aspect = container.clientWidth / container.clientHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(container.clientWidth, container.clientHeight);
	}

	function animate() {
		animationId = requestAnimationFrame(animate);
		if (textMesh) {
			textMesh.rotation.y += 0.01;
			textMesh.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
		}
		if (renderer && scene && camera) {
			renderer.render(scene, camera);
		}
	}
</script>

<div class="flex min-h-screen flex-col">
	<div class="relative flex-1" bind:this={container}>
		<!-- Back Button -->

		<div class="pointer-events-none absolute inset-0 flex items-end justify-center pb-12">
			<p class="text-sm text-gray-400">
				This 3D experience is currently being built. Check back soon!
			</p>
		</div>
	</div>
</div>
