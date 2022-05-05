<h1 align="center">:ballot_box_with_check: ToDo API</h1>
<h3 align="center">REST API made with Node.js, MongoDB and Heroku.</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/johnggli/ToDo_API?color=%2334CB79">
  
  <img alt="Node version" src="https://img.shields.io/badge/node.js@lts-12.18.0-informational?logo=Node.JS&color=%2334CB79">
  
  <img alt="npm version" src="https://img.shields.io/badge/npm-6.14.4-informational?logo=npm&color=%2334CB79">

  <a href="https://www.linkedin.com/in/johnggli/">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-John%20Emerson-%2334CB79">
  </a>
  
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/johnggli/ToDo_API?color=%2334CB79">
  
  <a href="https://github.com/johnggli/ToDo_API/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/johnggli/ToDo_API?color=%2334CB79">
  </a>
</p>

<p align="center">
  <a href="#bulb-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#computer-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#thinking-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#star2-extras">Get in touch</a>
</p>

---

## :bulb: About the project

- This project is about a REST API made in JavaScript, using Node.JS and MongoDB for the construction of the database, and hosted/deployed on the Heroku website.

## :rocket: Technologies

Technologies that I used to develop this project

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Mongoose](https://mongoosejs.com/)
- [Heroku](https://dashboard.heroku.com/)

## :computer: Getting started

### Requirements

- [Node.js](https://nodejs.org/en/)

**Clone the project and access the folder**

```bash
$ git clone https://github.com/johnggli/ToDo_API.git
```

**Follow the steps below**

```bash
# Starting from the project root folder
$ cd ToDo_API

# Install the dependencies
$ npm install

# Find the following part of the code in src/app.js
database() {
    mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    mongoose.connection.on('error', function() {
        console.log('Erro ao conectar-se ao BD')
    })
}

# Replace the *process.env.MONGO_URI* variable with the connection string of your MongoDB database
# to something like this: "mongodb+srv://<user>:<password>@tododb-txqgj.gcp.mongodb.net/<dbname>"

# Save changes, then Start the server with:
$ npm start
```

## :thinking: How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork johnggli/ToDo_API
```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd ToDo_API

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m 'feat: My new feature'

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## :star2: Extras
- [Shields.io](https://shields.io/)
- [Github Emojis](https://gist.github.com/rxaviers/7360908)

---

Made with ♥ by John Emerson :wave: [Get in touch](https://johnggli.github.io/linktree)
