export const sendLoginForm = async (email: string, password: string) => {
	return await fetch("/api/loginUser", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
            password: password,
		}),
	});
};