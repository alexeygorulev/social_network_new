# Основан на официальном образе Node.js
FROM node:14 AS build-stage

WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

# Собираем React проект
RUN yarn build

# Используем Nginx для раздачи статических файлов
FROM nginx:alpine AS production-stage

COPY --from=build-stage /usr/src/app/build /usr/share/nginx/html

# Необходимо для корректной работы маршрутизации на стороне клиента
RUN echo "try_files \$uri /index.html;" > /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]