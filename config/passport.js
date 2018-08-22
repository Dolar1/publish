const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('./keys');
const passport = require('passport');

module.exports = function(passport){
	passport.use(
		new GoogleStrategy({
			clientID: keys.googleClientID ,
    		clientSecret: keys.googleClientSecret,
    		callbackURL: "/auth/google/callback",
    		// THIS PROXY IS REQUIRED FOR THE ONLINE SERVERS BECOZ THEY LOAD EITH THE https:// methds.. 
    		proxy : true
		}, (accessToken, refreshToken, profile, done)=>{
			console.log(profile);
		})
	)
}