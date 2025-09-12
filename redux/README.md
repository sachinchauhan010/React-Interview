# Redux

## What is Redux?
> Redux is the predictable state for JavaScript applications, designed to manage the state of an app in predictable way.

## Why Redux?
1. **State Container:** Redux act like a centralized store that holds and manages the state of an application or its components. The Centralization simplifies the state management, making it more organized and accessible.
2. **Predictable:**In Redux, all state transitions are explicit, and it becomes possible to keep track of them.


## 3 Core Concept of Redux
1. **Store (or Redux Store)** 
   * **Holds the state of app.** There one store for entire application.
   * It is a global state of an application is stored in an object tree with in single store.
   * Responsibilities of the Redux store include
     * holding the application state
     * allowing access the state via `getState()`
     * enable state update via `dispatch(action)`
     * registering listeners via `subscribe(listner)`

2. **Action**
   * **Describes changes in the state**
   * Actions are the only way your application can interact with the redux store.
   * They carry the information from your app to redux in the form of plane javascript object.
   * Actions have type property that indicates the type of action being performed.
   * An action creator creates an action, which is a function that returns an action.

3. **Reducer**
   * A Reducer is a function that accepts the current state and an action as argument, returning the next state of application.
   * **Carries out the state transition based on the action**

![OpenAI Logo](https://openai.com/favicon.ico)

   

