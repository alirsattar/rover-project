// Rover Object Goes Here
// ======================

var rover = {
  direction: ["N","E","S","W"],
  x: [0,1,2,3,4,5,6,7,8,9],
  y: [0,1,2,3,4,5,6,7,8,9],
  }

// ROVER STARTS FACING NORTH

rover.direction = "N";

// ROVER STARTING POSITION IS 0,0

rover.x = 0;
rover.y = 0;

// ======================
function turnLeft(rover){
  console.log("turnLeft was called!");
}

function turnRight(rover){
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
}
