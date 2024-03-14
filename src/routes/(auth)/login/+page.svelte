<form action="?/login" method="post">
	<span class="field">
		<label for="email"> Email </label>
		<input type="text" name="email" id="email" />
	</span>
	<span class="field">
		<label for="password"> Password </label>
		<input type="password" name="password" id="password" />
	</span>

	<span class="field">
		<button type="submit">Log in</button>
		<a href="/register">Register</a>
	</span>
</form>

<style>
	form {
		width: 300px;
		padding: 2rem;
		margin: auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		background-color: rgb(36, 38, 39);

		& label {
			display: block;
		}

		& input {
			padding: 0.3rem 1rem;
		}
	}

	a {
		font-size: 14px;
	}
</style>
