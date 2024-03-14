<script lang="ts">
	import { page } from '$app/stores'
</script>

<header>
	<a href="/"> Science talk </a>
	{#if $page.data.user}
		<p>Hi {$page.data.user.username}</p>
	{/if}

	<nav>
		{#if $page.data.user}
			<li>
				<a href="/logout">logout</a>
			</li>
		{:else}
			<ul>
				<li>
					<a href="/login">login</a>
				</li>
				<li>
					<a href="/register">register</a>
				</li>
			</ul>
		{/if}
	</nav>
</header>
<slot />

<pre>{JSON.stringify($page, null, 2)}</pre>

<style>
	:global(body) {
		background-color: rgb(47, 49, 50);
		color: white;

		& a {
			text-decoration: none;

			&:visited {
				color: white;
			}
			&:hover {
				color: dodgerblue;
				text-decoration: underline;
			}
		}
	}
</style>
