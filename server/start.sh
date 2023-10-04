#!/bin/sh

# Запускаем NestJS приложение
yarn start:prod &

# Ждем некоторое время, чтобы приложение полностью запустилось
sleep 10

# Запускаем миграцию
npx prisma migrate dev --name prodDeploy

# Ждем завершения всех фоновых процессов
wait