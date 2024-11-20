// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "price": 175
}

test('Status code should be 200', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const actualStatus=response.status;
		const data = await response.json();
		expect (actualStatus).toBe(200);
	} catch (error) {
		console.error(error);
	}
});


test('Price has been changed', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/products/7`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
		expect(data.ok).toBe(true);
	}  catch (error) {
		console.error(error);
	}
});