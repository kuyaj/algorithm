const min = arr =>  arr.reduce((a,b) => Math.min(a,b))
const max = arr => arr.reduce((a,b) => Math.max(a,b))
const sum = arr  => arr.reduce((a,b) => a + b)
const sort = arr => arr.sort((a,b) => a - b)
const loop = arr => arr.forEach(e=> console.log(e))
const range = (min, max) => Array.apply(null, Array(max)).map((a,b) => b + 1).filter((x)=> x >= min)
let gcd = (a, b) =>  !b ? a : gcd(b, a % b);
let lcm = (a, b) => (a * b) / gcd(a, b);   

function range(min, max) {
    var arr = [];
    for (var i = min; i <= max; i++) {
        arr.push(i);
    }
    return arr;
}