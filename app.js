

const express = require('express');
let app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');



app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));

app.set("ipaddr", "127.0.0.1")

    .set("port", 3000);

app.get("/", function(req, res){

    res.send("Server is up and running!");

});

http.listen(app.get("port"), app.get("ipaddr"), function(){

    console.log("Server up and running. Go to http://" + app.get("ipaddr") + ":" + app.get("port"));

});