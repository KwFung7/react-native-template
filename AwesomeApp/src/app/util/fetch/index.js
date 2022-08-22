import { fetch } from 'react-native-ssl-pinning';

// Fetch instance
const service = async (...args) => {
  let [resource, config] = args;

  // request interceptor starts
  console.log('Starting Request: ', JSON.stringify(resource, null, 2));
  // request interceptor ends

  const response = await fetch(resource, config);

  // response interceptor here
  if (response.status) {
    return JSON.parse(response.bodyString);
  } else {
    return response.data && response.data.error
      ? response.data.error
      : response.data && response.data.message
        ? response.data.message
        : 'Server error.';
  }
};

export default service;
