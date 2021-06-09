export function map(arr, callback) {
  const mapArr = [];
  for(let i = 0; i < arr.length; i++) {
    mapArr[i] = callback(arr[i]);
        
  }
  return mapArr;
}

export function filter(arr, callback) {
  let filterArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) filterArr = [...filterArr, arr[i]];
  }
  return filterArr;
}

export function findIndex(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) 
      return i;
  }
  return -1;
}
