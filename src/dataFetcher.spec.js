import config from './config';
import { getDataFetcher } from './dataFetcher';

describe('dataFetcher', () => {
	// eslint-disable-next-line max-len
	test('The function returned from dataFetcher calls the API appropriately and returns the response as an array of objects.', () => {
		const fetchData = getDataFetcher(config);

		const data = fetchData();

		expect(data.length).toEqual(1);
	});
});
