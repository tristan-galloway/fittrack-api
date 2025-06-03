const swaggerAutogen = require('swagger-autogen')();
require('dotenv').config(); // Add this to load .env variables

const doc = {
  info: {
    title: 'TrackFit API',
    description: 'API documentation for TrackFit application',
  },
  host: process.env.SWAGGER_HOST || `localhost:${process.env.PORT || 8080}` // Dynamic host
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);