<script context="module">
	export const buttonVariants = cva(
		'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:tring-slate-400 focus:ring-offset-2 disabled:opacoty-50 disabled:pointer-events-none gap-x-2',
		{
			variants: {
				variant: {
					default: 'bg-primary text-primary-foreground hover:bg-primary/90',
					ghost: 'bg-background hover:bg-accent'
				},
				size: {
					default: 'h-10 py-2 px-4',
					sm: 'h-9 px-2',
					lg: 'h-11 px-8'
				}
			},
			defaultVariants: {
				variant: 'default',
				size: 'default'
			}
		}
	);
</script>

<script lang="ts">
	// import { Icons } from "@/components/icons";
	import { cva } from 'class-variance-authority';
	import { cn } from '../lib/client/utils';

	const { isLoading, class: className, variant, size, ...props } = $$props;
</script>

<button class={cn(buttonVariants({ variant, size, className}))} on:click>
	{isLoading ? 'Loading...' : ''}
	<slot />
</button>
