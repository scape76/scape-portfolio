<script lang="ts">
	import Button from '$components/Button.svelte';
	import toast, { Toaster } from 'svelte-french-toast';
	import type { PageData } from './$types';
	import { siteSections } from '../config/site';

	export let data: PageData;

	function handleClick() {
		toast('@scape76 on Telegram\n scapex76 on Discord', { duration: 6000 });
	}
</script>

<section id="about-me" class="flex flex-col justify-between md:flex-row items-center gap-10 mt-4">
	<div>
		<h1 class="text-2xl md:text-4xl text-foreground font-bold">
			Hi, my name is Danya and I am a web developer.
		</h1>
		<div class="flex gap-4 mt-4">
			<Button on:click={handleClick}>
				<span> Contact me </span>
			</Button>
			<a
				href="https://drive.google.com/file/d/1VZWUbSNpIE92lbvHs86n24dlj8O9Zqoh/view?usp=sharing"
				target="_blank"
				rel="noreferrer"
			>
				<Button variant={'ghost'}>
					<span> Resume </span>
				</Button>
			</a>
		</div>
	</div>
	<img
		loading="lazy"
		decoding="async"
		class="aspect-square max-w-xs rounded-full min-w-[13rem] w-[60%] md:w-2/4"
		src="/selfie.jpg"
		alt="my selfie"
	/>
</section>
<hr class="w-full border border-border my-6" />
<section id="projects" class="w-full flex flex-col gap-4 items-center md:items-start">
	<h2 class="text-foregound text-xl md:text-3xl font-semibold">My last projects {'</>'}</h2>
	{#each data.posts as p}
		<div
			class="rounded-lg mt-2 bg-base-100 hover:shadow-xl transition ease-in-out hover:scale-[102%] w-full"
		>
			<a href={p.link} target="_blank" rel="noreferrer">
				<div class="flex flex-col md:flex-row items-center justify-center gap-4 p-4">
					<img
						src={p.imagePath}
						alt="cat"
						class="max-w-full aspect-video md:max-w-[13rem] rounded-lg"
						width="750"
						height="422"
						loading="lazy"
						decoding="async"
					/>
					<div class="grow w-full">
						<h1 class="text-xl font-bold text-foreground">{p.title}</h1>
						<p class="py-1 text-foreground">
							{p.content}
						</p>
					</div>
				</div>
			</a>
		</div>
	{/each}
</section>
