const config = require('../config');

test('Status should be 200 OK', async () => {
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		const actualStatus=response.status;
		const data = await response.json();

		expect(actualStatus).toBe(200);
	} catch (error) {
		console.error(error);
	}
});



test('Kit has been deleted', async () => {
    try {
		const response = await fetch(`${config.API_URL}/your/endpoint`, {
			method: 'DELETE',
		});
const data = await json();
expect(data.ok).toBe(true);
	} catch (error) {
		console.error(error);
	}
});