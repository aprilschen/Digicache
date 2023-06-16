FROM node:18-alpine

WORKDIR /server

COPY package.json .
COPY package-lock.json .

RUN npm install --force

COPY . .

EXPOSE 6000

CMD [ "node", "index.js" ]