<form action="?/register" method="post">
	<span class="field">
		<label for="email"> Email </label>
		<input type="text" name="email" id="email" />
	</span>
	<span class="field">
		<label for="username"> User Name </label>
		<input type="text" name="username" id="username" />
	</span>
	<span class="field">
		<label for="password"> Password </label>
		<input type="password" name="password" id="password" />
	</span>

	<button type="submit">Register</button>
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
</style>
