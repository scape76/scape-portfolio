<script lang="ts">
  import Button from "./Button.svelte";
  import { siteSections } from "../config/site";

  function handleAnchorClick(event: MouseEvent) {
		event.preventDefault();
		const link = event.currentTarget as HTMLAnchorElement;
		const anchorId = new URL(link.href).hash.replace('#', '');
		const anchor = document.getElementById(anchorId);
		window.scrollTo({
			top: anchor?.offsetTop,
			behavior: 'smooth'
		});
	}
</script>

<aside class="hidden lg:block pt-16">
	<div class="sticky top-16 flex flex-col gap-2">
		{#each siteSections as section}
			<a href={section.href} on:click={handleAnchorClick}>
				<Button variant="ghost" class="w-full">
					{section.title}
				</Button>
			</a>
		{/each}
	</div>
</aside>
