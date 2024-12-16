FROM node:18-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build 

FROM nginx:latest-alpine

WORKDIR /usr/share/nginx/html

COPY --from=build-stage /app/build . 

EXPOSE 80
