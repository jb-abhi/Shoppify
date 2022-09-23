import axios from 'axios'

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmFiZjEzNzEzNmRhOTQzZGY3YmQxYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MzkwMjU3OCwiZXhwIjoxNjY0MTYxNzc4fQ.jKroGCbbxqt8-PuzQZj5jm5AUJwYoMQfbYXLTkUnO64"

export const publicRequest = axios.create({
  baseURL:BASE_URL,
})

export const userRequest = axios.create({
  baseURL:BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
})