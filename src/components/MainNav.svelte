<script lang="ts">
	import Button from '$components/Button.svelte';
	import { siteSections } from '../config/site';
	import OutClick from '$components/OutClick.svelte';

	let isPhoneNavVisible = false;

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

	const handlePhoneNavVisibility = () => {
		isPhoneNavVisible = !isPhoneNavVisible;
	};
</script>

<div class="max-w-xl lg:hidden p-4 w-full flex justify-between items-center">
	<span>Scape</span>
	<OutClick on:outclick={(_) => (isPhoneNavVisible = false)}>
		<button
			class="relative navbar-burger flex items-center text-accent-foreground p-3"
			on:click={handlePhoneNavVisibility}
		>
			<svg
				class="block h-4 w-4 fill-current"
				viewBox="0 0 20 20"
				xmlns="http://www.w3.org/2000/svg"
			>
				<title>Mobile menu</title>
				<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
			</svg>
			<div
				class={`${
					isPhoneNavVisible ? '' : 'hidden'
				} absolute bg-popover p-2 top-8 right-8 rounded block w-[160px]`}
			>
				{#each siteSections as section}
					<a href={section.href} on:click={handleAnchorClick} class="w-full">
						<Button variant="ghost">
							{section.title}
						</Button>
					</a>
				{/each}
			</div>
		</button>
	</OutClick>
</div>

<aside class="hidden lg:block pt-16 hidden">
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
