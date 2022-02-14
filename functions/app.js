exports.handler = async (event, context) => {
	const isim = event.queryStringParameters.isim;
	return {
		statusCode: 200,
		body: `Selamün aleyküm ${isim || 'Dünya'}`
	}
}