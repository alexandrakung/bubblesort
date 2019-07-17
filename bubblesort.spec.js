describe('Bubble Sort', function () {
  it('should take an array as a parameter and return an array', function () {
    expect(typeof bubbleSort([])).toBe('object');
  });

  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles a small arra of 3 items', function () {
    expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
  });
  it('handles an array that needs more than 1 pass', function () {
    expect(bubbleSort([4, 0, 5, 2])).toEqual([0, 2, 4, 5]);
  })
});
