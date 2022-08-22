import EncryptedStorage from 'react-native-encrypted-storage';

const encryptedStorage = {
  set: async function (data) {
    try {
      await EncryptedStorage.setItem('user_session', JSON.stringify(data));
      console.log("------Congrats! You've just stored your value!");
      console.log(JSON.stringify(data, null, 2));
    } catch (error) {
      console.log('--------There was an error on the native side', error);
      return null;
    }
  },
  get: async function (name) {
    try {
      const session = await EncryptedStorage.getItem('user_session');
      if (session !== undefined && session !== null) {
        const obj = JSON.parse(session);
        console.log("------Congrats! You've just get your value!");
        return obj[name] !== undefined ? obj[name] : obj;
      }
      return false;
    } catch (error) {
      console.log('--------There was an error on the native side', error);
      return null;
    }
  },
  remove: async function () {
    try {
      await EncryptedStorage.removeItem('user_session');
      console.log("------Congrats! You've just removed your value!");
      return true;
    } catch (error) {
      console.log('--------There was an error on the native side', error);
      return null;
    }
  },
};

export default encryptedStorage;