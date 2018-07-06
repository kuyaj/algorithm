function changeVowels(word){
    let checkIfVowels = (letter) => 'aeiou'.includes(letter.toLowerCase());
    let countVowels = (word) => {
        let vowels = []        
        word.forEach(w => {
            if(checkIfVowels(w)){
                vowels.push(w)
            }
        })
        return word.replace(word, vowels.length);
    }
    let vowels = (word) => {
        var res = ""
        word.forEach(w => res += !checkIfVowels(w) ? w : countVowels(w))
        return res;
     }
    return vowels(word);
}
console.log(changeVowels("ChArity"))
console.log(changeVowels("Freedom"))