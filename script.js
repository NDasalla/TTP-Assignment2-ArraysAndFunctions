/* forEach(): iterates through each element in "element" array
and executes a function on each element. Returns undefined*/
const forEachFunc = (element, func) => {
  const ret = [...element];
  for (let i = 0; i < element.length; i++) {
    func(ret[i]);
  }
};

/*map(): iterates through each element in "element" array
and executes a function on each element. Returns a new array*/
const mapFunc = (element, func) => {
  const ret = [...element];
  for (let i = 0; i < element.length; i++) {
    ret[ret.length] = func(ret[i]);
  }
  return ret;
};

/*filter(): iterates through each element in "element" array
and executes a function on each element and checks if the element
returns true when passed into provided function. If true, element
is pushed into the "ret" array. The "ret" array is returned after
all elements are iterated through.*/
const filterFunc = (element, func) => {
  const ret = [];
  const compareArr = [...element];
  for (let i = 0; i < element.length; i++) {
    if (!!func(compareArr[i])) ret[ret.length] = compareArr[i];
  }
  return ret;
};
//filter test function
const tempFilter = (e) => {
  if (e < 5) {
    console.log(e);
    return true;
  } else return false;
};

/*some(): iterates through each element in "element" array until 
an element satisfies the given function. Returns true when at least
one element satisfies the given function.*/
const someFunc = (element, func) => {
  const compareArr = [...element];
  for (let i = 0; i < element.length; i++) {
    if (!!func(compareArr[i])) return true;
  }
  return false;
};
//some test function
const tempSome = (e) => {
  if (e < 5) {
    console.log(e);
    return true;
  } else return false;
};

/*every(): iterates through each element in "element" array until 
an element satisfies the given function. Returns true when at least
one element satisfies the given function.*/
const everyFunc = (element, func) => {
  const temp = [];
  const compareArr = [...element];
  for (let i = 0; i < element.length; i++) {
    if (!!func(compareArr[i])) temp[temp.length] = compareArr[i];
  }
  console.log(temp);
  console.log(compareArr);
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

/*reduce(): iterates through each element in "element" array and 
adds the value of the element into the "ret" variable. After for loop
finishes, returns "ret" variable.*/
const reduceFunc = (element, initialVal) => {
  const arr = [...element];
  let ret;
  if (!!initialVal || initialVal === 0) {
    ret = initialVal;
    for (let i = 0; i < element.length; i++) {
      ret += arr[i];
    }
  } else {
    ret = arr[0];
    for (let i = 0; i < element.length; i++) {
      ret += arr[i];
    }
  }
  return ret;
};

/*includes(): iterates through each element in "element" array until 
an element satisfies the given function. Returns true when at least
one element satisfies the given function.*/
const includesFunc = (element, find, func) => {
  const compareArr = [...element];
  for (let i = 0; i < element.length; i++) {
    if (!!func(compareArr[i], find)) return true;
  }
  return false;
};
//some test function
const tempIncludes = (a, b) => {
  if (a === b) {
    console.log(`${a} & ${b} TRUE`);
    return true;
  } else {
    console.log(`${a} & ${b} FALSE`);
    return false;
  }
};

/*indexOf(): First, checks if a "begin" index is provided,
where to start iterating. If a beginning index is provided
start for loop from that index. Else, begin from index 0. 
For each iteration, compare the element at that index with the
element you are trying to find, "find." If found, return "i", 
which is the index. If element is not found, return null.*/
const indexOfFunc = (element, find, begin) => {
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
  return null;
};

const arr = ["h", "e", "l", "l", "o"];
//1st parameter = array, 2nd parameter = function
console.log(indexOfFunc(arr, "v"));
