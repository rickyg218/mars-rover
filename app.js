






var Rover = {
  direction:"N",
  position:[0,0],
  travelLog:[0,0]
};


var travelLog = [rover.position[0], rover.position[1]]
rover.position.push(travelLog);
console.log(travelLog);

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
      case "N":
            rover.direction = "W";
            console.log("The direction is now West");
            break;
      case "S":
            rover.direction ="E";
            console.log("The direction is now East");
            break;
      case "E":
            rover.direction = "N";
            console.log("The direction is now North");
            break;
      case "W":
            rover.direction ="S";
            console.log("The direction is now South");
            break;

          }
}
function turnRight(rover){
  console.log("turnRight was called!");
  switch(rover.direction){
    case "N":
          rover.direction = "E";
          console.log("rover direction is east");
          break;
    case "S":
          rover.direction = "W";
          console.log("rover direction is west");
          break;
    case "E":
          rover.direction = "S";
          console.log("rover direction is south");
          break;
    case "W":
          rover.direction = "N";
          console.log("rover direction is north");
          break;
  }
}
 function moveForward(rover){
console.log("moveForward was called");
switch(rover.direction){
  case "N":
        rover.position [0]--;
        break;
  case "S":
        rover.position [0]++;
        break;
  case "E":
        rover.position[1]++;
        break;
  case "W":
        rover.position[1]--;
        break;

}
 }


function moveBackward(rover){
  console.log("moveBackward was called");
  switch (rover.direction) {
    case "N":
          rover.position[0]++;
          break;
    case "S":
          rover.position[0]--;
          break;
    case "E":
          rover.position[1]--;
          break;
    case "W":
          rover.position[1]++;
          break;

      }
}

function commands(rover,commands){
var commands = commands.split("");
for( var i=0; i<commands.length; i++){
  if (command ===r){
    turnRight(rover)
  }
  else if ( command ===l){
    turnLeft(rover)
  }
  else if (command===f){
    moveForward(rover)
  }
  else( commmand ===b){
    moveBackward(rover)
  }
}

      }
