const express= require ("express");
const router =express.Router();
 


//Creamos otra ruta --- Contact
 router.get("/", (req, res) =>{
    res.render("index.html", {title: "hello word"} );
 });
 
 router.get("/contact", (req, res) =>{
    res.render("contact.html",{title:"contact page"});
 });

 router.get("/about", (req, res) =>{
   res.render("about.html",{title:"about page"});
});

  
 


 module.exports = router;