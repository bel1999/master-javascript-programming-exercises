function computePerimeterOfARectangle(length, width) {
  let perimeter = 2 * (length + width);
  return perimeter;
}

let output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14
