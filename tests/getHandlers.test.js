const config = require('../config');

test('Get Status should be 200', async () => {
	let actualStatus;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/couriers`);
		actualStatus = response.status;
	} catch (error) {
		console.error(error);
	}
	expect(actualStatus).toBe(200);
});

test('Response body should have all types of deliveries', async () => {
	let expectedDeliveryTypes
	try {
		response = await fetch(`${config.API_URL}/api/v1/couriers`);
	} catch (error) {
		console.error(error);
	}
	let data = await response.json();
	expectedDeliveryTypes = ["Order and Go", "Speedy", "Fast Delivery", "Food Service"];
	const receivedDeliveryTypes = data.map(d => d.name);
	expectedDeliveryTypes.forEach(type => {
		expect(receivedDeliveryTypes).toContain(type);});
});