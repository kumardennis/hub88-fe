# Hub88 - FE Task

This project is a solution to the Hub88 - FE Task. It consumes a graphql api and renders the results.

### Prerequisites

- Node.js
- npm or yarn
- Docker
- A modern web browser

## Quickstart Development App with Docker

With docker-compose:

```
npm run docker-dev-up
```

Or plain Docker:

```
docker-compose -f docker-compose.dev.yml up
```

Visit localhost at

```
http://localhost:3000
```

## Starting without Docker

### Installing dependencies

Run command in your root directory

```
npm install
```

Or you can use yarn

```
yarn install
```

### Start development server

Run command in your root directory

```
npm start
```

Or you can use yarn

```
yarn start
```

The server will start on

```
http://localhost:3000
```

## Running tests

### Component tests

Component tests are located in `<root>/src/tests`.

In the root directory, run

```
npm run test
```

### End-to-end tests

For the E2E tests, cypress has been used. Tests are located in `<root>/cypress/e2e`.

**You need to have dev server running to run cypress tests**

In the root directory, run

```
npm run cypress:run
```

If you want to monitor tests in Cypress GUI, run

```
npm run cypress:open
```

## Docker information

This app has seperate Dockerfiles for `dev` (development) and `prod` (production) environments:

- `Dockerfile.dev`
- `Dockerfile.prod`

Similarly, seperate `docker-compose` files:

- `docker-compose.dev.yml`
- `docker-compose.prod.yml`

If your container is not running and no new changes occured in build image, run

```
npm run docker-dev-start
```

to start the container.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run cypress:open`

Launches the cypress test runner window to see tests running.

### `npm run cypress:run`

Launches the cypress test runner in CLI to run tests.

### `npm run docker-dev-up`

Runs the `docker-compose -f docker-compose.dev.yml up` command creating a docker image to run.

### `npm run docker-dev-down`

Runs the `docker-compose -f docker-compose.dev.yml down` command.

### `npm run docker-dev-start`

Runs the `docker-compose -f docker-compose.dev.yml start` command.

### `npm run docker-dev-restart`

Runs the `docker-compose -f docker-compose.dev.yml restart` command.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
