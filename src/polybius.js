const polybiusModule = (function () {
  const pSquare = {
      1: ["a", "b", "c", "d", "e"],
      2: ["f", "g", "h", "(i/j)", "k"],
      3: ["l", "m", "n", "o", "p"],
      4: ["q", "r", "s", "t", "u"],
      5: ["v", "w", "x", "y", "z"],
    };

  function polybius(input, encode = true) {
    let answer = "";
    //ignores capital letters and allows input to be looked at one letter at a time
    let newInput= input.toLowerCase().split("");
    
    //rules to follow when encoding message
    if (encode) {
      //returns false if no input is given
      if(!newInput){
      return false
    }
     //maintaing spaces while encoding
      for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] === " ") {
          answer += " ";
        }
        //returns same code if either i OR j is given
        if (newInput[i] === "j" || newInput[i] === "i") {
          answer += 42;
        }
    //comparing characters from input to the const pSquare
        for (let y = 1; y < 6; y++) {
          if (pSquare[y].includes(newInput[i])) {
            let value = pSquare[y].indexOf(newInput[i]) + 1;
            answer += `${value}${y}`;
          }
        }
      }
      return answer;
    }
  // follow these rules when decoding a message
    if (!encode) {
      let counter = 0;
  //returns false if no input is given
      if(!newInput){
      return false
    }
  //if the characters in input do not equal a space, add it to the empty counter
      for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] !== " ") {
          counter = counter + 1;
        }
      }
  //if the counter is not divisible by 2 and does not leave a remainder of 0, then it is not an even number of characters, which should return false
      if (counter % 2 !== 0) {
        return false;
      }
  //maintaining spaces while decoding 
      for (let i = 0; i < newInput.length; i++) {
        if (newInput[i] === " ") {
          answer += " ";
        } else {
          let column = newInput[i];
          let row = newInput[i + 1];
          let letter = pSquare[row][column - 1];
          answer += letter;
          i++;
        }
      }

      return answer;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
