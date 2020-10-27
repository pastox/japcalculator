// eslint-disable-next-line no-undef
exports.handler = async function (event, context) {
	if (event.body && event.body.message) {
		return {
			statusCode: 200,
			body: JSON.stringify({ message:  event.body.message}),
		};
	}
	return {
		statusCode: 400
	};
};