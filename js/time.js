function timeConverter(time) {
    let hours = Number(time.substring(0, 2));
    const ifTimeEndsWithPM = time.toLowerCase().endsWith("pm");
        let changeHour = function (hour) {
            let PM = hour != 12 ? (hour + 12) : time.substring(0,2)
            let AM = hour == 12 ? "00" : time.substring(0,2)
            return ifTimeEndsWithPM ? PM : AM;
        }
    return time.replace(time.substring(0,2), changeHour(hours)).toLowerCase().replace(/(am|pm)/, '');
}

//fully compact version
function xtimeConverter(time) {
    let changeHour = hour => time.toLowerCase().endsWith("pm") ?
     hour != 12 ? (hour + 12) : time.substring(0,2) : hour === 12 ? "00" : time.substring(0,2);
    return time.replace(Number(time.substring(0, 2)), changeHour(Number(time.substring(0, 2)))).toLowerCase().replace(/(am|pm)/, '');
}


//Test cases
console.log(timeConverter("07:31:15PM"))
console.log(timeConverter("09:31:15PM"))
console.log(timeConverter("11:31:15PM"))
console.log(timeConverter("12:00:00PM"))
console.log(timeConverter("12:00:00AM"))
console.log(timeConverter("08:31:15AM"))
console.log(timeConverter("11:21:14AM"))
console.log(timeConverter("12:40:22AM"))
