import axios from 'axios'
import { buildErrorObject } from './errors'

function get(url) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(buildErrorObject(err))
      })
  })
}

function put(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(buildErrorObject(err))
      })
  })
}

function post(url, data) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
      .then((response) => {
        resolve(response)
      })
      .catch((err) => {
        reject(buildErrorObject(err))
      })
  })
}

function delete_(url) {
  return new Promise((resolve, reject) => {
    axios
      .delete(url)
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        reject(buildErrorObject(err))
      })
  })
}

export default {
  get,
  put,
  post,
  delete: delete_
}
