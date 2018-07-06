function getTotalX(one,two) {
     let fs = one.reduce((a,b) => Math.max(a, b))
     let sc = two.reduce((a,b) => Math.min(a,b))
     let middle = Array.apply(null, Array(sc)).map((a,b) => b+1).filter(i => i % fs == 0) 
     
     return middle
}
    
// console.log(getTotalX([2],[20,30,12])) // should yield 1
// console.log(getTotalX([2,4],[16,32,96])) // should yield 




    