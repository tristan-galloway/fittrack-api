const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'TrackFit API',
    description: 'API documentation for TrackFit application',
  },
  host: 'localhost:8080'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);