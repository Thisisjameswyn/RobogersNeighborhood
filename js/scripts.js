$(document).ready(function() {
  $("form#numberEntry").submit(function(event) {
    event.preventDefault();
    const userNumbers = $("input#number").val();
    $(".outputText").text(numberedArray(userNumbers));
  });
});

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
    return numberArray;
  }
