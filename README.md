# BabylonJS + React Project Template 

A template project for creating 3D real-time web apps using BabylonJS and React.

![Hero image for BabylonJS + React template](docs/images/BabylonReactHero.png)

**DEMO** ➤ https://microsoft.github.io/BabylonJS-React-Template/

---

## Why Use This Project Template?

This project provides a convenient starting point for building 3D web apps with BabylonJS or Cesium.

It also serves as a reference for how to structure a React/Babylon/Cesium app with MSAL authentication, for situations where you prefer setting up your own project.

The project was created with [`npx create-react-app`](https://reactjs.org/docs/create-a-new-react-app.html) and then [ejected](https://create-react-app.dev/docs/available-scripts/#npm-run-eject).

---

## What's Included

* Webpack project, with:
  * [MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js) for AAD authentication
  * [Cesium](https://cesium.com/) dependencies for visualizing geo-spatial data, with a sample scene to get started
  * [BabylonJS](https://www.babylonjs.com/) dependencies for rendering 3D content, with a sample scene to get started
  * [Redux Toolkit (RTK)](https://redux-toolkit.js.org/) for state management
* Build scripts for local deployment
* DevOps build pipelines

---

## Getting Started

### Run Locally

```bash
npm install      # required once 
npm start
