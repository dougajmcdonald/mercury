# mercury-demo

Contains:

- web-ui demo app (/client) written in React based on Create-React-App
  - runs on port 3000
- node server (server.js) exposing simple endpoints to get tasks and post to Nifi

## Running in dev

1. Clone the repo
`git clone https://github.com/dougajmcdonald/mercury.git`

2. Install Pre-reqs:
- Node - Download from web
- nodemon - `npm i -g nodemon`
- concurrently - `npm i -g concurrently`
- yarn - `npm i -g yarn`

3. Install Dependencies:
- Server - `npm i` from the root of the repo
- Client - `npm i` from the `/client` folder

Start:
- `npm start` - will start the client and server. App will be accessible on :5000

## Docker

The app is dockerised, to build the image form source (from the root of the app):

`docker build -t mercury .`

To run the image:

`docker run -p 80:5000 -d mercury`

This will run the container on port 80.

## Docker compose

All components (web, nifi, elastic & neo4j) are docker composed.

To run the lot:

`docker-compose up`

The web app will run on :80, nifi on :8080 elastic on :9200 and neo4j on 7474 or 7687 (I don't know which!)