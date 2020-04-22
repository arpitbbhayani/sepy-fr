import dreq from '~/dreq'
import apiEndpoints from '~/constants/apiEndpoints'

export function status1Reload() {
  return new Promise((resolve, reject) => {
    dreq
      .post(apiEndpoints.status1Reload())
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message = err.message || `Unable to reload corpus at the moment.`
        reject(err)
      })
  })
}

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
        resolve(response.data)
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
        resolve(response.data)
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
        resolve(response.data)
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
        resolve(response.data)
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
        resolve(response.data)
      })
      .catch((err) => {
        err.message =
          err.message || `Unable to normalize the word at the moment.`
        reject(err)
      })
  })
}

export function status6(text) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status6(text))
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message =
          err.message ||
          `Unable to fetch posting list for the word at the moment.`
        reject(err)
      })
  })
}

export function status7(text) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status7(text))
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message =
          err.message || `Unable to fetch search results at the moment.`
        reject(err)
      })
  })
}

export function status8(text) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status8(text))
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message =
          err.message ||
          `Unable to fetch term frequencies for the word at the moment.`
        reject(err)
      })
  })
}

export function status9(query, docId) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status9(query, docId))
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message =
          err.message ||
          `Unable to fetch score for the query and doc id at the moment.`
        reject(err)
      })
  })
}

export function status10(text) {
  return new Promise((resolve, reject) => {
    dreq
      .get(apiEndpoints.status10(text))
      .then((response) => {
        resolve(response.data)
      })
      .catch((err) => {
        err.message =
          err.message || `Unable to fetch search results at the moment.`
        reject(err)
      })
  })
}

export default {
  searchV1,
  searchV2,
  getProgress,
  status1,
  status1Reload
}
