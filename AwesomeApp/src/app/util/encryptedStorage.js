import EncryptedStorage from 'react-native-encrypted-storage';

const encryptedStorage = {
  set: async function (key, data) {
    try {
      await EncryptedStorage.setItem(key, JSON.stringify(data));
      console.log(`------Congrats! You've just stored your value to key ${key}!`);
      console.log(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log('--------There was an error on the native side', error);
      return null;
    }
  },
  get: async function (key, name) {
    try {
      const session = await EncryptedStorage.getItem(key);
      if (session !== undefined && session !== null) {
        const obj = JSON.parse(session);
        console.log(`------Congrats! You've just get your value from key ${key}!`);
        return obj[name] !== undefined ? obj[name] : obj;
      }
      return false;
    } catch (error) {
      console.log('--------There was an error on the native side', error);
      return null;
    }
  },
  remove: async function (key) {
    try {
      await EncryptedStorage.removeItem(key);
      console.log(`------Congrats! You've just removed your value in key ${key}!`);
      return true;
    } catch (error) {
      console.log('--------There was an error on the native side', error);
      return null;
    }
  },
};

export default encryptedStorage;
