const API_KEY = 'api_key=1b8038c7c426f22348b3c4b12eb2d6d4'
const BASE_URL = 'https://api.themoviedb.org/3/movie/'
const IMG_URL = 'https://image.tmdb.org/t/p/w500'
const language = 'language=en-US'

function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function getMovie() {
  let random_id = getRandomInt(1, 700000)
  let url = `${BASE_URL}${random_id}?${API_KEY}&${language}`

  axios
    .get(url)
    .then(response => {
      let imageUrl = `${IMG_URL}${response.data.poster_path}`

      if (imageUrl == 'https://image.tmdb.org/t/p/w500null') {
        movie_image.src = './assets/code.jpg'
        movie_title.textContent = 'Ops, hoje não é dia de assistir filme. Bora codar! 🚀'
        overviews.textContent = ''
        return
      }

      overviews.textContent = response.data.overview
      movie_title.textContent = response.data.original_title
      movie_image.src = imageUrl
    })
    .catch(error => {
      console.error(error)
      getMovie()
    })
}
