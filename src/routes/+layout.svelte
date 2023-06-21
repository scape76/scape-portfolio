<script>
	import '../styles/globals.css';
	import { Toaster } from 'svelte-french-toast';
</script>

<div class="w-full max-w-5xl mx-auto px-4">
	<Toaster />
	<slot />
</div>
