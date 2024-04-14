import axios from 'axios';

const getDataFetcher = (config) => {
	const configCache = {
		...config,
	};

	const getTodo = async (id) => {
		const { data } = await axios.get(`${ configCache.baseURL }${ id }`);

		return data;
	};

	const fetchData = () => {
		const calls = Array.from({ length: config.documentCount })
			.map((dummy, i) =>
				getTodo((i * configCache.step) + configCache.startingID));

		return Promise.all(calls);
	};

	return fetchData;
};

export {
	getDataFetcher,
};
