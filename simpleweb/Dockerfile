#specify a base image
FROM node:20-alpine

WORKDIR /usr/app
#install some dependencies

COPY ./package.json /usr/app
RUN npm install
COPY ./ /usr/app

#default command
CMD ["npm", "start"]