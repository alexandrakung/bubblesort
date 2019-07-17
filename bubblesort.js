// function bubbleSort(array) {

//   let didSwap = true
//   while (didSwap) {
//     didSwap = false;
//     let swapCount = 0
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] > array[i + 1]) {
//         didSwap = true
//         swapCount += 1;
//         [array[i], array[i + 1]] = [array[i + 1], array[i]];
//       }
//     }
//     if (!didSwap) {
//       return array
//     }
//   }
//   return array;
// }

function swap(thing1, thing2) {
  if (thing1 > thing2) {
    [thing1, thing2] = [thing2, thing1];
  }
}

function bubbleSort(array, lengthOfArray) {
  if (array.length <= 1) {
    return array;
  }
  for (let i = 0; i < array.length; i++) {
    swap(array[i], array[i + 1]);
  }
  // console.log(array.splice(-1, 1));
  // console.log(array);
  // //bubbleSort(array.splice(-1, 1))
  console.log(array);
  return array;
}
