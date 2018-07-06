
function countAppleAndOranges(s, t, a, b, apples, oranges){

    let sum = (arr) => arr.reduce((x,y) => x + y)
    const appl =  Math.abs(sum(apples.filter(x => s <= a + x <= t)))
    const orang = Math.abs(sum(oranges.filter(x => s <= b + x <= t)))
    return [appl, orang]
}


let s = 7
let t = 11

let a = 5
let b = 15

let apples =  [-2, 2, 1]
let oranges = [5,-6]

console.log(countAppleAndOranges(s, t, a, b, apples, oranges))