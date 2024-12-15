FROM node:18-alpine AS build-stage  # Use a Node.js base image

WORKDIR /app

# Copy package*.json and package-lock.json 
COPY package*.json ./ package-lock.json 

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application 
RUN npm run build 

# --- Stage for the final image ---

FROM nginx:latest-alpine  

WORKDIR /usr/share/nginx/html

# Copy the built application from the build stage
COPY --from=build-stage /app/build . 

# Expose the port
EXPOSE 80
