const express = require("express")
const exphbs = require("express-handlebars")
const methodOverride = require("method-override")
const mongoose = require("mongoose")
const Restaurant = require("./models/Restaurant")
const router = require("./routes")

mongoose.connect("mongodb+srv://ellie32411:jessica188@cluster0.z2detec.mongodb.net/restaurant-list-final?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("error", () => {
  console.log("mongodb error!")
})

db.once("open", () => {
  console.log("mongodb connected!")
})

const app = express()
const port = 3000

app.engine("handlebars", exphbs.engine({ defaultLayout: "main" }))
app.set("view engine", "handlebars")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))
app.use(router)

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})