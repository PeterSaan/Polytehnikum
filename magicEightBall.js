let userName = "pets"
userName === "pets" ? console.log("Hello, Peter!") : console.log("Hello!")

let userQuestion = "should you come clean?"
console.log("Peter, " + userQuestion)

const ranNum = Math.floor(Math.random() * 8)

let eightBall = ""

console.log(ranNum)
switch (ranNum) { 
  case 0:
    eightBall = "It is certain"
    break
  case 1:
    eightBall = "It is decidedly so"
    break
  case 2:
    eightBall = "Reply hazy try again"
    break
  case 3:
    eightBall = "Cannot predict now"
    break
  case 4:
    eightBall = "Do not count on it"
    break
  case 5:
    eightBall = "My sources say no"
    break
  case 6:
    eightBall = "Outlook not so good"
    break
  case 7:
    eightBall = "Signs point to yes"
    break
  default:
    eightBall = "Please try again"
}
console.log(eightBall)

/*if (ranNum === 0) {
  eightBall = "It is certain"
}
  else if (ranNum === 1) { 
    eightBall = "It is decidedly so"
  }
  else if (ranNum === 2) { 
    eightBall = "Reply hazy try again"
  }
  else if (ranNum === 3) { 
    eightBall = "Cannot predict now"
  }
  else if (ranNum === 4) {
    eightBall = "Do not count on it"
  }
  else if (ranNum === 5) { 
    eightBall = "My sources say no"
  }
  else if (ranNum === 6) { 
    eightBall = "Outlook not so good"
  }
  else if (ranNum === 7) { 
    eightBall = "Signs point to yes"
  }
