function computeTripledAreaOfARectangle(length, width) {
  let area = length * width;
  let tripledArea = area * 3;
  return tripledArea;
  
}

let output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24
