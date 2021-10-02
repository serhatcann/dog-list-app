const getURL = 'https://api.thedogapi.com/v1/images/search?';
const voteURL = 'https://api.thedogapi.com/v1/votes';

export const fetchDogsFromApi = async ({ apiURL = getURL, limit = 10, page = 10, order = 'Desc' }) => {
	try {
		const response = await fetch(`${apiURL}limit=${limit}&page=${page}&order=${order}}`, {
			method: 'GET',
			headers: {
				'X-Api-Key': process.env.REACT_APP_DOG_API_KEY,
			},
		});
		return response.json();
	} catch (error) {
		return error;
	}
};

export const voteDogsApi = async ({ apiURL = voteURL, imageId, vote }) => {
	try {
		const response = await fetch(apiURL, {
			method: 'POST',
			headers: {
				'X-Api-Key': process.env.REACT_APP_DOG_API_KEY,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				image_id: imageId,
				value: vote,
			}),
		});
		console.log(response);
		return response.json();
	} catch (error) {
		return error;
	}
};
