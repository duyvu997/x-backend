# Use the official Node.js image based on Node.js 18
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Copy .env.production file
COPY .env.production ./.env

# Expose ports for both HTTP (3000) and gRPC (50051)
EXPOSE 3000 50051

# Command to start the application
CMD ["npm", "start"]
