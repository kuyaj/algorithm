    const getPositive = (numbers, len) => numbers.filter(x => x > 0).length/len
    const getNegative = (numbers, len) => numbers.filter(x => x < 0 ).length/len
    const getZeroes = (numbers, len) => numbers.filter(x => x == 0 ).length/len


    function get_positive(numbers, len) {
        return numbers.filter(function(x){
            return x > 0
        }).length/len
    }

    function get_negative(numbers, len){
        return numbers.filter(function(x){
            return x < 0
        }).length/len
    }

    function get_zeroes(numbers, len){
        return numbers.filter(function(x){
            return x == 0
        }).length/len
    }

    let numbers = [-4, 3, -9, 0, 4, 1]
    let len = 6

    console.log(get_positive(numbers, len))
    console.log(get_negative(numbers, len))
    console.log(get_zeroes(numbers, len))
    

