import axios from 'axios';

const getDataFetcher = (config) => {
	const state = {
		...config,
		nextID: config.startingID,
	};

	const fetchData = async () => {
		const response = await axios.get(`${state.baseURL}${state.nextID}`);

		state.nextID += state.step;

		return [response.data];
	};

	return fetchData;
};

export {
	getDataFetcher,
};
