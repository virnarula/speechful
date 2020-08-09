# Speechful
Writing papers without a keyboard made easy.

## Overview
Speechful is a document editing intened to help those who cannot use keyboards. 


## Technologies & Frameworks
This application is built using [Electron]() and [React](). Speech services are powered by [Azure](). 

In order to set up the project for contribution, run:
1. `git clone https://github.com/virnarula/speechful.git` to clone this repository
1. `cd speechful` to enter the `/speechful` directory.
1. `npm install` to install all the dependencies of the project
1. `npm sdev` to launch the electron applicaton.

## File Structure
This project is set up like a traditional react project.
- `speechful/public` contains the `main.js` and `index.html` files, which are loaded up on applicaiotn startup 
- `speechful/src` contains all source files
- `speechful/src/components` contains all React components
- `speechful/src/model` contains the models used to represent documents

## Lisence
This project is under the MIT Liscense.