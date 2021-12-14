FROM node:14-alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

COPY . .

EXPOSE 3333

CMD ["yarn", "start"]
