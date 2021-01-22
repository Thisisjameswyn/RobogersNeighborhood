//UI logic


//Business

function numberedArray(inputNumber) {
  let numberArray = [];
    for (let index = 0; index <= inputNumber; index ++) {
      let indexComp = index.toString();
      if(indexComp.includes(3)) {
        numberArray.push("Won't you be my neighbor?");
      } else if (indexComp.includes(2)) {
        numberArray.push("Boop!");
      } else if (indexComp.includes(1)) {
        numberArray.push("Beep!");
      } else  {
        numberArray.push(indexComp);
      }
    }
    console.log(numberArray);
  }
  
  numberedArray(20);
  

//take input number and assign value to index amount
//add number sequentially to array based on amount of input number
//check each index in the array for a 1 2 or 3 against a comparison argument
//replace all 1 with "Beep!"
//replace all 2 with "Boop!"
//replace all 3 with "Won't you be my neighbor?"

//
