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

export default {
  searchV1,
  searchV2
}
