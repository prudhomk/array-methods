import { map, filter } from './functions.js';

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
   
    const newArr = filter(sample, (num) => {return num * 1;});
    expect(newArr).toEqual([2, 4]); 
  });
  
});
