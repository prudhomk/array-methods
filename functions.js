export function map(arr, callback) {
  const mapArr = [];
  for(let i = 0; i < arr.length; i++) {
    mapArr[i] = callback(arr[i]);
        
  }
  return mapArr;
}

export function filter(arr, callback) {
  const filterArr = [];
  let j = 0;
  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) {
      filterArr[j] = arr[i]; 
      j++;
    } 
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

export function reduce(arr, callback, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for(let i = 0; i < arr.length; i++) {
   
    accumulator += callback(arr[i]);
    
  }
  return accumulator;
}

export function every(arr, callback) {
  for(let i = 0; i < arr.length; i++) {
    if(!callback(arr[i])) return false;
  }
  return true;
}
