FROM node:12

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
EXPOSE 3300

CMD bash -c "npm install && npm run start"