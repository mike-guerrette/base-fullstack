FROM mhart/alpine-node:4

WORKDIR /src/

ADD ./package.json /src/package.json
RUN npm install

ADD ./Gruntfile.js /src/Gruntfile.js

COPY ./ /src

ENV PATH "$PATH:node_modules/.bin"
