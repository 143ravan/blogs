import axios from 'axios'

function getDataViaApi (path, cb, errorHandler, payload) {
  axios.get(path, {
    params: payload,
  }).then((res) => {
    cb(res)
  }, (error) => {
    if (typeof errorHandler === 'function') {
      errorHandler(error)
    }
  })
}

export default {
  getCardList: (cb, errorHandler, params) => {
    getDataViaApi(`https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts?fields=slug,categories,post_thumbnail,title,date`, cb, errorHandler, params)
  },
  getBlogDetails: (cb, errorHandler, params) => {
    getDataViaApi(`https://public-api.wordpress.com/rest/v1.1/sites/107403796/posts/slug:${params.slug}?fields=featured_image,title,author,content,date`, cb, errorHandler)
  },
  getCategories: (cb, errorHandler) => {
    getDataViaApi(`https://public-api.wordpress.com/rest/v1.1/sites/107403796/categories`, cb, errorHandler)
  }
}