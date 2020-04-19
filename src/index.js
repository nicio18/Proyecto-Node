const express = require("express");
const app = express();
const path = require("path");


//Setting
app.set("port",4000);
//
app.set("views", path.join(__dirname, "views"));
//Comando para utilizar archivos ejs con extension html /// al final no use nada
app.engine("html", require("ejs").renderFile);
app.set("view engine","ejs"); 

//routes

app.use(require("./routes/index"));

//static files
app.listen(app.get("port"), ()=>{
    console.log("server on port", app.get("port"));
});
