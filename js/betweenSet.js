function findX(one, two){   
    let fs = Number(one.length > 1 ? one.filter(x => x % one.indexOf(x) == 0) : one)
    let  sc = Number(two.length > 1 ? two.filter(x => two.indexOf(x) % x == 0) : two)
    const len = ar => ar.filter(x => ar[ar.length-1] % x == 0 ).length
    return len(Array.apply(null, Array(sc)).map((a,b)=> b+1).filter((i)=> i % fs == 0))
}

console.log(findX([2], [20, 30, 12]))

