//import express
const express = require("express")
//create a new app
const app =express()
//initialaze port of service
const port =5000
//function midlleware
const workingHourMiddleware = (req, res, next) => {
  const curentDay = new Date().getDay();
// console.log(curentDay)
  const curentHour = new Date().getHours();
  // console.log(curentHour)
  (curentDay >= 1 && curentDay <= 5 && curentHour >= 9 && curentHour < 17)
    ? next()
    : res.status(401).send("these web site availeble just during work");
};
//applicate workingHourMiddleware in all pages
app.use(workingHourMiddleware)
//route of home
app.get("/", (req,res)=> {
    res.status(200).sendFile(__dirname + "/views/home.html");
})
//route of contact
app.get("/contact_us", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/contact_us.html");
});
//route of services
app.get("/services", (req, res) => {
  res.status(200).sendFile(__dirname + "/views/our_services.html");
});

//applicate css on all routes
app.get("/style.css",(req,res) => {
    res.status(200).sendFile(__dirname + "/views/style.css")
})
//server will lessen to port 5000
app.listen(port,()=> console.log("server is open"))