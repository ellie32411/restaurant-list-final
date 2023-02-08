const express = require("express")
const exphbs = require("express-handlebars")
const methodOverride = require("method-override")
const session = require('express-session')
const usePassport = require('./config/passport')
const Restaurant = require("./models/Restaurant")
const routes = require("./routes")
const { use } = require("passport")
require('./config/mongoose')

const app = express()
const port = 3000

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
usePassport(app)
app.use(routes)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})