import dreq from '~/dreq'
import apiEndpoints from '~/constants/apiEndpoints'

export function searchV1(query) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints['search/v1'](query))
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message = err.message || `Unable to search at the moment.`
        reject(err)
      })
  })
}

export function searchV2(query) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints['search/v2'](query))
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message = err.message || `Unable to search at the moment.`
        reject(err)
      })
  })
}

export function getProgress() {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.progress())
      .then((response) => {
        resolve(response.data.progress)
      })
      .catch((err) => {
        err.message = err.message || `Unable to fetch progress at the moment.`
        reject(err)
      })
  })
}

export function status1() {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status1())
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message =
          err.message || `Unable to fetch status of this part at the moment.`
        reject(err)
      })
  })
}

export function status2(text) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status2(text))
      .then((response) => {
        resolve(response.data.text)
      })
      .catch((err) => {
        err.message = err.message || `Unable to clean text at the moment.`
        reject(err)
      })
  })
}

export function status3(text) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status3(text))
      .then((response) => {
        resolve(response.data.text)
      })
      .catch((err) => {
        err.message = err.message || `Unable to extract excerpt at the moment.`
        reject(err)
      })
  })
}

export function status4(text) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status4(text))
      .then((response) => {
        resolve(response.data.tokens)
      })
      .catch((err) => {
        err.message = err.message || `Unable to extract tokens at the moment.`
        reject(err)
      })
  })
}

export function status5(text) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status5(text))
      .then((response) => {
        resolve(response.data.text)
      })
      .catch((err) => {
        err.message =
          err.message || `Unable to normalize the word at the moment.`
        reject(err)
      })
  })
}

export default {
  searchV1,
  searchV2,
  getProgress,
  status1
}
