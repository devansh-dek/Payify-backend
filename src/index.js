const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const setUpStartServer = () => {
    app.listen(PORT, async () => {
        console.log(`Server started at ${PORT}`);
    });
}


setUpStartServer();
