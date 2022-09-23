//Mingi suvaline number
let i = 0
function suvNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min)    
}

const lampNr = suvNumber(1,10)
console.log(lampNr)
while(i < 3) {
    let kiri = prompt("Sisesta üks number 1-st 10-ni")
    
        if (kiri == lampNr) {
            alert("Väga tubli, arvasid numbri ära!")
            break
        }
            
            else if (kiri == (lampNr + 1) || kiri == (lampNr - 1)) {
                alert("Asa raisk, päris lähedale pakkusid!")            
            }
            
            else if (kiri != lampNr) {
                alert("Sorry " + kiri + " ei ole õige number")
            }
        i++
    }
