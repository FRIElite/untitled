FROM node:12

WORKDIR /usr/src/app
RUN npm install -g serve
COPY build /usr/src/app

CMD serve -s . -l 4000