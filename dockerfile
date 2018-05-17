FROM node:carbon

# Create app directory in image
WORKDIR /usr/src/app

# Add global dependecnies
RUN npm i -g npm
RUN npm i -g nodemon
RUN npm i -g concurrently

# Install app dependencies for server
COPY package*.json ./

RUN npm install

# Create client directory and switch
WORKDIR /usr/src/app/client

COPY client/package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
CMD [ "npm", "start" ]