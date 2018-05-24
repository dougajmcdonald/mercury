FROM node:alpine

# Create app directory in image
WORKDIR /usr/src/app

# Add global dependecnies
RUN npm i -g npm nodemon concurrently

# Install app dependencies for server
COPY package*.json /usr/src/app/

RUN npm install

# Create client directory and switch
WORKDIR /usr/src/app/client

COPY client/package*.json /usr/src/app/client/

RUN npm install

# Bundle app source
COPY . /usr/src/app/

WORKDIR /usr/src/app/

EXPOSE 3000
CMD [ "npm", "start" ]