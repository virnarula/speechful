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
Writing and editing papers, documents, and emails is an essential task for any modern day student. Yet, the way in which we do so can be inhibitive for some. While keyboards and mice are incredibly useful for most, for those that are missing limbs, hands, digits, or have conditions such as Arthritis in the hand, Parkinson’s, Carpal Tunnel Syndrome, or Essential Tremor, keyboards are practically unusable if not extremely discomforting. The number of Americans that belong to this group is estimated to be over 28 million. 

This problem is amplified by remote and hybrid education. Prior to the pandemic, students had access to disability services, where they could take tests and write papers with the help of university transcribers. However, with the transition to remote learning, these students must now rely on imperfect hacks such as sending audio files, painfully using a keyboard, or avoiding typing altogether. 

We wanted to take this opportunity to develop a tool that would make it easy for students with such conditions to participate in the classroom (and potentially employees in the workplace) without access to disability services.

## Overview
Speechful is a document editing tool that uses your voice as the primary interface between you and your computer. From start to finish, you can create, edit, format, reorder, and export your documents just like you would on MS Word or Google Docs without ever touching a keyboard or mouse. 

Speechful is intended to be a desktop application that allows you to write up an essay, an email, or complete a written test by converting your voice into context-aware instructions. By clearly indexing every paragraph and sentence visually, giving voice instructions has never been easier. Once you open a document, you can simply a command such as "start typing" or "delete this from paragraph 2" follow by with what you would like to type or delete. The supported commands are described below. Once you finish your typing, you can tell Speechful to add punctation after a certain word, move your cursor to another paragraph, and most importantly, change words that were misunderstood.

For HackThis, we have an MVP that runs in Chrome to serve as a proof of concept. Here are some screenshots of the MVP:

![StartScreen](https://github.com/virnarula/speechful/blob/master/src/res/StartScreen.png?raw=true)
![HomeScreen](https://github.com/virnarula/speechful/blob/master/src/res/HomeScreen.png?raw=true)
![DocumentScreen](https://github.com/virnarula/speechful/blob/master/src/res/DocumentScreen.png?raw=true)

We also made a business pitch for HackThis, which can be found here: [Slides](https://docs.google.com/presentation/d/1Lv1SIm_yvH8oizCI6m0so60j3Je6UzWNirOie5IRAZ0/edit#slide=id.p) & [Transcript](https://docs.google.com/document/d/1GT0u5xcKKvaxGUeyUUNIsTQAZTqoQKfIGqxx02tKd28/edit)

Here is a demonstration of the current product: [Youtube](https://youtube.com/watch?v=e3JMRdCq-RI)

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
- [x] Move cursor - "Move cursor to paragraph (index)"

Planned functionality:
- [ ] Change size - "Change size of paragraph (index)"
- [ ] Change color - "Change color of paragraph (index)"
- [ ] Make above paragraph functions into sentence function
- [ ] Move Speechful to a container such as Electron
- [ ] Export a speechful document into common file types
- [ ] Create tutorial for new users

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
