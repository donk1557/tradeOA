const express = require('express');
const cors = require('cors');
const passport = require('passport');
const GithubStrategy = require('passport-github');
// const keys = require("../config");
let user = {};

const GithubStrategy = require('passport-github2').Strategy;


passport.serializeUser( (user, cb)=>{
    cb(null, user);
})

passport.deserializeUser( (user, cb)=>{
    cb(null, user);
})

passport.use(new GitHubStrategy({
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

app.use(cors());
app.use(passport.initialize());

app.get("/auth/github", passport.authenticate( strategy: "github"));
app.get("auth/facebook/callback",
passport.authenticate(("github"),
options: (req,res)=>{
    res.redirect('/profile');
}));