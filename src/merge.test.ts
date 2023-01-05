import { merge } from "./merge";

// // merge two sorted collection with the first collection value are less than the second
test('merge two sorted collections', () => {
    expect(merge([1,3,5],[6,7,10])).toEqual([1, 3, 5, 6, 7, 10]);
});

// // merge two sorted collection with the first collection value are more than the second
// test('merge two sorted collections', () => {
//     expect(merge([6,7,10],[1,3,5])).toEqual([1, 3, 5, 6, 7, 10]);
// });

// // merge two empty collection
// test('merge two sorted collections', () => {
//     expect(merge([],[])).toEqual([]);
// });

// // merge two sorted collection with the first collection element are more than the second
// test('merge two sorted collections', () => {
//     expect(merge([1,5,7,9],[3,8])).toEqual([1, 3, 5, 7, 8, 9]);
// });

// // merge two sorted collection with the first collection element are more than the second
// test('merge two sorted collections', () => {
//     expect(merge([4,7],[1,6,9,10])).toEqual([1, 4, 6, 7, 9, 10]);
// });

// merge two sorted collection with the first collection value and element are equal to the second
// test('merge two sorted collections', () => {
//     expect(merge([1,2,3],[1,2,3])).toEqual([1, 1, 2, 2, 3, 3]);
// });
