function average(arr) {
  return sum(arr) / arr.length;
  
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
  
}

console.log(average([1, 2])); // --> 1.5
