// eslint-disable-next-line no-undef
exports.handler = async function (event, context) {
	console.log(event);
	console.log(event.body);
	const bodyObj = JSON.parse(event.body);
	if (bodyObj.message) {
		return {
			statusCode: 200,
			body: JSON.stringify({ message:  bodyObj.message}),
		};
	}
	return {
		statusCode: 400
	};
};