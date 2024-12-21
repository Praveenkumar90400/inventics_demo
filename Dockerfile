FROM node:18-alpine AS build-stage

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# --- Stage for the final image ---

FROM nginx:latest

COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 80
