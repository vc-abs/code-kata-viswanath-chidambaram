import axios from 'axios';

const getDataFetcher = (config) => {
	const state = {
		...config,
		nextID: config.startingID,
	};

	const getTodo = async (id) => {
		const { data } = await axios.get(`${config.baseURL}${id}`);

		return data;
	};

	const fetchData = () => {
		const calls = Array.from({ length: 2 })
			.map((_, i) => getTodo((i * state.step) + state.startingID));

		return Promise.all(calls);
	};

	return fetchData;
};

export {
	getDataFetcher,
};
