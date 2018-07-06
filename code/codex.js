

function mean (numbers) {
    return numbers.reduce((x, y) => x + y) / numbers.length;
}

function median (number) {
    numbers.sort()
    let ifLenIsEven = () => numbers[(numbers.length / 2)-1] + numbers[(numbers.length/2)];
    let ifLenIsOdd = () => numbers[(numbers.length-1)/2]; 
    return numbers.length % 2 == 0 ? ifLenIsEven() : ifLenIsOdd();
}

function mode (numbers) {

    let modes = [];
    let count = [];
    let max = 0;
    
    numbers.forEach(x => {
        count[x] = (count[x] || 0) + 1;
        if (count[x] > max) {
            max = count[x];
        }
    })

    for (var x in count)
        if (count.hasOwnProperty(x)) {
            if (count[x] === max) {
                modes.push(Number(x));
            }
        }

    return modes;
}


let numbers = [2,4,4,8,8,10]

console.log(mean(numbers))
console.log(median(numbers))
console.log(mode(numbers))