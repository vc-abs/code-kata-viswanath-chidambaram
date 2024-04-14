import config from './config';
import { getDataFetcher } from './dataFetcher';

const main = () => {
	const fetchData = getDataFetcher(config);

	const data = fetchData();

	// eslint-disable-next-line no-console
	console.table(data);
};

main();
