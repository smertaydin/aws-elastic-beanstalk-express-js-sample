// noinspection JSUnusedLocalSymbols
exports.handler = async (event, context) => {
	console.log("Handling event:", JSON.stringify(event));

	const body = event.body ? JSON.parse(event.body) : {};
	// noinspection JSUnresolvedVariable
	const input1 = body.input1 || 0;
	// noinspection JSUnresolvedVariable
	const input2 = body.input2 || 0;
	const output = input1 - input2;

	const response = {
		statusCode: 200,
		body: JSON.stringify({
			output: output
		}),
	};
	console.log("Result:", JSON.stringify(response));

	return response;
};
