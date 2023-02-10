const express = require('express')
const passport = require('passport')
const bcrypt = require('bcryptjs')
const User = require('../../models/users')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true
}))

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  const errors = []
  if (!email || !password || !confirmPassword) {
    errors.push({ message: 'Email或是密碼未填寫完整。' })
  }
  if (password !== confirmPassword) {
    errors.push({ message: '兩次密碼輸入不一致' })
  }
  if (errors.length) {
    return res.render('register', {
      errors,
      name,
      email,
      password,
      confirmPassword
    })
  }
  User.findOne({ email }).then(user => {
    if (user) {
      errors.push({ message: '這個Email已經註冊過了。' })
      res.render('register', {
        errors,
        name,
        email,
        password,
        confirmPassword
      })
    } else {
      return bcrypt
        .genSalt(10)
        .then(salt => bcrypt.hash(password, salt))
        .then(hash => User.create({
          name,
          email,
          password: hash
        })
          .then(() => res.redirect('/'))
          .catch(error => console.log(error)))
    }
  })
    .catch(error => console.log(error))
})

router.get('/logout', (req, res) => {
  req.logout()
  req.flash('success_msg', '您已成功登出！')
  res.redirect('/users/login')
})

module.exports = router
