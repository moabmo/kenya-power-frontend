# Use a Node.js image to build the application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files and build the app
COPY . .
RUN npm run build

# Use an Nginx image to serve the built files
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose the default Nginx port
EXPOSE 80
