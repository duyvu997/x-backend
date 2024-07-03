# x-node-backend

This project serves as a backend service using Node.js - NestJS, integrating PostgreSQL with TypeORM, and providing authentication and authorization mechanisms. It uses GraphQL for frontends and gRPC for services.

## Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:duyvu997/x-node-backend.git

cd x-node-backend

npm install
```

### Running the Project Locally

#### init environment

Copy file env.example:

```bash
cp env.example .env
```
then replace the value of variables with the real value 

To install deps:

```bash
npm install
```

To run the project locally, use:

```bash
npm run start:dev
```

This will start the Node.js server locally.

### Building for Production

To build the project for production, use:

```bash
npm run build
```

#### build docker image
```bash
docker build -t nestjs-app .
```

```bash
docker run -d -p 3000:3000 -p 50051:50051 nestjs-app
```


This will compile TypeScript files and generate the production build.

### Additional Notes
