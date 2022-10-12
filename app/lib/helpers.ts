export const asCallBack = (promise: any) => promise.then((data: any) => [null, data]).catch((err: Error) => [err]);


export const pick = (obj: object, includeArray: any[] = []) => {
  const newObj = {};
  includeArray.forEach((key) => newObj[key] = obj[key]);
  return newObj;
};

