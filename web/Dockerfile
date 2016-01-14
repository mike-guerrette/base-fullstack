FROM mhart/alpine-node:4

RUN apk add --update git bash

WORKDIR /src/

ADD ./package.json /src/package.json
RUN npm install

ADD ./bower.json /src/bower.json
RUN node_modules/.bin/bower install --allow-root

ADD ./Gruntfile.js /src/Gruntfile.js

COPY ./ /src/web

ENV PATH "$PATH:node_modules/.bin"
