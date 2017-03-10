

// document.getElementById('rollButton').onclick = rollDiceButtonClicked;


// controls logic for both dice and sums the total

var rollNumber = 0, pointValue = 0, loseValues = [2, 3, 12],
    diceOneValue, diceTwoValue, rollTotal;

// ********roll button********
document.getElementById("rollButton").addEventListener("click", rollDiceButtonClicked);

function rollDiceButtonClicked() {
  generateDiceValues();
  displayDiceRoll();
  determineOutcomeOfRoll(rollNumber, rollTotal);
  dice1Images();
  dice2Images();
}


// ********reset button********

document.getElementById("resetButton").addEventListener("click", resetDice);

function resetDice() {
  document.getElementById('dice1').innerHTML = "Die 1: ";
  document.getElementById('dice2').innerHTML = "Die 2: ";
  document.getElementById('total').innerHTML = "Total: ";
  document.getElementById('rollMessage').innerHTML = "";
  document.getElementById('dice1Img').style.backgroundImage = "url('imgs/dice0.jpg')";
  document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice0.jpg')";
}





function generateDiceValues() {
  diceOneValue = Math.floor(Math.random() * 6 + 1);
  diceTwoValue = Math.floor(Math.random() * 6 + 1);
  rollTotal = diceOneValue + diceTwoValue;
}


function displayDiceRoll() {
  // document.getElementById('rollNumber').innerHTML = "Roll Number: " + rollNumber;
  // document.getElementById('rollNumber').innerHTML = rollNumber;
  document.getElementById('dice1').innerHTML = "Die 1: " + diceOneValue;
  document.getElementById('dice2').innerHTML = "Die 2: " + diceTwoValue;
  document.getElementById('total').innerHTML = "Total: " + rollTotal;
}


// ********Dice Images********

function dice1Images() {
  var firstDie;  
  var secondDie;
  
  // document.getElementById('dice1Img').style.backgroundImage = "url('imgs/dice1.jpg')";
    
    if (diceOneValue === 1) {
      document.getElementById('dice1Img').style.backgroundImage = "url('imgs/dice1.jpg')";
    }
    if (diceOneValue === 2) {
      document.getElementById('dice1Img').style.backgroundImage = "url('imgs/dice2.jpg')";
    }
    if (diceOneValue === 3) {
      document.getElementById('dice1Img').style.backgroundImage = "url('imgs/dice3.jpg')";
    }
    if (diceOneValue === 4) {
      document.getElementById('dice1Img').style.backgroundImage = "url('imgs/dice4.jpg')";
    }
    if (diceOneValue === 5) {
      document.getElementById('dice1Img').style.backgroundImage = "url('imgs/dice5.jpg')";
    }
    if (diceOneValue === 6) {
      document.getElementById('dice1Img').style.backgroundImage = "url('imgs/dice6.jpg')";
    }
  


    // if (diceOneValue === 1) {
    //   document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice1.jpg')";
    // }
    // if (diceOneValue === 2) {
    //   document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice2.jpg')";
    // }
    // if (diceOneValue === 3) {
    //   document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice3.jpg')";
    // }
    // if (diceOneValue === 4) {
    //   document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice4.jpg')";
    // }
    // if (diceOneValue === 5) {
    //   document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice5.jpg')";
    // }
    // if (diceOneValue === 6) {
    //   document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice6.jpg')";
    // }

  }

function dice2Images() {

    if (diceTwoValue === 1) {
      document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice1.jpg')";
    }
    if (diceTwoValue === 2) {
      document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice2.jpg')";
    }
    if (diceTwoValue === 3) {
      document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice3.jpg')";
    }
    if (diceTwoValue === 4) {
      document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice4.jpg')";
    }
    if (diceTwoValue === 5) {
      document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice5.jpg')";
    }
    if (diceTwoValue === 6) {
      document.getElementById('dice2Img').style.backgroundImage = "url('imgs/dice6.jpg')";
    }

}

  // document.getElementById("dice1Img").className = firstDie;
  // document.getElementById("dice2Img").className = secondDie;






function determineOutcomeOfRoll(rollNumber, rollTotal) {
  rollNumber += 1;
  // 1st roll: win, lose, or assign 'point'
  if (rollNumber === 1) {
    if (rollTotal === 7 || rollTotal === 11) {
     console.log('immediate win!'); 
     document.getElementById('rollMessage').innerHTML = "You Win";
   }
    
    loseValues.forEach(function(loss) {
      if (rollTotal === loss) {
       console.log('immediate loss!');
       document.getElementById('rollMessage').innerHTML = "You Lose"; 
     }
    });
    pointValue === rollTotal;
  }

  // every other roll
  if (rollTotal === pointValue || rollTotal === 7) {
    console.log('win! -> ' + rollNumber + ' turns to score ' + rollTotal);
    document.getElementById('rollMessage').innerHTML = "You Win!";
  }
  loseValues.forEach(function(loss) {
    if (rollTotal === loss) {
      console.log('loss! -> ' + rollNumber + ' turns to score ' + rollTotal);
      document.getElementById('rollMessage').innerHTML = "You Lose";
    }
  });
  }
  console.log(rollNumber + ": " + rollTotal);


// function diceRollLogic () {

// var dieRollOne = Math.floor(Math.random() * 6 + 1);
// document.getElementById('diceNumOne').innerHTML = "Die 1: " + dieRollOne;
// console.log("Die one rolled a " + dieRollOne);

// // die two
// var dieRollTwo = Math.floor(Math.random() * 6 + 1);
// document.getElementById('diceNumTwo').innerHTML = "Die 2: " + dieRollTwo;
// console.log("Die two rolled a " + dieRollTwo);

// // total = sum of die one and two
// var dieRollTotal = dieRollOne + dieRollTwo;
// document.getElementById('diceTotal').innerHTML = "Total: " + dieRollTotal;
// console.log("Your combined roll is: " + dieRollTotal);









// ******************************************************************************

// // die one
// function diceRollLogic () {

// var dieRollOne = Math.floor(Math.random() * 6 + 1);
// document.getElementById('diceNumOne').innerHTML = "Die 1: " + dieRollOne;
// console.log("Die one rolled a " + dieRollOne);

// // die two
// var dieRollTwo = Math.floor(Math.random() * 6 + 1);
// document.getElementById('diceNumTwo').innerHTML = "Die 2: " + dieRollTwo;
// console.log("Die two rolled a " + dieRollTwo);

// // total = sum of die one and two
// var dieRollTotal = dieRollOne + dieRollTwo;
// document.getElementById('diceTotal').innerHTML = "Total: " + dieRollTotal;
// console.log("Your combined roll is: " + dieRollTotal);

// function determinePoint () {

// }


// function winOrLose () {
//   if () {
//     return true;
//   }
//   if (){
//     return false;
//   }

// }


// button
// document.getElementById('rollButton').onclick = playerTurn


// function dieRollTotal(); { 
//   if(dieRollTotal === 7 || dieRollTotal === 11) {
//     // document.write("PASS: Next player's turn");
//     document.getElementById('rollMessage').innerHTML = "PASS: Next player's turn";
//     console.log("PASS: Next player's turn");
//   }
//   else if(dieRollTotal === 2 || dieRollTotal === 3 || dieRollTotal === 12) {
//     // document.write("CRAP: Your'e shit out of luck!");
//     document.getElementById('rollMessage').innerHTML = "CRAP: Your'e shit out of luck!";
//     console.log("CRAP: Your'e shit out of luck!");
//   }
 
//   else if(dieRollTotal === 4 || dieRollTotal === 5 || dieRollTotal === 6 || dieRollTotal === 8 || dieRollTotal === 9 || dieRollTotal === 10){
//     var point = dieRollTotal;
//     // document.write("Point is " + point);
//     document.getElementById('pointValue').innerHTML = "Point is " + point;
//     console.log("Point is " + point);
//   }

// }


  // function globalPointDisplay (){
  //   if (dieRollTotal === point) {
  //     point = globalPoint;
  //     console.log(globalPoint);
  //   }

  //   else () {
  //     globalPoint = 0;
  //   }
  // }

