<script lang="ts">
	import MainNav from '$components/MainNav.svelte';
	import '../styles/globals.css';
	import { Toaster } from 'svelte-french-toast';
</script>

<div class="w-full max-w-7xl mx-auto px-12">
	<Toaster />
	<div
		class="container lg:grid lg:grid-cols-sidebar-content gap-4 flex flex-col items-center lg:items-stretch"
	>
		<MainNav />
		<main class="max-w-xl">
			<slot />
		</main>
	</div>
</div>
