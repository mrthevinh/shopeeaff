<!-- src/routes/index.svelte -->
<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/posts');
		const data = await res.json();
		console.log(data);
		return { props: { posts: data } };
	};
</script>

<script lang="ts">
	import type { Post } from '$lib/types';
	import { goto } from '$app/navigation';
	import Number from '$lib/Number.svelte';
	
	export let posts: Post[];
	
</script>

<div class="container mx-auto px-6">
	<div class="px-10 py-20 bg-gray-100 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2">
		{#each posts as post}
			<div
				class="max-w-xs rounded-md overflow-hidden shadow-lg hover:scale-105 transition duration-500 cursor-pointer"
				on:click={() => goto('/product/' + post.slug)}
			>
				<div>
					<img src="https://cf.shopee.vn/file/{post.image}" alt={post.name} />
					<!-- https://cf.shopee.vn/file/7f44514efdb00825339201e19c256a9a -->
				</div>
				<div class="py-4 px-4 bg-white">
					<h3 class="text-md font-semibold text-gray-600">{post.name}</h3>
					<!-- <p class="mt-4 text-lg font-thin">{post.price}</p> -->
					<p class="mt-4 text-lg font-thin"><Number number={post.price}/></p>
					<span
						class="flex items-center justify-center mt-4 w-full bg-yellow-400 hover:bg-yellow-500 py-1 rounded"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
						<button class="font-semibold text-gray-800">Chi tiết Sản Phâm </button>
					</span>
				</div>
			</div>
		{/each}
	</div>
</div>
