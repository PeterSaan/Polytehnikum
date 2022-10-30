// https://www.reddit.com/r/dailyprogrammer/comments/ffxabb/20200309_challenge_383_easy_necklace_matching/

//Function to check, if amen = name, just in a differnet order
function sameNecklace(name, amen) {
    if (name != amen) {
        name.charAt(0) == amen.charAt(amen.length - 1)
        return (name == amen) == true
    } else {
        return "It's the same order..."
    }
    return name == amen
}

console.log(sameNecklace("mom", "omm"))
