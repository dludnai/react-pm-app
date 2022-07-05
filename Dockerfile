FROM node:17-alpine

WORKDIR /app

COPY package.json .

RUN npm install

RUN mkdir /app/node_modules/.cache && chmod -R 777 /app/node_modules/.cache

COPY . .

EXPOSE 3000

CMD ["npm", "start"]