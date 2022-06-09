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

<h1 align="center"> Moove Board </h1>
<h2 align="center"><a href="https://mooveboard.herokuapp.com/">Try Demo Now!</a></h2>

This repository contains the moove board application for the Coding Challenge: Post It Notes App for MooveCamp 2022.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the [typescript template](https://create-react-app.dev/docs/getting-started#selecting-a-template)

## Features

### Create a new Post it.

![create_postIt](https://user-images.githubusercontent.com/85451781/172679608-0fe75c48-4bfa-468c-8fd8-16133fd6183c.gif)

### See all Post its in the workspace.

<img
     width="450"
     alt="workspace"
     src="https://user-images.githubusercontent.com/85451781/172681213-f06e6dcd-760b-4eca-9cb0-27154623be90.png"
/>

### Edit a Post it.

![edit_postIt](https://user-images.githubusercontent.com/85451781/172684440-6fccd552-7878-4371-9460-6355737e9f5c.gif)

### Move a Post it to the trash bin.

![moveToTrash](https://user-images.githubusercontent.com/85451781/172685236-fdc94c1f-229e-473f-8aba-7d744ff6c290.gif)

### Move all Post its to the trash bin.

![move_all_to_trash](https://user-images.githubusercontent.com/85451781/172688059-372e747a-bb27-4150-8fd3-fb04ec79b4fa.gif)

### Open the trash bin to see all Post its that have been moved there.

![open_trash](https://user-images.githubusercontent.com/85451781/172689567-ff7edb8a-5c73-45c9-abba-e8b2b0113028.gif)

### Move a Post it from the trash bin to the workspace.

![restore_postIt](https://user-images.githubusercontent.com/85451781/172690787-ec33ec96-182c-423b-a149-86e8b0652bf7.gif)

### Move all Post its from the trash bin to the workspace.

![restore_all](https://user-images.githubusercontent.com/85451781/172692130-a606c73e-81c3-4222-a1d7-5e58e5df45e8.gif)

### Permanently delete a Post it in the trash bin.

![delete_postIt](https://user-images.githubusercontent.com/85451781/172699344-6c40ebcf-e071-4337-b971-f91184a26e21.gif)

### Permanently delete all Post its in the trash bin.

![delete_all](https://user-images.githubusercontent.com/85451781/172701778-d7321fd6-129b-4b4d-b8a0-a60c77298837.gif)

### See if the trash bin has Post its by looking the trash bin icon.

- **Trash bin is empty**

![empty_trash_bin](https://user-images.githubusercontent.com/85451781/172695182-588c011c-11ff-4342-88be-ec54ba1928b4.png)

- **Trash bin is not empty**

![not_empty_trash_bin](https://user-images.githubusercontent.com/85451781/172695201-be936c04-5b5b-4a83-9aba-2d4ed7fa4438.png)

### Toggle between dark mode and light mode.

![toogle_dark_mode](https://user-images.githubusercontent.com/85451781/172693248-1689a8e9-4c9c-4f75-bf85-6c664adfe960.gif)

### Order by newest or oldest

![order](https://user-images.githubusercontent.com/85451781/172694301-d49d257f-d947-4511-b001-c4357c9a6aeb.gif)

### Responsive design

![responsive](https://user-images.githubusercontent.com/85451781/172670693-4acc38f0-872c-49ed-9b19-ba69c8b45437.gif)

## Prerequisites

- Node js: https://nodejs.dev/download
- npm: https://www.npmjs.com/package/npm
- VS(recommended): https://code.visualstudio.com/

## Most important dependencies!

This project includes the next libraries, you could read the official documentation.

- [react](https://en.reactjs.org/): This is the library/framework used to build the application.
- [react-router-dom](https://reactrouter.com/docs/en/v6): The routing of this application is managed with react-router-dom.
- [react-redux](https://react-redux.js.org/introduction/getting-started): It is used to handle the global state of the application.
- [redux-toolkit](https://redux-toolkit.js.org/tutorials/typescript): The official toolkit for efficient Redux development.
- [typescript](https://www.typescriptlang.org/docs/): This project is built using typescript and was created using the template provided by create react app `npx create-react-app my-app --template typescript`
- [tailwindcss](https://tailwindcss.com/): This is the framework used for the styles of the app

## Most important dev dependencies!

- [eslint](https://eslint.org/): This is the lint to check the use of the style guide
- [eslint-config-airbnb](https://github.com/airbnb/javascript): This is the style guide used
- [husky](https://typicode.github.io/husky/#/): Used to check that the files comply with the style guide used in the project at the time of commit.
- [prettier](https://prettier.io/): This is the formatter used in the project, which has a configuration explained in more detail below.
- [lint-staged](https://github.com/okonet/lint-staged): Used in conjunction with husky to checker the linter during the commit.
- [testing-library-react](https://testing-library.com/docs/react-testing-library/intro/): Allows to perform tests by rendering components in a DOM.
- [testing-library-jest-do](https://jestjs.io/docs/getting-started#using-typescript): This is the framework used for testing in conjunction with the react testing library.

## Installation

To install this application, you should follow the steps below:

1. Clone this repo: `git clone https://github.com/SandraCalero/MooveBoard.git`

2. Install all the dependencies for the project by executing the command `npm -i` or `npm install`

## Usage

To use this application locally, you should follow these steps below:

1. Install the web application according to the [above steps](#installation)

2. Runs the app in the development mode by executing the command `npm start`.

3. The browser will open the web app at http://localhost:3000. You can also use the app from another device using the IP address of the local network.

4. The page will reload when you make changes and you will also see any lint errors in the console.

### Redux DevTools

To use redux and validate its use in the DEV environment, install the chrome extension [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd)

## Considerations:

### About structure

The structure of this project is separated into folders by responsibility within the project as follows:

**assets**
Contains a folder called icons, inside which are all the images used for the icons inside the body of the application.

**components**

The structure used in which the organization of the functional components is based on the methodology of creation of design systems [Atomic Design](https://atomicdesign.bradfrost.com/) from which the following levels were taken:

- Atoms: These are the basic components of matter. Applied to this project, atoms are the smallest component that does not contain other components within itself, such as a button.
- Molecules: Molecules are groups of atoms bonded together and are the smallest fundamental units of a compound. These molecules acquire their own properties and serve as the backbone of our design systems.
- Organisms: Organisms are groups of molecules bonded together to form a relatively complex and distinct section of an interface.
- Templates: Templates consist primarily of groups of organisms joined together to form pages. This is where we begin to see the design as a whole.

Each component stores the following in its own folder:

- The functional component.
- Its own custom hook files,
- A folder containing the component's tests
- If necessary, there would be a file containing the component's styles.

**globals**
Contains the global constants defined for the project such as the interfaces for the Post It components.

**redux**

This project uses Redux to manage the state of the application. For this reason, the following is a comment about the structure of redux

This project has a root folder called redux structured as follows

    redux
        reducers
        store

- **reducers:** Contains the two slices of the redux store, one to handle the state and reducers of the trash bin and the other to handle the state and reducers of the workspace.

- **store:** The store holds the state of the application.

**styles**
Contains the index.css file inside which there are @tailwind directives for each of Tailwind’s layers.

**utils**
Contains the utilities necessary for the global use of the application.

The **Root.tsx** component, wraps the application so it is where the provider is located and where the routes of the application are managed.

### About Branching and Commits

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

3. Commit messages should begin with the first three letters of the activity that was performed, followed by where the implementation took place.

   Must be one of the following:

   - **ADD**: when something was added to the project
   - **UPD**: when there was an update
   - **FIX**: when an error was fixed
   - **DEL**: when something was deleted

   **IE commit message:**

```
    UPD: readme file
```

### About Tests

In the project we can test two important elements such as components and hooks. However, there are only tests created for the components.
For the components we must make the import of the render method that is obtained from path `utils/tests/test-utils`.

```
    import { render } from 'utils/tests/test-utils';
```

**Execute test:**

Use command `npm test` to launch the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### About relevant technical decisions made

1. It was decided to use typescript for this project because it is a strongly typed programming language that, as a superset of javascript, is compatible with javascript. It is known to be structured, highly secure and more consistent than vanilla JavaScript, any typescript checking runs at compile time and VSCode allows to visualize typing errors just by understanding the typescript extension of a file so it is possible to check types and identify errors at compile time.

2. This application does not use back end services, for this reason, the application state for the workspace and the trash bin is saved in the local storage.

3. This application follows the Airbnb style guide, to check all files automatically eslint was installed, whose configuration is in the .eslintrc.js file. Additionally prettier is being used as a formatter, and due to conflicts that may arise between eslint and prettier, the .prettierrc file was created to configure prettier so that eslint styles take precedence. It was taken into account that the auto-generated files should not be formatted or taken into account in eslint, so they were listed in the .eslintignore and .prettierignore files.

4. In order to avoid commits of files that do not comply with the style guide configured in the project, the command `npx mrm@2 lint-staged` was used, which creates the husky script that executes the lint-staged that validates the files and prevents the commit of those that do not comply with the eslint.

5. Although the Post-it and the Post-it list of the workspace and the trash bin look the same, their behavior, the type of properties and some characteristics are very different, so managing a single component for the workspace and the trash bin would not follow the SRP since the number of variables and different functions would significantly increase the size of the component.

6. Tailwindcss was used for the styling of the application because it allows to build websites quickly and its mobile first approach makes it easier to develop responsive applications.

### Functional components standard

As an adaptation to airbnb style guide and Typescript we encourage the usage of this function declaration:

    ```
    export default function Component({ message }: AppProps) {
      return (
    	<div>{message}</div>
    );
    }
    ```

As we see in the example above this is a declarative function with **typed props** (props should be an `AppProps` so we could not pass anything different).

### Deployment

This application is deployed on [Heroku](https://www.heroku.com/) using the github connection. The main branch is synconized with heroku so all the updates made on this branch will be deployed in the url https://mooveboard.herokuapp.com/.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

Sandra Calero - [linkedin](https://www.linkedin.com/in/sandra-liliana-calero/)

Project for [Moove It](https://moove-it.com/)
