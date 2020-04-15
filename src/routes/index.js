const express= require ("express");
const router =express.Router();
 
router.get("/", (req, res) =>{
    res.render("index");
 });

//Creamos otra ruta --- Contact
 router.get("/", (req, res) =>{
    res.render("index");
 });
 
 router.get("/contact", (req, res) =>{
    res.render("contact",{title:"contact page"});
 });

  
 


 module.exports = router;