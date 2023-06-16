/* forEach(): iterates through each element in "element" array
and executes a function on each element. Returns undefined*/
const myEach = (element, func) => {
  const arr = [...element];
  for (let i = 0; i < element.length; i++) {
    func(arr[i]);
  }
};
const arr1 = [1, 2, 3, 4, 5];
let squared = 1;
const tempForEach = (e) => {
  return (squared *= e);
};
console.log(`forEach(): ${myEach(arr1, tempForEach)} | squared = ${squared}`);

////////////////////////////////////////////////////////////////
/*map(): iterates through each element in "element" array
and executes a function on each element. Returns a new array*/
const myMap = (element, func) => {
  const ret = [];
  const compare = [...element];
  for (let i = 0; i < element.length; i++) {
    ret[ret.length] = func(compare[i]);
  }
  return ret;
};
//adds 5
const tempMap = (e) => {
  return e + 5;
};
const arr2 = [...arr1];
console.log(`map(): ${myMap(arr2, tempMap)}`);

////////////////////////////////////////////////////////////////
/*filter(): iterates through each element in "element" array
and executes a function on each element and checks if the element
returns true when passed into provided function. If true, element
is pushed into the "ret" array. The "ret" array is returned after
all elements are iterated through.*/
const myFilter = (element, func) => {
  const ret = [];
  const compare = [...element];
  for (let i = 0; i < element.length; i++) {
    if (!!func(compare[i])) ret[ret.length] = compare[i];
  }
  return ret;
};
//filter test function
const tempFilter = (e) => {
  if (e < 5) {
    // console.log(e);
    return true;
  } else return false;
};
const arr3 = [2, 4, 6, 8, 10, 5, 1];
console.log(`filter(): ${myFilter(arr3, tempFilter)}`);

////////////////////////////////////////////////////////////////
/*some(): iterates through each element in "element" array until 
an element satisfies the given function. Returns true when at least
one element satisfies the given function.*/
const mySome = (element, func) => {
  const compareArr = [...element];
  for (let i = 0; i < element.length; i++) {
    if (!!func(compareArr[i])) return true;
  }
  return false;
};
//some test function
const tempSome = (e) => {
  if (e > 5) {
    // console.log(e);
    return true;
  } else return false;
};
const arr4 = [...arr3];
const arr4_1 = [1, 2, 3, 4, 5, 2, -1];
console.log(
  `some(): arr4 = ${mySome(arr4, tempSome)} | arr4_1 = ${mySome(
    arr4_1,
    tempSome
  )}`
);

////////////////////////////////////////////////////////////////
/*every(): iterates through each element in "element" array until 
an element satisfies the given function. Returns true when every 
element satisfies the given function.*/
const myEvery = (element, func) => {
  const temp = [];
  const compareArr = [...element];
  for (let i = 0; i < element.length; i++) {
    if (!!func(compareArr[i])) temp[temp.length] = compareArr[i];
  }
  //use of .length is not the best when comparing arrays,
  //but I do not know how else to compare them
  if (temp.length === compareArr.length) return true;
  else return false;
};
//some test function
const tempEvery = (e) => {
  if (e < 5) {
    // console.log(e);
    return true;
  } else return false;
};
const arr5 = [1, 3, -1, 4, 4, 2];
const arr5_1 = [1, 2, 3, 4, 5, 2, -1, 10];
console.log(
  `every(): arr5 = ${myEvery(arr5, tempEvery)} | arr5_1 = ${myEvery(
    arr5_1,
    tempEvery
  )}`
);

////////////////////////////////////////////////////////////////
/*reduce(): Initialize ret = first element of passed in array.
Check if there is an initial value passed in. ret is the accumulator
. After for loop finishes, returns "ret" variable.*/
const myReduce = (element, func, initialVal) => {
  const arr = [...element];
  let ret = arr[0];
  if (!!initialVal || initialVal === 0) {
    ret = initialVal;
    for (let i = 0; i < element.length; i++) {
      ret = func(ret, arr[i]);
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      ret = func(ret, arr[i]);
    }
  }
  return ret;
};
const tempReduce = (a, b) => {
  return a * 2 + b * 1;
};
const arr6 = [1, 3, -2];
const arr6_1 = [1, 2, 3];
console.log(
  `reduce(): arr6 = ${myReduce(arr6, tempReduce, 1)} | arr6_1 = ${myReduce(
    arr6_1,
    tempReduce,
    1
  )}`
);

////////////////////////////////////////////////////////////////
/*includes(): iterates through each element in "element" array until 
an element satisfies the given function. Returns true when at least
one element satisfies the given function.*/
const myIncludes = (element, find, func) => {
  const compareArr = [...element];
  for (let i = 0; i < element.length; i++) {
    if (!!func(compareArr[i], find)) return true;
  }
  return false;
};
//some test function
const tempIncludes = (a, b) => {
  if (a === b) {
    // console.log(`${a} & ${b} TRUE`);
    return true;
  } else {
    // console.log(`${a} & ${b} FALSE`);
    return false;
  }
};
const arr7 = ["hello", "good", "morning"];
console.log(`includes(): arr7 = ${myIncludes(arr7, "gello", tempIncludes)}`);

////////////////////////////////////////////////////////////////
/*indexOf(): First, checks if a "begin" index is provided,
where to start iterating. If a beginning index is provided
start for loop from that index. Else, begin from index 0. 
For each iteration, compare the element at that index with the
element you are trying to find, "find." If found, return "i", 
which is the index. If element is not found, returns "Element Not Found".*/
const myIndexOf = (element, find, begin) => {
  const compareArr = [...element];
  if (!!begin) {
    for (let i = begin; i < element.length; i++) {
      if (compareArr[i] === find) return i;
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      if (compareArr[i] === find) return i;
    }
  }
  return "Element Not Found";
};
const arr8 = ["hello", "good", "morning"];
console.log(`indexOf(): arr8 = ${myIndexOf(arr8, "morning", 0)}`);

////////////////////////////////////////////////////////////////
/*push(): Copies passed in array into array, arr. Appends
"elementToAdd" into the end of "arr". Returns "arr"*/
const myPush = (element, elementToAdd) => {
  const arr = [...element];
  arr[arr.length] = elementToAdd;
  return arr;
};
const arr9 = ["hello", "good", "morning"];
console.log(`push(): arr9 = ${myPush(arr9, "boink")}`);

////////////////////////////////////////////////////////////////
/*lastIndexOf(): Copies passed in array into array, compareArr. Initialize
indexTracker = 0. Loop through array and if current element is equal
to elementToFind, set indexTracker equal to the current index. This continues
until the end of the array. Returns indexTracker.*/
const myLastIndexOf = (element, elementToFind, begin) => {
  const compareArr = [...element];
  let indexTracker = "Element Not Found";
  if (!!begin) {
    for (let i = begin; i < element.length; i++) {
      if (compareArr[i] === elementToFind) indexTracker = i;
    }
  } else {
    for (let i = 0; i < element.length; i++) {
      if (compareArr[i] === elementToFind) indexTracker = i;
    }
  }
  return indexTracker;
};
const arr10 = ["hello", "good", "morning"];
console.log(`lastIndexOf(): arr10 = ${myLastIndexOf(arr10, "good", 2)}`);

////////////////////////////////////////////////////////////////
/*Object.keys(): Added a new method to the Object data type using .prototype.
Inside the function, initialized an empty array for appending the keys.
In the for loop, iterates through each element in passed object and appends
the keys. Returns the array of keys.*/
Object.prototype.grabKeys = (obj) => {
  const ret = [];
  for (const key in obj) {
    ret[ret.length] = key;
    // console.log(ret);
  }
  return ret;
};
let myObj1 = { a: "x", b: "y", c: "z" };
console.log(Object.grabKeys(myObj1));

////////////////////////////////////////////////////////////////
/*Object.values(): Added a new method to the Object data type using .prototype.
Inside the function, initialized an empty array for appending the keys.
In the for loop, iterates through each element in passed object and appends
the values of each key-value pair. Returns the array of keys.*/
Object.prototype.grabValues = (obj) => {
  const ret = [];
  for (const key in obj) {
    ret[ret.length] = obj[key];
    // console.log(ret);
  }
  return ret;
};
let myObj2 = { a: "x", b: "y", c: "z" };
console.log(Object.grabValues(myObj2));
