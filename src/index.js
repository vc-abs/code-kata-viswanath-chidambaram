import config from './config';
import { getDataFetcher } from './dataFetcher';

const main = async () => {
	const fetchData = getDataFetcher(config);

	const data = await fetchData();

	// eslint-disable-next-line no-console
	console.table(data);
};

main();
