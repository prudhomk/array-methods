export function map(arr, callback) {
  const mapArr = [];
  for(let i = 0; i < arr.length; i++) {
    mapArr[i] = callback(arr[i]);
        
  }
  return mapArr;
}

export function filter(arr, callback) {
  const filterArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(i * 1 === i) filterArr[i] = callback(arr[i]);
  }
  return filterArr;
}
