const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/Restaurant')

// 新增餐廳頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 瀏覽特定餐廳
router.get('/:restaurantId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurantData => res.render('show', { restaurantData }))
    .catch(err => console.log(err))
})

// 新增餐廳
router.post('/', (req, res) => {
  const userId = req.user._id
  req.body.userId = userId
  return Restaurant.create(req.body, )
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// 編輯餐廳頁面
router.get('/:restaurantId/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurantData => res.render('edit', { restaurantData }))
    .catch(err => console.log(err))
})

// 更新餐廳
router.put('/:restaurantId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  return Restaurant.findOne({ _id, userId })
    .then(restaurantData => {
      restaurantData.name = req.body.name
      restaurantData.name_en = req.body.name_en
      restaurantData.category = req.body.category
      restaurantData.image = req.body.image
      restaurantData.location = req.body.location
      restaurantData.phone = req.body.phone
      restaurantData.google_map = req.body.google_map
      restaurantData.rating = req.body.rating
      restaurantData.description = req.body.description
      return restaurantData.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 刪除餐廳
router.delete('/:restaurantId', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurantId
  return Restaurant.findOne({ _id, userId })
    .then((restaurantData) => restaurantData.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router