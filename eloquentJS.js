const sumOfRange = () => {
  const range = (start, end, step) => {
    const ret = [];
    /* First "if" checks if step exists and if step's value
    is greater than one/increasing. The first "else if" check if step 
    exists and if step's value is less than one/decreasing. 
    The "else" checks if step is not provided.*/
    if (!!step && step >= 1) {
      for (let i = start; i <= end; i += step) {
        console.log("step present, positive step");
        ret.push(i);
      }
    } else if (!!step && step <= -1) {
      for (let i = start; i > end; i += step) {
        console.log("step present, negative step");
        ret.push(i);
      }
    } else {
      for (let i = start; i <= end; i++) {
        console.log("step not present");
        ret.push(i);
      }
    }
    return ret;
  };

  const sum = (arr) => {
    return arr.reduce((a, b) => a + b);
  };

  // TESTS-----------------------------------
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 1, -1));
  // → [5, 4, 3, 2]
  console.log(sum(range(1, 10)));
  // → 55
};

//call sumOfRange() function to test
sumOfRange();

const reverseArrays = () => {};
