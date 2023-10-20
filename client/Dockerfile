FROM node:18 AS build-stage

WORKDIR /usr/src/app

COPY yarn.lock ./

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

# Используем Nginx для раздачи статических файлов
FROM nginx:alpine AS production-stage

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Необходимо для корректной работы маршрутизации на стороне клиента
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]