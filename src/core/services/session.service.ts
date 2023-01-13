export const sendNewsletterForm = async (url: string, email: string) => {
	return await fetch("/api/suscribe", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email_address: email,
			status: "subscribed",
		}),
	});
};