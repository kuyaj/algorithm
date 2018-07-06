var x_range = (start, end) => {
    if(start >= end) { 
       return start 
    }
    console.log(start); 
    return x_range(start+1, end);
}

// function range(start, end){
//     if(start >= end){
//      return start
//     }
//     else{
//      console.log(start)
//       return range(start+1, end)
//      }                                      
// }

console.log(x_range(1,10))