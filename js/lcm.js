function leastCommonMultiple(min, max) {
    let range = (min, max) => Array.apply(null, Array(max)).map((x,i) => i+1).filter(x => x >= min)
    let gcd = (a, b) =>  !b ? a : gcd(b, a % b);
    let lcm = (a, b) => (a * b) / gcd(a, b);   
    var multiple = min;
    range(min, max).forEach(n => multiple = lcm(multiple, n));
    return multiple;
}


console.log(leastCommonMultiple(1,12))