FROM mhart/alpine-node:4

RUN apk add --update git bash

WORKDIR /src/

ADD ./package.json /src/package.json
RUN npm install

ADD ./Gruntfile.js /src/Gruntfile.js

COPY ./ /src/api

ENV PATH "$PATH:node_modules/.bin"
