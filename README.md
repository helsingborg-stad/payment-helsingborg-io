# labs-api-payment

This is a Node.js & Express api that is used to integrate with Paynova. It has endpoints that should reflect all the functionality of the offical Paynova Api. There is a swagger endpoint setup that should cover basic information on endpoints and their request/response-data. For more detailed information about payment flows, best practice and so on please read the offical <a href="http://developers.paynova.com/docs/">Paynova api docs</a>

## Development

This api is built on Node.js and Express and is created with this <a href="https://github.com/helsingborg-stad/labs-node-js-boilerplate">boilerplate</a>. For instructions on how to run the project and other tech-related information please visit the link.

The specific .env-parameters required for this project are:

- PAYNOVA_MERCHANT_ID (Merchant id for Paynova)
- PAYNOVA_API_PASSWORD (Password for Paynova api)
- PAYNOVA_API_URL (Url for the Paynova api)

Testdata for making test payments can be found in the offical Paynova documentation. 
