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
		 actualStatus=response.status;
		
	} catch (error) {
		console.error(error);
	} expect(actualStatus).toBe(200);
});



test('Speedy delivery should have all required fields ', async () => {
	let expectedSpeedyDelivery;
    try {
		const response = await fetch(`${config.API_URL}/speedy/v1/calculate`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		expectedSpeedyDelivery = await response.json();
}
 catch (error) {
		console.error(error);
	}
	expect(expectedSpeedyDelivery).toEqual({
       "name": "Speedy",
       "clientDeliveryCost": 7,
       "toBeDeliveredTime": { "min": 30, "max": 35 },
       "hostDeliveryCost": 7,
       "isItPossibleToDeliver": true
})

});
