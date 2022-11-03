function solution(str){
  let reversed = ""
  
  for(i = str.length - 1; i == 0; i--) { 
    reversed += "" + str.charAt(i) 
  }
  return reversed
}

console.log(solution("hello"))
