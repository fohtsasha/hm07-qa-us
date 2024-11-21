Sprint 7 project

In this project I wrote tests for 4 different HTTP methods - GET, POST, PUT & DELETE.
API Docs was the source used for the handlers.
I tested each request for two things: the response status code and expected date.
All of the tests were ran in VS Code and later pushed to GitHub using Source Control. 
The coding language is JavaScript.
GET a list of deliveries- api/v1/couriers was tested for Status code being 200 and and ther esonse body having all types of deliveries.
POST Couriers - Delivery: "Speedy"- /speedy/v1/calculate was tested for Status code being 200 and the response having all of the required fields.
PUT Grocery item price change -/api/v1/products/:id was tested for Status code being 200 and the response successfully changing the price "ok":"true"- response 
DELETE Deleting the kit - /api/v1/kits/:id was tested for Status code being 200 and the response successfully deleting the kit "ok";"true"- response

Instructions 
1. Install VS code 
2. Open hm07-qa-us using GITHub
3. Install node.js (npm will automatically install)
4. Run npm init --yes to start npm.
5. Then npm install jest
6. Start the server and copy the link to config.js in "" after the API_URL:(watch out for the / that's added automaticaly), then press save.
7. Open one of the handler tests, open terminal and run npx jest (if you want all of them to run together).
8. TO run the test seperately use npx jest command following file name. 
