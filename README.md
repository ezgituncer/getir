React – A JavaScript library for building user interfaces

# Getir Case Study



## Intro 

* This project only developed with Front-End technology [React.js](https://reactjs.org/)

* Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

* Dependencies are handled by [npm](https://www.npmjs.com/)



## Project Detail

* Use item.json endpoints.


# Installation

 bash
# clone the repo
$ git clone git@github.com:ezgituncer/getir.git

# go into app's directory
$ cd getir

# install app's dependencies
$ npm install



# Basic usage

### Start
 bash
# dev server with hot reload at http://localhost:3000
$ npm start


Navigate to [http://localhost:3000](http://localhost:300). The app will automatically reload if you change any of the source files.

### Build

Run build to build the project. The build artifacts will be stored in the build/ directory.

bash
# build for production with minification
$ npm run build


# Directory Structure

getir
├── public/      (static files)
│   ├── favicon.ico  
│   └── index.html (html temlpate)
│
├── src/             (project root)
│   ├── containers/
|          ├── App/
|               ├── Routing/
|               ├── App.jsx
|               ├── store.js 
|          ├── Getir/
|               ├── components/
|               ├── containers
|               ├── img 
├          |── Layout 
|   ├── redux/
│   ├── scss/        (scss/css source)
│   ├── index.js
│   
|── package.json
|── db.json