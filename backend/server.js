
require('dotenv').config();
const app = require('./src/app');
const connect = require('./db/db');

connect();

app.listen(3000, () => {
    console.log("server created");
})