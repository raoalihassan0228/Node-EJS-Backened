const express = require("express");
const app = express();
const path = require("path");

let port = 3000;

app.set("view engine", "ejs");   // automatically imported/required from express
app.set("views", path.join(__dirname, "/views"));
// app.use(express.static('public'))
app.use(express.static(path.join(__dirname, 'public/css')))
app.use(express.static(path.join(__dirname, 'public/js')))

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

// Home page
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// Roll Dice
app.get("/rolldice", (req, res) => {
  const diceVal = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice.ejs", {diceVal:diceVal});
});

// Instagram EJS
app.get('/ig/:username', (req,res)=>{
    const {username} = req.params
    const followers = ['Rao Ali Hassan', 'Zia Khan', 'Hamzah Syed']
    res.render('instagram.ejs', {username, followers})
})

// Instagram1 EJS (data.json)
app.get('/insta/:username', (req, res)=>{
    const instaData = require('./data.json')
    const {username} = req.params
    const data = instaData[username]
    if(data){
        res.render('instagram1.ejs', {data})
    }else{
        res.render('error.ejs')
    }
})

// Hello page
app.get('/hello', (req, res)=>{
  res.send(`Hello World!`)
})