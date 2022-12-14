# Meli Test

## how to Run

### Running with Docker

1. **Add a .env file** you can use the .env.sample file
2. run `docker-compose up -d` at the root path of the project

### Running locally

1. **Add a .env file** you can use the .env.sample file
2. Clone the repository
3. At the root of the project run `npm install`
4. run `npm run start`

## Technical Overview

This is an SSR App created with React, Node, Express, Redux.
Note: This same behaviour could have been approached using Next.js, however in order to follow the specific stack required for this test pure React.js was used.

### WHY SSR?

On the "Notes" section of the requirements for this test said that the app had to be:

- Usability
- SEO
- Performance
- Scalability

This stack complies with all those requirements, as SSR provides great SEO and Scalability. Also, from my point of view the app is very usable and it matches the requirements of the test. On the other hand, sacalability from a technical is not the strongest point mostly because this is a monolithic application and having both Frontend and Backend in the same project is not always what one would aim for, but it boosts performance and SEO, and there's always a way to get around this issue by using git submodules or another type of folder structure when it becomes necessary.

### SEO

This app provides a really strong SEO approach by first executing a render on the server side and implementing redux and node, injecting data directly from the server to the React component `MainProduct.js`, avoiding a fetch to the API which affects performance (not in a really painful way but somehow it does) this makes the products to perform really well and easily be crawled on search engine.

### Redux

Redux is used to inject an initial state directly to the component `MainProduct.js` for boosting performance and saving the need to fetch the API but it can also be used to create reducers and manage the state of the App as it scales.

### Styling

Sass was used to create the styling for the application as required in the test specifications.

## Git flow

Used git flow methodology to have a clean and better integration implementing features any kind of task.
Also used prettier, eslin, husky and lint staged to perform formatting operations and give hints.
