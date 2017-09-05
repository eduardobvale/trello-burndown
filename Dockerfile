FROM node:7 

ADD . /app
WORKDIR /app

RUN npm update

EXPOSE 8008
CMD node run.js