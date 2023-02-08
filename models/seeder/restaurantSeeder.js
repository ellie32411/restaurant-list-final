const mongoose = require("mongoose")
const Restaurant = require("../restaurant")
const restaurantList = require("../../restaurant.json").results

mongoose.connect("mongodb+srv://ellie32411:jessica188@cluster0.z2detec.mongodb.net/restaurant-list-final?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

db.on("error", () => {
  console.log("mongodb error!")
})

db.once("open", () => {
  console.log("running restaurantSeeder script...")

  Restaurant.create(restaurantList)
    .then(() => {
      console.log("restaurantSeeder done!")
      db.close()
    })
    .catch(err => console.log(err))
})