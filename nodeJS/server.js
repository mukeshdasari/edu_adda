'use strict'
let express = require('express');
let app = express();
let bodyParser = require("body-parser");
let http = require('http');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./router')(app);

let httpServer = http.createServer(app);

httpServer.listen(3000, function(){
    console.log("Server is listening on port 3000")
});
