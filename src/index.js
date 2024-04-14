import config from './config';
import { getDataFetcher } from './dataFetcher';

// #TODO: Extract this as a service.
const formatToDo = ({ title, completed }) => ({ title, completed });

const main = async () => {
	const fetchData = getDataFetcher(config);

	const todos = await fetchData();
	const formattedTodos = todos.map(formatToDo);

	// eslint-disable-next-line no-console
	console.table(formattedTodos);
};

main();
