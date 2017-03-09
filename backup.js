document.getElementById('rollButton').onclick = diceRollLogic;
var globalPoint = 0;


// controls logic for both dice and sums the total

// die one
function diceRollLogic () {
var dieRollOne = Math.floor(Math.random() * 6 + 1);
document.getElementById('diceNumOne').innerHTML = "Die 1: " + dieRollOne;
console.log("Die one rolled a " + dieRollOne);

// die two
var dieRollTwo = Math.floor(Math.random() * 6 + 1);
document.getElementById('diceNumTwo').innerHTML = "Die 2: " + dieRollTwo;
console.log("Die two rolled a " + dieRollTwo);

// total = sum of die one and two
var dieRollTotal = dieRollOne + dieRollTwo;
document.getElementById('diceTotal').innerHTML = "Total: " + dieRollTotal;
console.log("Your combined roll is: " + dieRollTotal);





var playerTurn = Function (dieRollTotal); { 
  if(dieRollTotal === 7 || dieRollTotal === 11) {
    // document.write("PASS: Next player's turn");
    document.getElementById('rollMessage').innerHTML = "PASS: Next player's turn";
    console.log("PASS: Next player's turn");
  }
  else if(dieRollTotal === 2 || dieRollTotal === 3 || dieRollTotal === 12) {
    // document.write("CRAP: Your'e shit out of luck!");
    document.getElementById('rollMessage').innerHTML = "CRAP: Your'e shit out of luck!";
    console.log("CRAP: Your'e shit out of luck!");
  }
 
  else if(dieRollTotal === 4 || dieRollTotal === 5 || dieRollTotal === 6 || dieRollTotal === 8 || dieRollTotal === 9 || dieRollTotal === 10){
    var point = dieRollTotal;
    // document.write("Point is " + point);
    document.getElementById('pointValue').innerHTML = "Point is " + point;
    console.log("Point is " + point);
  }

}
}

