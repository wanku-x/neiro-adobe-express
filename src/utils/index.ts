export async function getImageBlob(url: string) {
	return fetch(url).then(async (response) => response.blob())
}
