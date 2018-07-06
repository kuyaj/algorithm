let  start1 = 0, 
     start2 = 5
let  jump1 = 2, 
     jump2 = 3


function kangaroo(s1, s2, j1, j2){
    let n = (s1 - s2 ) / (j2 - j1)
    return n >= 0 && Number.isInteger(n) ? "YES" : "NO"
}

console.log(kangaroo(start1, start2, jump1, jump2))
