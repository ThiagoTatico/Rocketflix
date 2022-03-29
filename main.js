//const axios = require('axios')

import { API_KEY, BASE_URL, IMG_URL, language } from './api.js'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

let random_id = getRandomInt(1, 740000)

const url = `${BASE_URL}${random_id}?${API_KEY}&${language}`

function getMovie() {
  
}
