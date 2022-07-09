FROM node:Alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

CMD ["npm", "start"]