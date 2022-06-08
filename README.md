<div align="center">
  <a href="https://mooveboard.herokuapp.com/">
    <img
      height="205"
      width="200"
      alt="logoMooveBoard"
      src="https://user-images.githubusercontent.com/85451781/172500870-aae1d6ce-b44c-4fe8-a1cc-dc6c7ae47030.png"
    />
  </a>
</div>

## Moove Board

This repository contains the moove board application for the Coding Challenge: Post It Notes App for MooveCamp 2022.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the [typescript template](https://create-react-app.dev/docs/getting-started#selecting-a-template)

# Prerequisites

- Node js: https://nodejs.dev/download
- npm: https://www.npmjs.com/package/npm
- VS(recommended): https://code.visualstudio.com/

# Most important dependencies!

This project includes the next libraries, you could read the official documentation.

- react: https://en.reactjs.org/
- react-scripts: https://github.com/facebook/create-react-app
- react-router-dom: https://reactrouter.com/docs/en/v6
- react-redux: https://react-redux.js.org/introduction/getting-started
- redux-toolkit: https://redux-toolkit.js.org/tutorials/typescript
- typescript: https://www.typescriptlang.org/docs/
- tailwindcss: https://tailwindcss.com/

# Most important dev dependencies!

- eslint: https://eslint.org/
- husky: https://typicode.github.io/husky/#/
- prettier: https://prettier.io/
- lint-staged: https://github.com/okonet/lint-staged
- testing-library-react: https://testing-library.com/docs/react-testing-library/intro/
- testing-library-jest-dom:https://jestjs.io/docs/getting-started#using-typescript

## Available Scripts

In the project directory, you can run:

### `npm install`

Install all the dependencies for the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload when you make changes.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

# Installation

To install this application, you should follow the steps below:

1. Clone this repo: `git clone https://github.com/SandraCalero/MooveBoard.git`

2. Run: `npm -i` or `npm install`

# Usage

To use this application locally, you should follow these steps below:

1. Install the web application according to the [above steps](#installation)

2. Run `npm start`.

3. The browser will open the web app at http://localhost:3000. You can also use the app from another device using the IP address of the local network.

# Considerations:

## About Branching and Commits

Branch convention is based on the [gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) specification, instead of a single main branch, this workflow uses two branches to record the history of the project. The main branch stores the official release history, and the develop branch serves as an integration branch for features.

**Branching Workflow:**

- create a develop(parent) branch to serve as an integration branch for the features.
- create a branch for each activity or feature, e.g. "redux" or "create-post-it".
- merge all work on develop branch and create merge request

Example:

- develop -> redux
- redux -> develop

**Note:** The main branch is used to deployment.

Follow this steps when you do a commit :

1. JS linter: It is executed automatically when committing. For this the command `npx mrm@2 lint-staged` was used, this command will install and configure husky and lint-staged based on the code quality tools from this project's package.json dependencies.

2. Unit tests must pass completely.

3. Commit messages should begin with the first three letters of the activity that was performed, followed by where where the implementation took place.

   - Must be one of the following:

   **ADD**: when something was added to the project
   **UPD**: when there was an update
   **FIX**: when an error was fixed
   **DEL**: when something was deleted

   **IE commit message:**

```
    UPD: readme file
```

## About Tests

**Execute test:**

```
    npm test
```

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# Authors

Sandra Calero - [linkedin](https://www.linkedin.com/in/sandra-liliana-calero/)
Project for [Moove It](https://moove-it.com/)
