function isOddWithoutModulo(num) {
    let aux = true;
    if (num >= 0) {
        for (let x = 0; x <= num + 1; x += 2) {
            if (x === num) aux = false;
        }
    } else {
        for (let x = 0; x >= num - 1; x -= 2) {
            if (x === num) aux = false;
        }
    }
    return aux;
    
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
