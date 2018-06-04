// Rover Object Goes Here
// ======================


// ROVER OBJECT AND PROPERTIES / KEY-VALUES

rover = {
  direction: ["North","East","South","West"],
  x: [0,1,2,3,4,5,6,7,8,9],
  y: [0,1,2,3,4,5,6,7,8,9],
  travelLog: []
}

// ROVER STARTS FACING NORTH

rover.direction = "North";

// ROVER STARTING POSITION IS 0,0

rover.x = 0;
rover.y = 0;

// FUNCTION FOR ROVER DIRECTION AND XY COORDINATES

function roverStatus() {
  console.log(`Rover is currently at position ${rover.x},${rover.y} and is facing ${rover.direction}.`)
}

// DECLARING WHAT DIRECTION ROVER STARTS, AND WHERE IT IS ON GRID.

console.log(`Welcome to the Mars Rover test mission! Rover is currently at position ${rover.x},${rover.y} and is facing ${rover.direction}.`)
console.log(`Check Rover's current direction and position by using function "roverStatus()".`)
console.log(`Move Rover by using function "roverMove('x')"; replace 'x' with 'l' to make Rover turn left, 'r' to make Rover turn right, and 'f' to make Rover move forward.`)
console.log(`Please remember that this is all very new to Rover, and so his code may be, uh... quite messy and unnecessarily complex. Have fun playing with Rover!`)


// ======================

function turnLeft(rover) {
  console.log("turnLeft was called!");
  if (rover.direction === "North") {
    rover.direction = "West";
  } else if (rover.direction === "West") {
    rover.direction = "South"
  } else if (rover.direction === "South") {
    rover.direction = "East";
  } else if (rover.direction === "East") {
    rover.direction = "North"
  }
//    console.log(`Rover is currently at position ${rover.x},${rover.y} and is facing ${rover.direction}.`);
  }

function turnRight(rover) {
  console.log("turnRight was called!");
  if (rover.direction === "North") {
    rover.direction = "East";
  } else if (rover.direction === "East") {
    rover.direction = "South"
  } else if (rover.direction === "South") {
    rover.direction = "West";
  } else if (rover.direction === "West") {
    rover.direction = "North"
  }
//    console.log(`Rover is currently at position ${rover.x},${rover.y} and is facing ${rover.direction}.`);
  }

function moveForward(rover) {
  console.log("moveForward was called");
  if (rover.direction === "North") {
//    roverLog(rover.x,rover.y);
    rover.y -= 1;
  } else if (rover.direction === "South") {
//    roverLog(rover.x,rover.y);
    rover.y += 1;
  } else if (rover.direction === "West") {
//    roverLog(rover.x,rover.y);
    rover.x -= 1;
  } else if (rover.direction === "East") {
//    roverLog(rover.x,rover.y);
    rover.x += 1;
  }
//    console.log(`Rover is currently at position ${rover.x},${rover.y} and is facing ${rover.direction}.`);
    rover.travelLog.push([rover.x,rover.y]);
    console.log
}

// FUNCTION FOR REPORTING ROVER.TRAVELLOG

function roverHistory() {
  return JSON.stringify(rover.travelLog);
}

// FUNCTION TO ACCEPT COMMANDS

function roverMove(commandString) {
  for (let commandIndex = 0; commandIndex < commandString.length; commandIndex++) {
    if (commandString.charAt(commandIndex) === "r") {
      turnRight(rover);
    } else if (commandString.charAt(commandIndex) === "l") {
      turnLeft(rover);
    } else if (commandString.charAt(commandIndex) === "f") {
      moveForward(rover);
    }
  }
  console.log(`Rover is currently at position ${rover.x},${rover.y} and is facing ${rover.direction}.`);
  console.log(`Rover's recorded locations have been: ${roverHistory()}`);
}