
let candles = [3, 2, 1, 10, 10,]
let length = 4

//functional version
const countHighestNumbers = arr => 
        arr.filter((number)=> (number === arr.reduce(
            (a,b)=> Math.max(a,b)))).length

//imperative version
function xcountHighestNumbers(arr){
    let highestHeight = []
    for(var i in arr){
        if(arr[i] === arr.reduce(function(a,b){
            return Math.max(a,b)
        }))
        {
            highestHeight.push(arr[i])
        }
    }
}


console.log(countHighestNumbers(candles))