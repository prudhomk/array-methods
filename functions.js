export function map(arr, callback) {
  const mapArr = [];
  for(let i = 0; i < arr.length; i++) {
    mapArr[i] = callback(arr[i]);
        
  }
  return mapArr;
}



console.log(map([0, 1, 2], () => {}));
