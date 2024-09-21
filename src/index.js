const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const connect = require('./config/database.js')
const apiRoutes = require('./routes/index.js')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('api/', apiRoutes);

const setUpStartServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
        connect()
            .then(() => {
                console.log("Mongo DB is connected successfully");

            })
            .catch((err) => {
                console.log("Error is ", err);
            })
    });
}


setUpStartServer();
