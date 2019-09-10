function objectToQueryParams(object) {
  return Object.keys(object)
    .map((key) => key + '=' + object[key])
    .join('&')
}

export default {
  'search/v1': (q) =>
    process.env.API_BASE_URL + `/api/search_v1?${objectToQueryParams({ q })}`,
  'search/v2': (q) =>
    process.env.API_BASE_URL + `/api/search_v2?${objectToQueryParams({ q })}`,
  progress: () => process.env.API_BASE_URL + `/api/status`
}
