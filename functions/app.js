exports.handler = async (event, callback) => {
	const isim = event.queryStringParameters.isim;
	return {
		status: 200,
		body: `Selamün aleyküm ${isim || 'Dünya'}`
	}
}