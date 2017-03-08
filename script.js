document.getElementById('rollButton').onclick = roll;

function roll () {
var dieRollOne = Math.floor(Math.random() * 6 + 1);
document.write("Die one rolled a " + dieRollOne);
console.log("Die one rolled a " + dieRollOne);

var dieRollTwo = Math.floor(Math.random() * 6 + 1);
document.write("Die two rolled a " + dieRollTwo);
console.log("Die two rolled a " + dieRollTwo);

var dieRoleTotal = dieRollOne + dieRollTwo;
document.write("Your combined roll is: " + dieRoleTotal);
console.log("Your combined roll is: " + dieRoleTotal);



// button
// document.getElementById('rollButton').onclick = playerTurn


var playerTurn = Function (dieRoleTotal); { 
  if(dieRoleTotal === 7 || dieRoleTotal === 11) {
    document.write("PASS: Next player's turn");
    console.log("PASS: Next player's turn");
  }
  else if(dieRoleTotal === 2 || dieRoleTotal === 3 || dieRoleTotal === 12) {
    document.write("CRAP: Your'e shit out of luck!");
    console.log("CRAP: Your'e shit out of luck!");
  }
 
  else if(dieRoleTotal === 4 || dieRoleTotal === 5 || dieRoleTotal === 6 || dieRoleTotal === 8 || dieRoleTotal === 9 || dieRoleTotal === 10){
    var point = dieRoleTotal;
    document.write("Point is " + point);
    console.log("Point is " + point);
  }

}
}

