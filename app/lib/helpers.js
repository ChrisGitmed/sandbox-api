export const asCallBack = (promise) => promise.then((data) => [null, data]).catch((err) => [err]);

export const pick = (obj, includeArray = []) => {
  const newObj = {};
  includeArray.forEach((key) => newObj[key] = obj[key]);
  return newObj;
};

