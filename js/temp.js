
var temp = [36.5,37, 37.5, 39]

let fahrenheit = (x) => (((5)/5)*x+32)

let celsius = (y) => (5.0/9)*(y-32)

var F = temp.map(fahrenheit)
var C = F.map(celsius)

console.log(F)
console.log(C)