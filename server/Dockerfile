FROM node:18

WORKDIR /usr/src/app

COPY yarn.lock ./
COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

RUN npx prisma generate

EXPOSE 3444

CMD ["yarn", "start:prod"]
