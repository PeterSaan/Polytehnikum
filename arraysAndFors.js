season = ["spring", "winter", "fall", "summer"];

for (i = 0; i <= 3; i++) { 
  console.log(season[i])
  if (season[i] === "spring") { 
    console.log("It's " + season[i] + ". The nature is waking up!")
  }
    else if (season[i] === "winter") { 
      console.log("It's " + season[i] + ". There's snow on the ground!" )
    }
    else if (season[i] === "fall") { 
      console.log("It's " + season[i] + ". The leaves are falling!")
    }
    else if (season[i] === "summer") { 
      console.log("It's " + season[i] + ". It's soooo fucking hot!")
    }
}
