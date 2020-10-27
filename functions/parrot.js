// eslint-disable-next-line no-undef
exports.handler = async function (event, context) {
	const eventObj = JSON.parse(event)
	if (eventObj.body && eventObj.body.message) {
		return {
			statusCode: 200,
			body: JSON.stringify({ message:  eventObj.body.message}),
		};
	}
	return {
		statusCode: 400
	};
};