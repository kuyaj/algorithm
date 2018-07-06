function getTwoSet(fsArray, scArray){
    let fs = Number(fsArray.length > 1 ? fsArray.filter(x => x % fsArray.indexOf(x) == 0) : fsArray)
    let sc = Number(scArray.length > 1 ? scArray.filter(x => scArray.indexOf(x) % x == 0) : scArray)
    let getlength = arr => arr.filter(x => arr[arr.length-1] % x == 0).length
    function printMultiple(x, y){
        var multiples = []
        for(var i=1; i <= y; i++){
            if(i % x == 0){ 
              multiples.push(i)
            }
        }
        return multiples        
    }
    return getlength(printMultiple(fs, sc))
}

console.log(getTwoSet([2,4], [16, 32, 96]))
console.log(getTwoSet([2], [20, 32, 46]))