FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY ./src .

EXPOSE 9004

CMD ["node", "app.js"]