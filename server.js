var express = require('express'),
    api = require("./api.js"),
    app = express();

app
    .use(express.static('./public'))
    .use("/api", api)
    .get('*',function(req,res){
        res.sendFile('public/main.html', { root: __dirname});
    }).listen(3000);