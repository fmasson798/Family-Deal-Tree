const express = require('express');
const path = require('path');
let app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(express.static('public'));

// route from localhost:3000 to home landing page
app.get("/", (req, res) => {
    res.render('home');
});

 //route for home button on header navigation
app.get("/views/home.ejs", (req, res) => {
    res.render('home');
});

 //route for login button on header navigation
 app.get("/views/login.ejs", (req, res) => {
    res.render('login');
});

 //route for sign up button in footer
 app.get("/views/sign_up.ejs", (req, res) => {
    res.render('sign_up');
});

 //route for tiles of all deals button on header navigation
 app.get("/views/all_deals.ejs", (req, res) => {
    res.render('all_deals');
});

app.listen(process.env.PORT || 3000, ()=>{ 
    console.log("server started on: localhost:3000");
});