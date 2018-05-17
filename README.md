# mercury-demo

Contains:

- web-ui demo app (/client) written in React based on Create-React-App
  - runs on port 3000
- node server (server.js) exposing simple endpoints to get tasks and post to Nifi

## Running in dev

Pre-reqs:
- Node - Download from web
- nodemon - `npm i -g nodemon`
- concurrently - `npm i -g concurrently`

Start:
- `npm start` - will start the client and server. App will be accessible on :3000

## Docker

The app is dockerised, to build the image form source (from the root of the app):

`docker build -t mercury .`

To run the image:

`docker run -p 80:3000 -d mercury`

This will run the container on port 80.