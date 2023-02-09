const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/users')

module.exports = app => {
  app.use(passport.initialize())
  app.use(passport.session())

  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email })
    .then(user => {
      if (!user) {
        return done(null, false, { type: 'warning_msg', message: '這個Email沒有註冊過。'})
      }
      if (user.password !== password) {
        return done(null, false, { type: 'warning_msg', message: 'Email或是密碼不正確。' })
      }
      return done(null, user)
    })
    .catch(error => console.log(error))
  }))

  passport.serializeUser((user, done) => {
    done(null, user)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id)
        .lean()
        .then(user => done(null, user))
        .catch(error => done(error, null))
  })
}