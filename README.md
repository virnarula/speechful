# ![Logo](./src/res/logo.svg) Speechful 

> Writing documents without a keyboard made easy.

A speech-based document editing tool intened for those who cannot use keyboards. 

## Table of Contents
1. [Project Aims](#project-aims)
1. [Overview](#overview)
1. [Functionality](#functionality)
1. [Technologies & Frameworks](#technologies--frameworks)
1. [Contribute](#contribute)
1. [File Structure](#file-structure)
1. [License](#License)

## Project Aims
The inspiration for this project was a recognition of the trouble that the COVID-19 Pandemic has caused those with disabilities. Students and employees who would normally have access to disability services now need to adjust to a remote work lifestyle, which can be incredibly problematic for those who cannot use keyboards. This group of people is greater 28 million in the US, including those with missing arms, hands, or digits, and those with conditions such as Parkinson's, Essential Tremours, Artheritis of the hand, and Carpal Tunnel Syndrome. We wanted to address this issue by creating an applicaiton that would help these people adjust to the remote classroom or workplace with ease. 

## Overview
Speechful is a document editing intened for those who cannot use keyboards. With Speechful, you can write, edit, and format documents exactly like you would on MS Word or Google Docs, all without touching the keyboard. 

Once you open a document, you can simply a command such as "type" or "navigate" follow by with what you would like to type or navigate. Once you finish your setence, you tell Speechful to bold sentences, add punctation after a certain word, and most importantly, change words that were misunderstood.

For HackThis, we have an MVP that runs in Chrome to serve as a proof of concept. The final product will be a stand-alone application. Speech recognition is also currently limited to basic commands. With more time, more complex commands will be added. Here are some screenshots of the MVP:

We also made a business pitch for HackThis, which can be found here: [Slides](https://docs.google.com/presentation/d/1Lv1SIm_yvH8oizCI6m0so60j3Je6UzWNirOie5IRAZ0/edit#slide=id.p) & [Transcript](https://docs.google.com/document/d/1GT0u5xcKKvaxGUeyUUNIsTQAZTqoQKfIGqxx02tKd28/edit)

< Insert Screenshots here >

## Functionality
Currently supported voice functionality:
- [x] Create document - "Create new document"
- [x] Save document - "Save"
- [x] Open document - "Open document (document id)"
- [x] Start typing - "Start typing
- [x] Stop typing  - "Stop typing"
- [x] Change Title - "Change title (new title)"
- [x] Add paragraph - "Add paragraph"
- [x] Real-time punctuation - comma, period, quotaiton are mapped to ,." respectively
- [x] Remove paragraph - "Remove paragraph (index)"
- [x] Remove word - "Remove word (word) from paragraph (index)"
- [x] Replace word - "Replace (old word) with (new word) in paragraph (index)"
- [x] Bold word - "Bold (word) in paragraph (index)

Planned functionality:
- [ ] Change size - "Change size of paragraph (index)"
- [ ] Change color - "Change color of paragraph (index)"
- [ ] Make above paragraph functions into sentence function

## Technologies & Frameworks
The front-end of this application is built with [React](https://reactjs.org/). For natural language processing, we are using [Google Speech](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API). Design element dependancies include: [Material-UI](https://material-ui.com/) and [FontAwesome](https://fontawesome.com/).

## Contribute
In order to set up the project for contribution, run:
1. `git clone https://github.com/virnarula/speechful.git` to clone this repository
1. `cd speechful` to enter the `/speechful` directory.
1. `npm install` to install all the dependencies of the project
1. `npm run start` to launch the development server.
1. If it doesn't happen automatically, open `localhost:3000` in your browser.
1. Voila!

This repo uses the [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).

## File Structure
This project is set up like a traditional react project. This is a high-level overview of the file strucutre. Trivial files and directories will be omitted for simplicity.

```
speechful
├──src
|    ├── components      # Contains screens and their components
|    ├── data            # Where documents are saved 
|    ├── IO              # Contains IO functionality
|    ├── model           # Document data model representations
|    ├── res             # Image resources
|    ├── speech          # Contains speech objects to decipher instructures
|    └── App.js          # Contains React Routes
└── public
     ├── index.html      # Bare-bones website 
     └── main.js         # Contains start-up code
```

## License
This project is under the MIT Liscense.
