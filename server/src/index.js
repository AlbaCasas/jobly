/* eslint-disable no-console */
const { connect } = require('mongoose');
const app = require('./app');

let server;
connect(process.env.MONGODB_URL).then(() => {
  console.log('Connected to MongoDB');
  server = app.listen(process.env.PORT, () => {
    console.log(`Listening to port ${process.env.PORT}`);
  });
});

const exitHandler = () => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

process.on('uncaughtException', exitHandler);
process.on('unhandledRejection', exitHandler);

process.on('SIGTERM', () => {
  if (server) {
    server.close();
  }
});
