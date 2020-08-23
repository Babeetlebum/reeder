[![<Babeetlebum>](https://circleci.com/gh/Babeetlebum/reeder.svg?style=shield)](<LINK>)


# reeder
A simple reader app.

Goal :
* The books are retrieved from the [Gutenberg](https://www.gutenberg.org/) online free library
* Users can sign up / sign in, search for books and read them. Their progress is saved.

## State
**Work in progress**.

http://reeder.williamlambert.fr/
* [ ] Interface is temporary and not responsive yet
* [x] Sign in works
* [x] Book list display works
* [x] Book searching works
* [x] JWT authorization works
* [ ] Sign up is not wired yet (implemented in backend)
* [ ] Book reading is not wired yet (implemented in backend)
* [ ] Reading progress is not saved yet

## Why and How
This app is a simple personal project to expand my knowledge on technologies I'm interested in.

A frontend allows to sign in and choose books to read from the Gutenberg free books library. The books are dissected into paragraphs and saved in a MySQL database through a REST API. The reading progress is being saved as the user parses the book.

## Frontend
Angular is always my go-to choice for the frontend part of a new project but I decided to add a few twist to my usual frontend stack.

### CSS
Instead of bootstrap I wanted to try Tailwind CSS, it doesn't have the best integration with angular so far but it is a powerful and easy to learn CSS framework.

### State Container
I never had the chance to try my hand at a state container, this app was the perfect opportunity to take a closer look at the NgRx framework inspired by Redux. It's been a blast to use so far. 

### Directory structure
In my experience, angular projects tend to sprawl into a headache inducing mess. In order to mitigate this issue I spent a good amount of time reading on this issue and came out with a healthy mix of good practices.

## Backend
I wanted to try a Java backend for this project to see how easy it would be to deploy a simple REST API.

### Framework
From what I heard the best introduction to Java is via the Spring Boot framework so that's where I'm headed. Building a simple REST API with Spring Boot is a piece of cake, but when the first difficulties arise, it gets interesting.

### JPA
Saving an entity is fast and reliable, but a book is a not a simple entity. Saving thousands of paragraphs requires to enable batch saving and in order to smooth out the frontend experience, the saving process needs to by asynced: only a few hundreds first paragraphs are being sent back by the API while the rest of the book is concurrently being saved.

### Security
An API needs to be secured. I implemented a jwt authentification with the help of a few libraries and slightly customized it to my liking.

## Deployment

### Docker
Both the front app and the rest API contain
* a `builder` docker container to build the app with consistent tooling version
* a `webserver` container to test the application in a dev environment
* a minimal docker image containing the dockerized app for deployment

### CI / CD
CircleCI builds the project and run tests, no deployment yet.

