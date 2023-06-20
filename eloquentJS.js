const sumOfRange = () => {
  const range = (start, end, step) => {
    const ret = [];
    /* First "if" checks if step exists and if step's value
    is greater than one/increasing. The first "else if" check if step 
    exists and if step's value is less than one/decreasing. 
    The "else" checks if step is not provided.*/
    if (!!step && step >= 1) {
      for (let i = start; i <= end; i += step) {
        // console.log("step present, positive step");
        ret.push(i);
      }
    } else if (!!step && step <= -1) {
      for (let i = start; i > end; i += step) {
        // console.log("step present, negative step");
        ret.push(i);
      }
    } else {
      for (let i = start; i <= end; i++) {
        // console.log("step not present");
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
console.log(`---The Sum of a Range Exercise---`);
sumOfRange();

const reverseArrays = () => {
  const reverseArray = (arr) => {
    const original = [...arr];
    const ret = [];
    // console.log(arr.length);
    for (let i = arr.length - 1; i >= 0; i--) {
      ret.push(original[i]);
    }
    return ret;
  };
  const reverseArrayInPlace = (arr) => {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      let indexDiff = arr.length - 1 - i;
      let temp = arr[i];
      arr[i] = arr[indexDiff];
      arr[indexDiff] = temp;
    }
  };
  console.log(reverseArray(["A", "B", "C"]));
  // → ["C", "B", "A"];
  let arrayValue = ["Cat", "The", "Don't", "Please"];
  reverseArrayInPlace(arrayValue);
  console.log(arrayValue);
  // → [5, 4, 3, 2, 1]
};

console.log(`---Reversing an Array Exercise---`);
reverseArrays();

const lists = () => {
  const arrayToList = (arr) => {
    let list = null;
    for (let i = arr.length - 1; i >= 0; i--) {
      list = { value: arr[i], rest: list };
    }
    return list;
  };
  const listToArray = (list) => {
    let arr = [];
    for (let node = list; node; node = node.rest) {
      arr.push(node.value);
    }
    return arr;
  };
  const prepend = (element, list) => {
    // let ret = { ...list };
    // let ret = null;
    // ret = { value: element, rest: list }; //misc: rest = ret
    return (ret = { value: element, rest: list });
  };
  const nth = (list, number) => {
    if (number === 0) {
      return list.value;
    } else {
      return nth(list.rest, number - 1);
    }
  };
  console.log(arrayToList([10, 20]));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(listToArray(arrayToList([10, 20, 30])));
  // → [10, 20, 30]
  console.log(prepend(10, prepend(20, null)));
  // → {value: 10, rest: {value: 20, rest: null}}
  console.log(nth(arrayToList([10, 20, 30]), 1));
  // → 20
};

console.log(`---A List Exercise---`);
lists();

const deepComparison = () => {
  const deepEqual = (obj1, obj2) => {
    if (typeof obj1 === typeof obj2) {
      if (typeof obj1 === "object" && obj1 !== null && obj2 !== null) {
        return (
          Object.keys(obj1).toString() === Object.keys(obj2).toString() &&
          Object.values(obj1).toString() === Object.values(obj2).toString()
        );
      } else {
        return obj1 === obj2;
      }
    }
    return false;
  };
  let obj = { here: { is: "an" }, object: 2 };
  console.log(deepEqual(obj, obj));
  // → true
  console.log(deepEqual(obj, { here: 1, object: 2 }));
  // → false
  console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
  // → true
};

console.log(`---Deep Comparison Exercise`);
deepComparison();
