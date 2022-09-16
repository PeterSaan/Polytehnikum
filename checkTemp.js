function checkTemp (temp) { 
  if (temp <= 20)
    {return -1}
    else if (temp >= 20 && temp <= 40)
      {return 0}
    else if (temp >= 41 && temp <= 60)
      {return 1}
} 

function generateRandomNumber (b,a) {
    return Math.floor(Math.random() * (a - b + 1) + b)
}

//Suvaline temperatuur 0-60 kraadi vahel
var randomNum = generateRandomNumber(0,60)
console.log(randomNum + "°C")

var temp = checkTemp(randomNum)
console.log(temp)

