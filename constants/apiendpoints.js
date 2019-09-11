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
  progress: () => process.env.API_BASE_URL + `/api/status`,
  status1: () => process.env.API_BASE_URL + `/api/status/1`,
  status2: (text) =>
    process.env.API_BASE_URL + `/api/status/2?${objectToQueryParams({ text })}`,
  status3: (text) =>
    process.env.API_BASE_URL + `/api/status/3?${objectToQueryParams({ text })}`,
  status4: (text) =>
    process.env.API_BASE_URL + `/api/status/4?${objectToQueryParams({ text })}`,
  status5: (text) =>
    process.env.API_BASE_URL + `/api/status/5?${objectToQueryParams({ text })}`
}
