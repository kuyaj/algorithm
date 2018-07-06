var groceries = [
    'apple',
    'banana',
    'orange',
    'strawberries',
    'cherries'
]

var basket = []

const get_groceries = function () {
    groceries.forEach((item) => {
        if(!basket.includes(item)){
            basket.push(item);
        }
        console.log(basket)
    });
}

const buy_groceries = function() {
    var total = 0
    basket.forEach((item)=> {
        total += item.length;
    })
    console.log(total)
}

console.log(get_groceries())
console.log(buy_groceries())

