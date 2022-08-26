# Meli Test

### Overview

This is an SSR App created with React, Node, Express, Redux.

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
