// eslint-disable-next-line no-undef
exports.handler = async function (event, context) {
	return {
		statusCode: 418,
		body: JSON.stringify({ message: "Hello" }),
	};
};