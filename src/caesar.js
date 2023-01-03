const caesarModule = (function () {
  
  function caesar(input, shift, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let answer = "";
    //if shift is 0, not present or >25/<-25 it returns false
    if(shift===0 || shift > 25 || shift < -25 || shift===undefined){
      return false;
    } 
    //if we are decoding, it reverses the shift
    if (encode === false){
      shift = (shift * -1);
    }     
  
  for (let i = 0; i < input.length; i++){
     let inputted = input[i].toLowerCase();
      if (alphabet.includes(inputted)){
        const inputtedIndex = alphabet.indexOf(inputted);
        let shiftedIndex = inputtedIndex + shift;
       
        if (shiftedIndex > 25){
          shiftedIndex += -26;
        }
        
        if (shiftedIndex < 0 && shiftedIndex > -25){
          shiftedIndex += 26;
        }
        const shiftedLetter = alphabet[shiftedIndex];
        answer += shiftedLetter;
      } else{
        answer += inputted;
      }
  }
      return answer;
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };