# Основан на официальном образе Node.js
FROM node:18

WORKDIR /usr/src/app

# Копируем файлы для зависимостей
COPY yarn.lock ./
COPY package.json ./

# Устанавливаем зависимости через yarn
RUN yarn install

# Копируем все файлы из текущей директории в рабочую директорию контейнера
COPY . .

# Собираем NestJS проект
RUN yarn build

EXPOSE 3444


CMD ["./start.sh"]
