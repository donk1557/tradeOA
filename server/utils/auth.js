const express = require('express');
const cors = require('cors');
const passport = require('passport');
const cookieSession = require("cookie-session");
const GithubStrategy = require('passport-github2').Strategy;
const GoogleStrategy = require('passport-google').Strategy;
// const keys = require("../config");
let user = {};




passport.serializeUser( (user, cb)=>{
    cb(null, user);
})

passport.deserializeUser( (user, cb)=>{
    cb(null, user);
})

const app = express();
app.use(cors());
app.use(passport.initialize());

app.use(cookieSession({
    name: "session",
    key: ["something"],
    maxAge: 30 * 60 * 100
 }));
 
 app.use(passport.session());


//Github
passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


app.get("/auth/github", passport.authenticate("github"));
app.get("auth/github/callback",
passport.authenticate(("github"),
 (req,res)=>{
    res.redirect('/profile');
}));

//Google
passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


app.get("/auth/github", passport.authenticate("google", {
    scope: ["profile", "email"]
}));
app.get("auth/google/callback",
passport.authenticate(("google"),
 (req,res)=>{
    res.redirect('/profile');
}));