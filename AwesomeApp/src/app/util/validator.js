const mobilePattern = new RegExp('^(4|5|6|7|8|9)\\d{7}$');
const emailPattern = new RegExp('^(([^<>()\\[\\]\\\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$');
const pwdPattern = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9\^$*.{}\(\)?!@#%&\/,><\':;|_~`]{8,16})$');
// const pwdPattern = new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]{8,16})$');
const namePattern = new RegExp('^[a-zA-Z\u2E80-\u2FD5\u3190-\u319f\u3400-\u4DBF\u4E00-\u9FCC\uF900-\uFAAD ,.\'-]+$');
const octopusNoPattern = new RegExp('^[0-9]{8,9}$');
const containOneNumberPattern = new RegExp('(?=.*[0-9])');
const containOneLetterPattern = new RegExp('(?=.*[a-zA-Z])');
const containSpacePattern = new RegExp('\\s');
const httpPattern = new RegExp('^(http:|https:)');
const containENPattern = new RegExp('^[A-Za-z].+$');

export const validateOneNumber = value => {
  if (containOneNumberPattern.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const validateIsEnglish = value => {
  if (containENPattern.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const validateOneLetter = value => {
  if (containOneLetterPattern.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const validateSpace = value => {
  if (containSpacePattern.test(value)) {
    return true;
  } else {
    return false;
  }
};


export const validateMobile = value => {
  if (mobilePattern.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const validateEmail = value => {
  if (emailPattern.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const validatePwd = value => {
  if (pwdPattern.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const validateName = value => {
  if (namePattern.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const validateOctopusNo = (value, checkDigit) => {
  if (octopusNoPattern.test(value) && calculateOctopusCheckDigit(value) === checkDigit) {
    return true;
  } else {
    return false;
  }
};

export const validateHttp = value => {
  if (httpPattern.test(value)) {
    return true;
  } else {
    return false;
  }
};

export const calculateOctopusCheckDigit = (value) => {
  let double = [], i = 0;

  for (let digit of value) {
    if ((value.length === 8 && i % 2 === 0) || (value.length === 9 && i % 2 === 1)) {
      const number = parseInt(digit) * 2;
      double.push(number > 9 ? parseInt(number.toString()[0]) + parseInt(number.toString()[1]) : number);
    } else {
      double.push(parseInt(digit));
    }
    i += 1;
  }

  let sum = double.reduce((previous, current) => previous + current, 0);
  const result = (sum * 9).toString();
  return result[result.length - 1];
};
