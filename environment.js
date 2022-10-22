const API_URL = __DEV__
  ? 'http://localhost:3000/api'
  : 'https://drc-admin-panel.vercel.app/api'
const IMAGES_URL = __DEV__
  ? 'http://localhost:3000/images'
  : 'https://drc-admin-panel.vercel.app/images'

export { API_URL, IMAGES_URL }
