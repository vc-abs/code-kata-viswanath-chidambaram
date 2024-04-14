import config from './config';
// eslint-disable-next-line no-unused-vars
import axios from 'axios';
import { getDataFetcher } from './dataFetcher';

jest.mock('axios', () => ({
	get: (url) => Promise.resolve({ data: url }),
}));

describe('dataFetcher', () => {
	// eslint-disable-next-line max-len
	test('The function returned from dataFetcher calls the API appropriately and returns the response as an array of objects.', async () => {
		const fetchData = getDataFetcher(config);

		const data = await fetchData();

		expect(data.length).toEqual(config.documentCount);

		data.map((mockResponse, i) => {
			expect(mockResponse)
				.toEqual(`${ config.baseURL }${ (i * config.step) + config.startingID }`);
		});
	});
});
