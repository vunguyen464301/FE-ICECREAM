import axios from 'axios';
const host = "http://localhost:8900";
const API_URL = url => `${host}/${url}`

const addHeaders = (url, options) => {
  let auth = localStorage.getItem('auth');
  let headers = {
    'content-type': 'application/json',
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  }
  if (auth !== null) {
    headers = {
      ...headers,
      'Authorization': 'Basic '+auth
    }
  }
  return axios({ url: API_URL(url), headers: headers, ...options })
}

const apiWithPayload = method => (url, payload) => {
  return new Promise((resolve, reject) => {
    addHeaders(url, {
      method,
      data: payload
    })
      .then(response => {
        if (response.data !== undefined) {
          if (response.status === 204) {
            resolve(response.data ? response.data : null)
          }
          resolve(response.data)
        }
        return null;
      })
      .catch(err => reject(err.response.data))
  })
}

const apiWithoutPayload = method => url => {
  return new Promise((resolve, reject) => {
    addHeaders(url, { method })
      .then(response => {
        if (response === 204) {
          resolve()
          return
        }
        resolve(response.data)
      })
      .catch(err => reject(err.response.data))
  })
}

const apiWithFormData = method => async (url, data, options) => {
  let result
  let formData = new FormData()

  for (const [key, value] in data.entries()) {
    if (value !== null) {
      formData.append(key, value)
    }
  }

  try {
    result = await addHeaders(url, {
      method,
      data: formData,
      headers: {
        Accept: 'multipart/form-data',
        'content-type': 'multipart/form-data',
        'accept-encoding': 'gzip',
        ...options.headers
      }
    })
  } catch (error) {
    console.log('error', error)
  }

  return result
}

export const api = {
  //   setToken,
  get: apiWithoutPayload('GET'),
  delete: apiWithoutPayload('DELETE'),
  post: apiWithPayload('POST'),
  put: apiWithPayload('PUT'),
  postMultipart: apiWithFormData('POST'),
  putMultipart: apiWithFormData('PUT')
}
