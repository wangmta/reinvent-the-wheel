import { type } from "./returnDataType";

// ignore functions
export function deepClone(obj, result) {
  let res = result || {};
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      if (typeof obj[prop] == "object" && obj[prop] !== null) {
        if (type(obj[prop]) == "[object Object]") {
          res[prop] = {};
        }
        if (type(obj[prop]) == "[object Array]") {
          res[prop] = [];
        }
        deepClone(obj[prop], res[prop]);
      } else {
        res[prop] = obj[prop];
      }
    }
  }
  return res;
}

//
export function deepClone1(target) {
  if (typeof target != "object") return target;
  let result;
  if (type(target) == "[object Array]") result = [];
  else result = {};
  for (let prop in target) {
    if (target.hasOwnProperty(prop)) {
      result[prop] = deepClone1(target[prop]);
    }
  }
  return result;
}
