require('dotenv').config();

const express = require('express');
const passport = require('passport');
const session = require('express-session');
const app = express();

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

require("./passport-setup");

app.set('view engine', "hbs");

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.render("pages/index");
});

app.get("/success", (req, res) => {
  res.render("pages/profile");
});

app.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect('/success');
});

app.listen(3001, () => {
  console.log("App is running on Port 3001");
});
