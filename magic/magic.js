const magicNumber = Math.round(Math.random() * 100);
var life = 5;

function displayLife(_){
    if(_ <= 0) { _ = 0 }
    document.getElementById(`life`).innerHTML = _;
}

function guessMagicNumber() {
    life--;
    console.log(life);  
    let answer = Number(document.getElementById(`magicNumber`).value)

    let checkIfMagicNumber = (a) => a == magicNumber ? `You win!` : checkIfZero(a);
    let checkIfZero = (a) => a == 0 ? " " : checkIfLowerOrHigher(a);
    
    let checkIfLowerOrHigher = (a) => {

        let ifLowerOrHigher = () => a > magicNumber ? 
            `Your answer is greater than the magic number!` : 
            `Your answer is lower than the magic number!`;

        return life <= 0 ? `Game Over ! The magic number is   ${magicNumber}` : ifLowerOrHigher()
    }

    document.getElementById("display").innerHTML = checkIfMagicNumber(answer);

    displayLife(life);
}

function displayMagicNumber() {
    document.getElementById("display").innerHTML = `The magic number is ${magicNumber}`;
}