/* eslint-disable complexity */
function split(wholeArray) {

  /* your code here to define the firstHalf and secondHalf arrays */
  const length = wholeArray.length
  const mid = Math.floor(length / 2)

  const firstHalf = wholeArray.slice(0, mid)
  const secondHalf = wholeArray.slice(mid)
  return [firstHalf, secondHalf];
}

function merge(left, right) {
  const merged = [];
  let lp = 0;
  let rp = 0;
  // for (let i = 0; i < left.length; i++) {
  //   for (let j = 0; j < right.length; j++) {
  //     let left = left[i]
  //     let right = right[j]
  //     if (left < right) {
  //       merged.push(left)
  //     }
  //     else {
  //       merged.push(right)
  //     }
  //     i++;
  //   }
  // }
  while (lp < left.length || rp < right.length) {
    if (lp < left.length && rp < right.length) {
      if (left[lp] <= right[rp]) {
        merged.push(left[lp])
        lp += 1;
      }
      else {
        merged.push(right[rp])
        rp += 1;
      }
    }
    else if (lp < left.length) {
      merged.push(left[lp])
      lp += 1;
    }
    else {
      merged.push(right[rp])
      rp += 1;
    }
  }
  return merged;



}