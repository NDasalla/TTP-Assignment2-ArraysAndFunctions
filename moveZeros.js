const moveZeros = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.splice(i, 1);
      //   console.log(arr);
      arr.push(0);
      //   console.log(arr);
    }
  }
};

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]
const arr = [0, 1, 0, 3, 12];
console.log(arr);
moveZeros(arr);
console.log(arr);
