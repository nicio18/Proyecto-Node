const express= require ("express");
const router =express.Router();
 


//Creamos otra ruta --- Contact
 router.get("/", (req, res) =>{
    res.render("index", {title: "hello world"} );
 });
 
 router.get("/contact", (req, res) =>{
    res.render("contact.ejs",{title:"contact page"});
 });

 router.get("/about", (req, res) =>{
   res.render("about.ejs",{title:"about page"});
});

 module.exports = router;