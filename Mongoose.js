const mongoose = require('mongoose');

function ConnectDB() {
  mongoose
    .connect(process.env.CONNECT)
    .then(() => {
      console.log('DB connected');
    })
    .catch((error) => {
      console.log('DB not connected', error);
    });
}

module.exports = ConnectDB;