// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
   "deliveryTime": 9,
    "productsCount": 10,
    "productsWeight": 11
}
test('Status should be 200', async () => {
	let actualStatus;
    try {
		const response = await 
		fetch(`${config.API_URL}/speedy/v1/calculate`,
			{
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const actualStatus=response.status;
		
	} catch (error) {
		console.error(error);
	} expect(actualStatus).toBe(200);
});


test('Speedy delivery should have all required fields ', async () => {
	let expectedSpeedyDelivery
    try {
		const response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const data = await response.json();
const expectedSpeedyDelivery = ["name", "clientDeliveryCost","toBeDeliveredTime","hostDeliveryCost","isItPossibleToDeliver"]
		});

} catch (error) {
		console.error(error);
	}
	const receivedFields = Object.keys(data);
		expectedSpeedyDelivery.forEach(field => {
			expect(receivedFields).toContain(field);

});



