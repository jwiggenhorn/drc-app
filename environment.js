let API_URL
if (__DEV__) {
  API_URL = 'http://localhost:3000/api'
} else {
  API_URL = '[Production API URL]'
}

export { API_URL }
