$(document).ready(function() {
  $("#storyFoot").hide();
  $(".btn-group2").hide();
  
  $("form#numberEntry").submit(function(event) {
    event.preventDefault();
    const userNumbers = $("input#number").val();
    $(".outputText").text(numberedArray(userNumbers));
    $("#storyFoot").show();
    $(".btn-group2").show();
  });
 
  $("form#reset").submit(function(event) {
    location.reload();
    event.preventDefault();
  });
});

function numberedArray(inputNumber) {
  let numberArray = [];
    for (let index = 0; index <= inputNumber; index ++) {
      let indexStr = index.toString();
      if(indexStr.includes(3)) {
        numberArray.push("Won't you be my neighbor?");
      } else if (indexStr.includes(2)) {
        numberArray.push("Boop!");
      } else if (indexStr.includes(1)) {
        numberArray.push("Beep!");
      } else  {
        numberArray.push(indexStr);
      }
    }
    return numberArray;
  }
