describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    // your code here 
    expect(split([9, 2, 3, 1, 4])).toEqual([[9, 2], [3, 1, 4]]);
    expect(split([9, 2, 5, 3, 1, 4])).toEqual([[9, 2, 5], [3, 1, 4]]);
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    // test the merging algorithm
    expect(merge([2, 9], [1, 3, 4])).toEqual([1, 2, 3, 4, 9]);
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6])
  });
});
