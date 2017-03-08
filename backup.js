document.getElementById('rollButton').onclick = roll;
var globalPoint = 0;

function roll () {
var dieRollOne = Math.floor(Math.random() * 6 + 1);
// document.write("Die one rolled a " + dieRollOne);
document.getElementById('diceNumOne').innerHTML = "Die 1: " + dieRollOne;
console.log("Die one rolled a " + dieRollOne);


var dieRollTwo = Math.floor(Math.random() * 6 + 1);
// document.write("Die two rolled a " + dieRollTwo);
document.getElementById('diceNumTwo').innerHTML = "Die 2: " + dieRollTwo;
console.log("Die two rolled a " + dieRollTwo);

var dieRollTotal = dieRollOne + dieRollTwo;
// document.write("Your combined roll is: " + dieRollTotal);
document.getElementById('diceTotal').innerHTML = "Total: " + dieRollTotal;
console.log("Your combined roll is: " + dieRollTotal);



// button
// document.getElementById('rollButton').onclick = playerTurn


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

