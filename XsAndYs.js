function charCount(string, letter) {
    let amount = 0
    
    for(position = 0; position < string.length; position++) {
        if(string.charAt(position) == letter) {
            amount++
        }
    }
    return amount
}

console.log(charCount("abbccc", "a"))
