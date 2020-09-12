# Text Search

It is a full stack text search app working as search bar for seaching query based on the tags and query string.
This repository contain React App and Rest API(Node Js) is there at https://github.com/dheerajk7/AdmitKard-Text-Search.git

# Preview

![preview image](./static/images/preview.gif)

# API Routes

1. /api/v1/question/create :-> To create new question in database.

   ```
   Fields Needed to Create Question :-
   1. query
   2. topic
   3. tag array
   ```

2. /api/v1/search :-> To search query based on input string from database.
   ```
   Fields Needed to Search Question :-
   1. searchKey
   ```

# Techstack

### HTML, SCSS, React, Rest API(Node JS), Mongo DB

# Instructions to install

1. Clone Rest API repository from https://github.com/dheerajk7/AdmitKard-Text-Search.git
2. Install NPM if you have not installed yet.
3. Go to project directory and run these commands to run API server

   #### To install node Modules

   ```
   npm install
   ```

   #### To run Node JS API server

   ```
   npm start
   ```

4. Clone React APP (https://github.com/dheerajk7/admitKard-text-search-react-app) and run following commands to run react app

   #### To install node Modules

   ```
   npm install
   ```

   #### To run react app

   ```
   npm start
   ```

5. Go and check at http://localhost:3000

# Directory Structure

## API Directory Structure

`/` - all code files <br>
`/config` - all configuration files <br>
`/controllers` - all controllers files <br>
`/models` - all database models files <br>
`/routes` - all routes files <br>
`/static` - all static files <br>

## React App Repository directory Structure

React App repository (https://github.com/dheerajk7/admitKard-text-search-react-app)

`/` - all react app files <br>
`/src` - all react app code files <br>
`/src/components`- all react components files <br>
`/src/helpers` - all helpers files <br>
`/src/styles` - all SCSS styles files <br>

---
