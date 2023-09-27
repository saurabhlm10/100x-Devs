/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const obj1 = {};
  const obj2 = {};

  str1.split('').forEach(element => {
    if (obj1[element.toLowerCase()]) {
      obj1[element.toLowerCase()] += 1
    } else {
      obj1[element.toLowerCase()] = 1
    }
  });
  str2.split('').forEach(element => {
    if (obj2[element.toLowerCase()]) {
      obj2[element.toLowerCase()] += 1
    } else {
      obj2[element.toLowerCase()] = 1
    }
  });

  return deepEqual(obj1, obj2)
}

function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }

  return true;
}

function isObject(object) {
  return object != null && typeof object === 'object';
}

module.exports = isAnagram;
