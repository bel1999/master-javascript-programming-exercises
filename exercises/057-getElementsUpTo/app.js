function getElementsUpTo(array, n) {
  let elementsUpTo = array.slice(0, n);
  return elementsUpTo;
  
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
