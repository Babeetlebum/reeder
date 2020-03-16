# reeder
A simple reader app

## State
**Work in progress**. The backend is nearly done but the frontend part is far from being ready at the moment

## Why and How
This app is a simple personal project to expand my knowledge on technologies I'm interested in.

A frontend allows to sign in and choose books to read from the Gutenberg free books library. The books are dissected into paragraphs and saved in a MySQL database through a REST API. The reading progress is being saved as the user parses the book.

## Frontend
Angular is always my go-to choice for the frontend part of a new project but I decided to add a few twist to my usual frontend stack.

### CSS
Instead of bootstrap I wanted to try Tailwind CSS, it doesn't have the best integration with angular so far but it is a powerful and easy to learn CSS framework.

### State Container
I never had the chance to try my hand at a state container, this app was the perfect opportunity to take a closer look at the NgRx framework inspired by Redux and hopefuly gone will be the days of scratching my head because of object mutability.

### Directory structure
In my experience, angular projects tend to sprawl into a headache inducing mess. In order to mitigate this issue I spent a good amount of time reading on this issue and came out with a healthy mix of good practices.

## Backend
I heard a lot of good (and bad) things about Java but never had the chance to witness its power first hand.

### Framework
From what I heard the best introduction to Java is via the Spring Boot framework so that's where I headed. Building a simple REST API with Spring Boot is a piece of cake, but when the first difficulties arise... that's where it gets interesting

### JPA
Saving an entity is fast and reliable, but a book is a not a simple entity. Saving thousands of paragraphs requires to enable batch saving and in order to smooth out the frontend experience, the saving process needs to by asynced: only the hundreds first few paragraphs are being sent back by the API while the rest of the book is concurrently being saved.

### Security
An API needs to be secured. Fortunately Spring Boot allows to add filters, password encryption, jwt generation and validation with the help of a few libraries

## Deployment

### Docker
Both the front app and the rest API contain
* a `builder` docker container to build the app with consistent tooling version
* a `webserver` container to test the application in a dev environment
* a minimal docker image containing the dockerized app for deployment

### CI / CD
Nothing yet, but github actions and unit testing are planned as soon as the deployment flow is finalized.

### Google Cloud Platform
Working a lot with google APIs recently I wanted to give GCP a try. It offers cheap simple solutions for a test project.
When in need of persistent data, a `Compute engine` VM is a cheaper solution than using `Cloud SQL` + `Cloud Run` to host the database and the REST API. The frontend stateless part can be easily dockerized and deployed via `Cloud Run`.

## TODO :
1. frontend : book choosing
2. frontend : book reading
3. backend : async save
4. deployment : github actions
