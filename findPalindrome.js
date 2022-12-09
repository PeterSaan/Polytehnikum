function findPalindrome(word) {
    let inserted = 0
    for (let i = word.length-1; i >= 0; i--) {
        let rightSideIndex = i+inserted;
        let leftSideIndex = word.length-1-i-inserted;
        // Is letter on the right side missing on the left side
        if (word[rightSideIndex] !== word[leftSideIndex]) {
            word = insert(word, leftSideIndex, word[rightSideIndex])
            inserted++
        }

        if (isPalindrome(word))
            return word;
    }
}

function insert(str, pos, add) {
    return str.substring(0,pos) + add + str.substring(pos)
}

function isPalindrome(word) {
    for (let i = 0; i < Math.ceil(word.length/2); i++) {
        if (word[i] !== word[word.length-1-i])
            return false
    }
    return true;
}
console.log(findPalindrome("lambada"))
console.log(findPalindrome("race"))
//console.log(isPalindrome("lambada"))
//console.log(isPalindrome("qweewq"))
//console.log(isPalindrome("qwetewq"))
//lambada --> adabmalambada