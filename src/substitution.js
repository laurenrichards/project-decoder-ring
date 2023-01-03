const substitutionModule = (function () {
  const normalAlphabet="abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    //ignores capital letters
    let newInput= input.toLowerCase().split("")
    let answer="";
    
    //return false if no input or no alphabet given
    if(!input || !alphabet){
      return false
    }
    
    //return false if the length of the given alphabet isn't 26 letters long
    if(alphabet.length !== 26){
      return false
    }
    
    //loops through each letter of alphabet to check for duplicate characters
    for (let i=0; i<alphabet.length; i++){
      let doubles=0;
    for (let j=0; j<alphabet.length; j++){
      if (alphabet[i]===alphabet[j]){
        doubles+=1; 
      }
    }
      if (doubles > 1){
        return false;
      }
    }
    //if encoding-- looping through letters of lowercase input 
    if (encode){
      for (let characters of newInput){
        //if there is a space, it maintains it and adds it to message 
        if (characters === " "){
          answer+= characters;
          continue; 
        }
        //loops through letters in the normal alphabet 
      for (let letters of normalAlphabet){
        //compares them to characters in input
        if(characters=== letters){
          let cipher= normalAlphabet.indexOf(characters);
          answer += alphabet.charAt(cipher); 
        }
      }
      }
      return answer;
    }
    //if decoding-- looping through letters of lowercase input
    if (!encode){
      for (let characters of newInput){
        //if there is a space, it maintains it and adds it to message 
        if( characters ===" "){
          answer+= characters;
          continue;
        }
        //loops through letters in provided alphabet
        for (let letters of alphabet){
          //compares letters of provided alphabet to characters of input
          if(characters===letters){
            let cipher= alphabet.indexOf(characters);
            answer+= normalAlphabet.charAt(cipher);
          }
        }
      }
      return answer;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };