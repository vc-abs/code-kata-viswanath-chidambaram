# Code Kata - Viswanath Chidamabaram

	A solution for L1 coding challenge provided by a client.

## Notes

* The problem statement talks about implementing the solution in **golang**, but **JS** was mentioned as one of the technologies in a conversation.

* Client name is not mentioned in the repo to avoid the solution be used by future candidates (the repo will be hosted in github for sometime).

* Though the given problem could be solved by directly getting all todos by calling **/todos**. But this means todos beyond 200 can't be retrieved, as the response doesn't have any HTTP pagination headers.

* Hence **/todos/{id}** is called repeatedly till the given number of todos are retrieved.

* Quite a few items in the solution could be implemented better, but time was a constraint.

# Production
```sh
$ # From Project Root:

$ # Build the docker image.
$ docker build -t ck-vc .

$ # Run the built image.
$ docker run ck-vc
```

# Development
```sh
$ # From Project Root:

$ # Setup the repo for development.
$ bash ./setup.sh

$ # Test the project.
$ npm run test

$ # Run the project.
$ npm start
```
