const config = require('../config');

test('Status should be 200 OK', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
			method: 'DELETE',
		});
		actualStatus = response.status;

	} catch (error) {
		console.error(error);
	} expect(actualStatus).toBe(200);
});


test('Kit has been deleted', async () => {
	let data;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
			method: 'DELETE',
		});
		data = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect(data).toEqual({
        ok: true
    });
});