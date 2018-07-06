const lenwords = word => word.match(/a|e|i|o|u/gi).length

const w_change_word = word => lenwords(word) >= 2 ? word.replace(/a|e|i|o|u/gi, lenwords(word)) : word

const changeword = word => word.split("")
    .map(e => !"aeiou".includes(e.toLowerCase()) ? e : lenwords(word))
    .toString()
    .replace(/,/g, '')  


console.log(w_change_word("developer"))
console.log(w_change_word("mutation"))



 