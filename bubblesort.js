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


function bubbleSort(array) {
  if (array.length <= 1) {
    return array
  }
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
      [array[i], array[i + 1]] = [array[i + 1], array[i]];
    }
  }
  console.log(array.splice(-1, 1))
  //bubbleSort(array.splice(-1, 1))


}