# Mellow Front End

[Background](#background)

[Overarching App Architecture](#overarching-app-architecture)

[Front End Architecture](#front-end-architecture)

[Tech Stack and Justifications](#tech-stack-and-justifications)

[Useful Scripts](#useful-scripts)

[TO-DO](#TO-DO)

<br/>
## Background

Mental health is a topic that is close to my heart. Recently, I have been doing a lot of research around mindfulness and meditation, and how these simple practices can improve mood, reduce stress, and contribute to an improved sense of wellbeing. 

Throughout my journey thus far I have used several applications for guided meditation and mindfulness. While mindfulness applications (such as Headspace) are amazing for guided meditations, they often lack features around tracking wellness, mood, and past meditations. Therefore, I set out to build an application that not only provides tools during meditation, but also helps track the quality of your meditations over time. Additionally, the app aims to track how other physical factors, such as water intake and daily exercise, contribute to your daily mood over time.

## Overarching App Architecture

- App is split into two discrete services: the **server-side** (back end) and **client-side** (front end). 

- Back end built using **Ruby on Rails** (version 5.2.4.3)
- Front end built using **React + Redux**

Both are available on my GitHub. You are currently viewing the front end repository


## Front End Architecture
The following figure can be found in the root directory as `Architecture.jpg`
<br/>
<br/>
![architecture.jpg](https://github.com/brandonfonseca/mellow_FE/blob/master/Architecture.jpg?raw=true)

## Tech Stack and Justifications

- react
- redux
- Stateless functional components
    - All components are functional rather than class based in this repository. Additionally, no component has any local state (instead they simply share the common redux state)
    - Functional components are far cleaner than class components. This reduces the total number of lines of code and also makes debugging easier
    - Functional components are also more performant than class components since the browser doesn't need to allocate memory for handling lifecycle events
- styled-components
    - Makes styling in react very modular since it's on a component by component basis
    - Makes the code more readable
    - Allows incredible inline styling
    - Styles are scoped inherently
    - Don't have to worry about classNames, instead you pass in props
    - Sass support
    - React Native support
- ImmutableJS
    - Used for the redux store
    - Ensures all objects passed through the store are immutable. This is crucial since objects in redux are not allowed to be mutated
    - Has some handy helper functions
- redux-saga
    - Middleware that allows side effects to be run after an action is dispatched
    - Great for async behavior and easily querying the back end API
- Jest and Enzyme
    - Libraries used for testing
    - Jest is packaged natively in create-react-app
    - Jest has very readable syntax and native support for snapshot testing
    - Enzyme makes it easier to unittest components in react
- Husky
    - Allows local hooks to be run before before commiting or pushing to git. In this case, Husky is used to run the test suite and lint the code before allowing the developer to commit 
- ESLint
    - Used for keeping the code consistent across the repository and ensuring best practices are followed



## Useful Scripts

In the project directory, you can run:

### `yarn (or npm) start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn (or npm) test`

Launches the test runner in the interactive watch mode.<br />

### `yarn (or npm) lint:fix`

Runs the linter against all .js files and automatically corrects eligible errors.<br />

## TO DO

- Finish the mindfulness tab
- Reach 100% test coverage (pretty close right now, but I still have a bit of work to do around explictly testing the sagas)
- Clean up the snapshot tests (they are too large right now)
- Add users and JWT authentication
- Add date range to dashboard tab
- And much more... :)







