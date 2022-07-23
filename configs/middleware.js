const passport = require("passport");
const { Strategy, ExtractJwt } = require('passport-jwt')
const adminModel = require("../models/adminModel");

const option = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'm13'
}

passport.use(new Strategy(option, async (payload, cb) => {
  let adminExist = await adminModel.find({ email: payload.email });
  if (adminExist) {
    return cb(null, adminExist)
  } else {
    return cb(null, false)
  }
}))


passport.serializeUser((adminExist, cb) => cb(null, adminExist))
passport.deserializeUser((adminExist, cb) => cb(null, adminExist))