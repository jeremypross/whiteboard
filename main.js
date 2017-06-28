

// given a string and a character, find the # of times the character appears

const countChars = (params, string) => {
  let count = 0;
  for (let i=0; i < string.length; i++) {
    if (string[i] === params) {
      count ++;
    }
  }
  return count;
}

countChars('a', 'apple');

// given an array from 1-100, there's exactly one duplicate, find all duplicates

const findDuplicates = (array) => {
  // create holder object as dictionary
  let holderObj = {};
  for (let i=0; i < array.length; i++) {
    // if there is no array element that has been iterated over before - turn that array element into a 1
    if (!obj[array[i]]) {
      obj[array[i]] = 1;
    } else {
      // else return that element
      return array[i];
    }
  }
}

// two loops = O(n)^2

const findDups = (array) => {
  let holderArray = [];
  for (let i=0; i< array.length; i++) {
    for (let j = i; l < array.length; j++) {
      if(i!==j && array[i] == array[j]) {
        holderArray.push(array[i], array[j]);
      }
    }
  }
  return holderArray;
}

// one loop O(n)

const findDups = (array) => {
  let dupArray = [];
  let holderObj = {};
  for (let i=0; i<array.length; i++) {
    if (!holderObj[array[i]]) {
      holderObj[array[i]] = 1;
    } else {
      dupArray.push(array[i]);
    }
  }
  return dupArray;
}

// reverse a string

const reverseString = (string) => {
  let reversed = '';
  for (let i = string.length -1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
}

reverseString('apple');

// return largest alue of an array

let inputArray = [1,2,4,16,5];

const largestNum = (array) => {
  // set placeholder
  let largest = array[0];
  // for each loops
  inputArray.forEach((d) => {
    // if d > largest, largest is now d's value
    if (largest > d) {
      d = largest;
    }
  })
  return largest;
}

// palindromes

// creates string reversed
const isPalindrome = (string) => {
  return string.split('').reverse().join('');
}

// check palindrome
const isPalindrome = (string) => {
  let array = string.split(' ').join('').split('');
  for (let i=0; i<array.length/2; i++) {
    // iterates inwards from each end of array
    if (array[i] !== array[array.length-(i+1)]) {
      return false
    }
  }
  return true;
}

isPalindrome('racecar');

// return two largest values from an array

let array = [4,2,5,1,6];

const twoLargest = (array) => {
  let a = array[0];
  let b = array [1];
  if (b>a) {
    let temp = a;
    a = b;
    b = temp;
  }
  for (let i=2; i < array.length; i++) {
    if (array[i] > a) {
      b = a;
      a = array[i];
    } else if (array[i] > b) {
      b = array[i];
    }
  }
  return {
    largest: a,
    second: b
  }
}

twoLargest(array);

// given an array and an integer - find the two array elements that add to the integer

const findSum = (array, b) => {
  for (let i=0; i <array.length; i++) {
    for (let j=i; j <array.length; j++) {
      if (array[i] + array[j] === b) {
        return array[i], array[j];
      }
    }
  }
  return false;
}

// create triangle with height of triangle in rows as parameter

const createTriangle = (rows) => {
  let triangle = [];
  for (let i=0; i < rows; i++) {
    let tempArray = [1];
    for (let j=0; j<i; j++) {
      tempArray.push(1);
    }
    triangle.push(tempArray);
  }
  return triangle;
}

// create pyramid (spaces)

const buildPyramid = (rows) => {
  const symbol = '^';
  let symbolCount = 1;
  let spaceCount = rows-1;
  let pyramid = '';

  for (let i=0; i < rows; i++) {
    let str = '';
    for (let j=0; j<spaceCount; j++) {
      str += ' ';
    }
    for (let k=0; k<symbolCount; k++) {
      str += symbol;
    }
    spaceCount -= 1;
    symbolCount += 2;
    pyramid += `${str} \n`;
  }
  return pyramid;
}

// given an array of stock values over time, find the max profit
// link: https://gist.github.com/jenjwong/c16d2b235c4c9aa931d3

let array = [50, 100, 25, 80];

const getMaxProfit = (stockPricesArray) => {
  if (stockPricesArray.length < 2) {
    throw new Error('Need at least two stock prices!');
  }
  let minPrice = stockPricesArray[0];
  let maxProfit = stockPricesArray[1] - stockPricesArray[0];
  for (let i=1; i < stockPricesArray.length; i++) {
    const currentPrice = stockPricesArray[i];
    const potentialProfit = currentPrice - minPrice;
    maxProfit = Math.max(maxProfit, potentialProfit);
    minPrice = Math.min(minPrice, currentPrice);
  }
  return maxProfit;
}

// mapping DNA - write a function that take an array and output complementary DNA sequence:

const dnaTransform = (dna) => {
    let arr = [];
    for (i=0; i< arr.length; i++) {
      if (dna ==='A') {
        arr.push('T');
      } else if (dna === 'T') {
        arr.push('A');
      } else if (dna === 'G') {
        arr.push('C');
      } else if (dna === 'C') {
        arr.push('G');
      }
    }
  }

  dnaTransform(dna) {
    let dnaHash = {
      A: 'T',
      T: 'A',
      G: 'C',
      C: 'G'
    }
    let dnaT = '';
    dna.split('').forEach((d) => dnaT +=dnaHash[d]);
    return dnaT;
    })
  }

// Odds and Events
// Write a function called 'oddsEvens' that given a string, prints its even-indexed and odd-indexed characters as space-separated strings on a single line

const oddsEvens = (string) => {
  let left = '';
  let right = '';
  for (let i=0; i < string.length; i++) {
    if (i%2 === 0) {
      left += `${string[i]}`;
    } else {
      right += `${string[i]}`;
    }
  }
  return `${left} ${right}`;
}
