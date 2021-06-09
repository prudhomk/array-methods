import { map, filter, findIndex, reduce, every } from './functions.js';

describe('map(arr, callback)', () => {
  test('returns a copy of an array that uses a callback', () => {
    const sample = [0, 1, 2, 3];
 
    const newArr = map(sample, (num) => {return num + 2;});
    expect(newArr).toEqual([2, 3, 4, 5]); 
  });

});


describe('filter(arr, callback)', () => {
  test('creates an array of true values using callback', () => {
    const sample = [2, 4];
   
    const newArr = filter(sample, (num) => {return (num > 2 ? num : 0);});
    expect(newArr).toEqual([4]); 
  });
  
});

describe('findIndex(arr, callback)', () => {
  test('returns index of array based on true callback', () => {
    const sample = [0, 1, 2, 3];
   
    const newArr = findIndex(sample, (num) => {return num === 2;});
    expect(newArr).toEqual(2); 
  });
  
});

describe('reduce(arr, callback, initalValue)', () => {
  test('returns accumulator', () => {
    const sample = [0, 1, 2, 3];
     
    const newArr = reduce(sample, (num) => {return num + num;}, 0);
    expect(newArr).toEqual(6); 
  });
    
});

describe('every(arr, callback)', () => {
  test.only('returns accumulator', () => {
    const sample = [4, 8, 16, 20];
    
    const newArr = every(sample, (num) => {return num >= 4;});
    expect(newArr).toEqual(true); 
  });
      
});
