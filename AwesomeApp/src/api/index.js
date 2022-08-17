import axios from '../util/axios/index';

const _post = (endpoint, requestData) => {
  return new Promise((resolve, reject) => {
    axios.post(endpoint, requestData)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const _get = endpoint => {
  return new Promise((resolve, reject) => {
    axios.get(endpoint)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

const _del = endpoint => {
  return new Promise((resolve, reject) => {
    axios.delete(endpoint)
      .then(res => {
        resolve(res);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const example = payload => _post('example/endpoint', payload);