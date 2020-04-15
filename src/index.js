const express = require("express");
const app = express();
const path = require("path");

//Setting
app.set("port",4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine","ejs"); 


//routes

app.use(require("./routes/index"));

//static files
app.listen(app.get("port"), ()=>{
    console.log("server on port", app.get("port"));
});
