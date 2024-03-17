<script>
	import { enhance } from '$app/forms'

	export let form
</script>

<div class="container">
	<div class="left">
		<form action="?/login" method="post" use:enhance>
			<h3>Welcome back 🧪</h3>
			<p>Log in to your account</p>
			<div class="input-items">
				<div>
					<input type="text" name="email" id="email" placeholder="Email Address" />
					{#if form?.errors.email}
						<p class="error">{form.errors.email[0]}</p>
					{/if}
				</div>
				<div>
					<input type="password" name="password" id="password" placeholder="Password" />
					{#if form?.errors.password}
						<p class="error">{form.errors.password[0]}</p>
					{/if}
				</div>
				<button type="submit">Log in</button>
			</div>

			<span>
				Don't have an account?
				<a href="/register"> Sign up</a>
			</span>
		</form>
	</div>
	<div class="right">
		<div>
			<span class="logo">Science </span>
			<span class="logo orange">Talk</span>
		</div>

		<p>Where Science Meets Social: Connect, Collaborate, Innovate!</p>
	</div>
</div>

<style>
	.container {
		width: 100vw;
		height: 100vh;
		background-color: #1d1a16;
		display: grid;
		justify-content: center;
		align-items: center;
		grid-template-columns: 35% 65%;
	}

	.left {
		background-color: #f4f3f0;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		box-shadow: 5px 0 #1a01010c;
	}

	form {
		width: 390px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #1d1a16;
	}

	.right {
		color: #f4f3f0;
		width: 400px;
		position: relative;
		margin-left: 4rem;
	}

	.logo {
		display: block;
		font-size: 5rem;
		font-family: 'Bricolage Grotesque', sans-serif;
		font-weight: 700;
	}
	.orange {
		color: #f78208;
	}

	p {
		font-size: 0.875rem;
		color: hsl(48 10% 39% / 1);
	}

	.input-items {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
		margin: 1rem;
	}

	form p {
		font-size: 1rem;
	}

	input {
		width: 315px;
		padding: 1rem;
		background-color: hsl(45 15% 91% / 1);
		border: 0.5px solid #8080807a;
		border-radius: 8px;
	}

	input:hover {
		border: 0.5px solid #808080;
	}

	h3 {
		font-size: 2rem;
	}

	button {
		width: 315px;
		height: 48px;
		background-color: #f78208;
		border: transparent;
		box-shadow: 0 5px #1a010133;
		margin-top: 10px;
		border-radius: 8px;
		color: #1d1a16;
		text-align: center;
		font-size: 1rem;
	}

	button:hover {
		background-color: #f78208ba;
	}

	form span {
		font-size: 0.75rem;
	}

	a {
		color: #6e8eec;
	}

	.error {
		padding-left: 1rem;
		font-size: 0.75rem;
		color: tomato;
	}
</style>
