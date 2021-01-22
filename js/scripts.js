//UI logic


//Business

function numberedArray(inputNumber) {
  const compArray = [1,2,3];
  let numberArray = [];
    for (let index = 0; index <= inputNumber; index += 1) {
      if(compArray.includes(index)) {
        numberArray.push("Check!");
      } else {
        numberArray.push(index);
      }
      
      
    }
    /* const array = [inputNumber]; */
    console.log(numberArray);
  }
  
  numberedArray(20);
  

//take input number and assign value to index amount
//add number sequentially to array based on amount of input number
//check each index in the array for a 1 2 or 3 against a comparison array
//replace all 1 with "Beep!"
//replace all 2 with "Boop!"
//replace all 3 with "Won't you be my neighbor?"
