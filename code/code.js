function display() {

    data = [{
        "fullname": document.getElementById("fullname").value,
        "age": document.getElementById("age").value,
        "address": document.getElementById("address").value
    }]

    data.map((_) => {

        if (_.fullname != "" &&
            _.age != "" &&
            _.address != "") {

            document.getElementById("result").innerHTML =
                "Hello I am " + _.fullname + "\n" +
                _.age + " " + "years of age" + "\n" +
                " and live in " + _.address + "."
        } else {
            alert("Please fill in the blanks!")
        }
    })


}


function calc() {

    let x = Number(document.getElementById("X").value);;
    let y = Number(document.getElementById("Y").value);
    let z = Number(document.getElementById("Z").value);

    if (x > 0 && y > 0 && z > 0) {
        document.getElementById("result").innerHTML = (x + y + z);
    } else {
        document.getElementById("result").innerHTML = "Processing...";
    }


}