export const sendLoginForm = async (password: string, email: string) => {
	return await fetch("/api/suscribe", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			password,
			email,
		}),
	});
};
export const checkSessionToken = async (token: string) => {
	return await fetch("/api/suscribe", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			token
		}),
	});
};  