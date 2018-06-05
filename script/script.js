
// B = border
// E = end boss 
// F = fire sword
// G = Gate
// U = unvisited
// P = player
// S = princess
// V = visited


// T = dungeon budgi
// D = dragon

//---------------MODEL---------------//
///////////////////////////////////////

// Game constructor
function Game() {
  this.board = [
    ["G", "B", "B", "B", "U", "U", "U", "B", "B", "B", "B", "B", "U", "U", "U", "U", "U", "U", "U",],
    ["P", "U", "F", "B", "U", "B", "U", "B", "U", "S", "U", "B", "U", "B", "B", "B", "U", "U", "U",],
    ["B", "B", "U", "B", "U", "B", "U", "B", "U", "U", "U", "B", "U", "B", "U", "B", "U", "U", "U",],
    ["U", "B", "U", "B", "U", "B", "U", "U", "B", "U", "B", "U", "U", "U", "U", "B", "B", "B", "B",],
    ["U", "U", "U", "B", "U", "B", "U", "B", "U", "E", "U", "B", "U", "B", "U", "B", "U", "B", "U",],
    ["U", "B", "U", "B", "U", "B", "U", "B", "U", "U", "U", "B", "U", "B", "U", "B", "U", "B", "U",],
    ["U", "B", "U", "U", "U", "U", "U", "B", "B", "U", "B", "B", "U", "B", "U", "B", "U", "U", "U",],
    ["U", "B", "B", "B", "B", "B", "U", "U", "B", "U", "B", "U", "U", "B", "U", "B", "B", "B", "U",],
    ["U", "U", "U", "U", "U", "B", "B", "U", "B", "U", "B", "U", "B", "U", "U", "U", "U", "U", "U",],
    ["U", "B", "B", "B", "U", "U", "U", "U", "B", "U", "B", "U", "B", "U", "B", "B", "B", "B", "U",],
    ["U", "B", "U", "U", "B", "B", "B", "B", "B", "U", "U", "U", "B", "U", "U", "U", "U", "U", "U",],
    ["U", "B", "U", "U", "U", "U", "U", "U", "U", "B", "B", "B", "B", "B", "B", "B", "B", "B", "U",],
    ["U", "B", "U", "B", "B", "B", "B", "B", "U", "B", "U", "U", "U", "U", "U", "B", "U", "B", "U",],
    ["U", "B", "U", "B", "U", "U", "U", "B", "U", "B", "U", "B", "U", "B", "U", "B", "U", "B", "U",],
    ["U", "B", "U", "B", "U", "B", "U", "B", "U", "B", "U", "U", "U", "B", "U", "U", "U", "U", "U",],
    ["U", "B", "U", "U", "B", "B", "U", "B", "U", "B", "B", "U", "B", "U", "U", "B", "B", "B", "B",],
    ["U", "B", "B", "U", "U", "U", "U", "B", "U", "U", "U", "U", "B", "U", "B", "U", "B", "U", "U",],
    ["U", "U", "U", "B", "B", "B", "B", "B", "U", "B", "B", "B", "B", "U", "B", "U", "U", "U", "U",],
    ["B", "B", "U", "U", "U", "U", "U", "U", "U", "B", "U", "U", "U", "U", "U", "U", "B", "U", "U",],
  ]
  this.player = {
    x: 0,
    y: 1,
    direction: "down",
    weapon: "",
  };
};

var hero = new Game();
createBoard();


//---------------VIEW---------------//
//////////////////////////////////////


// function that creates the gameboard
function createBoard() {
  for (var i = 0; i < 19; i++) {
    for (var j = 0; j < 19; j++) {
      var gameBoardDiv = $("<div id='" + i + "-" + j + "' class='tile'></div>");
      $('.game-board').append(gameBoardDiv)
    }
  }
}

// Function for updating the tiles of the board
function updateTiles() {

  $(".tile").removeClass("player");
  $(".tile").removeClass("unvisited");

  for (var i = 0; i < 19; i++) {
    for (var j = 0; j < 19; j++) {
      // Update player
      // Direction up
      if (hero.board[i][j] == "P" && hero.player.direction == "up") {
        $("#" + i + "-" + j).addClass("player");
        $(".player").css({ "background-image": "url('./images/player_char/sprite_up.png')" });
      }
      // Direction right
      if (hero.board[i][j] == "P" && hero.player.direction == "right") {
        $("#" + i + "-" + j).addClass("player");
        $(".player").css({ "background-image": "url('./images/player_char/sprite_right.png')" });
      }
      // Direction down
      if (hero.board[i][j] == "P" && hero.player.direction == "down") {
        $("#" + i + "-" + j).addClass("player");
        $(".player").css({ "background-image": "url('./images/player_char/sprite_down.png')" });
      }
      // Direction down
      if (hero.board[i][j] == "P" && hero.player.direction == "left") {
        $("#" + i + "-" + j).addClass("player");
        $(".player").css({ "background-image": "url('./images/player_char/sprite_left.png')" });
      }
      // Update board, npcs and items 
      // Update princess
      if (hero.board[i][j] == "S") {
        $("#" + i + "-" + j).addClass("princess");
      }
      // Update villian
      if (hero.board[i][j] == "E") {
        $("#" + i + "-" + j).addClass("end-boss");
      }
      // Update unvisited
      if (hero.board[i][j] == "U") {
        $("#" + i + "-" + j).addClass("unvisited");
      }
      // Update visited
      if (hero.board[i][j] == "V") {
        $("#" + i + "-" + j).addClass("visited");
      }
      // Update border
      if (hero.board[i][j] == "B") {
        $("#" + i + "-" + j).addClass("border");
      }
      // Insert fire sword
      if (hero.board[i][j] == "F") {
        $("#" + i + "-" + j).addClass("fire-sword");
      }
      // Insert gate
      if (hero.board[i][j] == "G") {
        $("#" + i + "-" + j).addClass(" bo  gate");
      }
    }
  }
  removeFogOfWar();
}
updateTiles();


//------------Controller-------------//
///////////////////////////////////////

// Eventlistener and key binding
var eventListener = document.querySelector("body");
eventListener.onkeydown = function () {
  switch (event.keyCode) {
    case 38:
      hero.moveUp();
      console.log("DEBUG keyCode: " + event.keyCode)
      break;
    case 39:
      hero.moveRight();
      console.log("DEBUG keyCode: " + event.keyCode)
      break;
    case 40:
      hero.moveDown();
      console.log("DEBUG keyCode: " + event.keyCode)
      break;
    case 37:
      hero.moveLeft();
      console.log("DEBUG keyCode: " + event.kvictoryyCode)
      break;
  };
  updateTiles();
  removeFogOfWar();
}

// Functions for changing the players direction
function changeDirectionUp() {
  hero.player.direction = "up"
}
function changeDirectionRight() {
  hero.player.direction = "right"
}
function changeDirectionDown() {
  hero.player.direction = "down"
}
function changeDirectionLeft() {
  hero.player.direction = "left"
}

// functions for moving the player into each direction
// Move up
Game.prototype.moveUp = function () {
  $(".player").css({ "background-image": "" });
  if (this.player.y == 0) {
    console.log("y end of board");
  } else if (this.board[this.player.y - 1][this.player.x] === "B") {
    console.log("wall");
  } else if (this.board[this.player.y - 1][this.player.x] === "S") {
    gameOver();
  } else if (this.board[this.player.y -1][this.player.x] === "F") {
    getFireSword();
    this.player.y = this.player.y - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y + 1][this.player.x] = "V";
    changeDirectionLeft();
  } else if (this.board[this.player.y - 1][this.player.x] === "E") {
    if (this.player.weapon === "firesword") {
      defeatEndBoss();
      this.player.y = this.player.y - 1;
      this.board[this.player.y][this.player.x] = "P";
      this.board[this.player.y + 1][this.player.x] = "V";
      changeDirectionLeft();
    } else {
      playerDefeated();
    }
  } else {
    this.player.y = this.player.y - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y + 1][this.player.x] = "V";
  }

  changeDirectionUp();
}
// Move right
Game.prototype.moveRight = function () {
  $(".player").css({ "background-image": "" });
  if (this.player.x == this.board.length - 1) {
    console.log("end of x reached")
  } else if (this.board[this.player.y][this.player.x + 1] === "B") {
    console.log("wall");
  } else if (this.board[this.player.y][this.player.x + 1] === "S") {
    gameOver();
  } else if (this.board[this.player.y][this.player.x + 1] === "F") {
    getFireSword();
    this.player.x = this.player.x + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x - 1] = "V";
    changeDirectionRight();
  } else if (this.board[this.player.y][this.player.x + 1] === "E") {
    if (this.player.weapon === "firesword") {
      defeatEndBoss();
      this.player.x = this.player.x + 1;
      this.board[this.player.y][this.player.x] = "P";
      this.board[this.player.y][this.player.x - 1] = "V";
      changeDirectionRight();
    } else {
      playerDefeated();
    }
  } else {
    this.player.x = this.player.x + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x - 1] = "V";
  }
  changeDirectionRight();
}
// Move down
Game.prototype.moveDown = function () {
  $(".player").css({ "background-image": "" });
  if (this.player.y == this.board.length - 1) {
    console.log("board y reached");
  } else if (this.board[this.player.y + 1][this.player.x] === "B") {
    console.log("wall");
  } else if (this.board[this.player.y + 1][this.player.x] === "S") {
    gameOver();
  } else if (this.board[this.player.y + 1][this.player.x] === "F") {
    getFireSword();
    this.player.y = this.player.y + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y - 1][this.player.x] = "V";
    changeDirectionDown();
  } else if (this.board[this.player.y + 1][this.player.x] === "E") {
    if (this.player.weapon === "firesword") {
      defeatEndBoss();
      this.player.y = this.player.y + 1;
      this.board[this.player.y][this.player.x] = "P";
      this.board[this.player.y - 1][this.player.x] = "V";
      changeDirectionDown();
    } else {
      playerDefeated();
    }
  } else {
    this.player.y = this.player.y + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y - 1][this.player.x] = "V";
  }
  changeDirectionDown();
}
// Move left
Game.prototype.moveLeft = function () {
  $(".player").css({ "background-image": "" });
  if (this.player.x == 0) {
    console.log("board x reached")
  } else if (this.board[this.player.y][this.player.x - 1] === "B") {
    console.log("wall");
  } else if (this.board[this.player.y][this.player.x - 1] === "B") {
    gameOver();
  } else if (this.board[this.player.y][this.player.x - 1] === "F") {
    getFireSword();
    this.player.x = this.player.x - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x + 1] = "V";
    changeDirectionLeft();
  } else if (this.board[this.player.y][this.player.x - 1] === "E") {
    if (this.player.weapon === "firesword") {
      defeatEndBoss();
      this.player.x = this.player.x - 1;
      this.board[this.player.y][this.player.x] = "P";
      this.board[this.player.y][this.player.x + 1] = "V";
      changeDirectionLeft();
    } else {
      playerDefeated();
    }
  } else {
    this.player.x = this.player.x - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x + 1] = "V";
  }
  changeDirectionLeft();
}

function removeFogOfWar() {
  // variables to adjust the size of the field of view
  var viewDeltaOne = 1;
  var viewDeltaTwo = 2;

  // add fog to all tiles
  $(".tile").addClass("fow");

  $("#" + (hero.player.y) + "-" + (hero.player.x)).removeClass("fow");
  $("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x)).removeClass("fow");
  $("#" + (hero.player.y - viewDeltaTwo) + "-" + (hero.player.x)).removeClass("fow");
  $("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x)).removeClass("fow");
  $("#" + (hero.player.y + viewDeltaTwo) + "-" + (hero.player.x)).removeClass("fow");
  $("#" + (hero.player.y) + "-" + (hero.player.x - viewDeltaOne)).removeClass("fow");
  $("#" + (hero.player.y) + "-" + (hero.player.x - viewDeltaTwo)).removeClass("fow");
  $("#" + (hero.player.y) + "-" + (hero.player.x + viewDeltaOne)).removeClass("fow");
  $("#" + (hero.player.y) + "-" + (hero.player.x + viewDeltaTwo)).removeClass("fow");
  $("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x - viewDeltaOne)).removeClass("fow");
  $("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x + viewDeltaOne)).removeClass("fow");
  $("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x + viewDeltaOne)).removeClass("fow");
  $("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x - viewDeltaOne)).removeClass("fow");

  if ($("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x)).hasClass("border")) {
    $("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y - viewDeltaTwo) + "-" + (hero.player.x)).hasClass("border")) {
    $("#" + (hero.player.y - viewDeltaTwo) + "-" + (hero.player.x)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x)).hasClass("border")) {
    $("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y + viewDeltaTwo) + "-" + (hero.player.x)).hasClass("border")) {
    $("#" + (hero.player.y + viewDeltaTwo) + "-" + (hero.player.x)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y) + "-" + (hero.player.x - viewDeltaOne)).hasClass("border")) {
    $("#" + (hero.player.y) + "-" + (hero.player.x - viewDeltaOne)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y) + "-" + (hero.player.x - viewDeltaTwo)).hasClass("border")) {
    $("#" + (hero.player.y) + "-" + (hero.player.x - viewDeltaTwo)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y) + "-" + (hero.player.x + viewDeltaOne)).hasClass("border")) {
    $("#" + (hero.player.y) + "-" + (hero.player.x + viewDeltaOne)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y) + "-" + (hero.player.x + viewDeltaTwo)).hasClass("border")) {
    $("#" + (hero.player.y) + "-" + (hero.player.x + viewDeltaTwo)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x - viewDeltaOne)).hasClass("border")) {
    $("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x - viewDeltaOne)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x + viewDeltaOne)).hasClass("border")) {
    $("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x + viewDeltaOne)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x + viewDeltaOne)).hasClass("border")) {
    $("#" + (hero.player.y - viewDeltaOne) + "-" + (hero.player.x + viewDeltaOne)).addClass("border-visited");
  }
  if ($("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x - viewDeltaOne)).hasClass("border")) {
    $("#" + (hero.player.y + viewDeltaOne) + "-" + (hero.player.x - viewDeltaOne)).addClass("border-visited");
  }

}
function gameOver() {
  console.log("You've won");
}
function defeatEndBoss() {
  console.log("You've defeated the Zombie-TA");
}
function getFireSword() {
  hero.player.weapon = "firesword";
}
function playerDefeated() {
  console.log("You were defeated");
}
function timeLeft() {

}

var gameTime = 100;
var gameTimeLeft = setInterval(function() {
  gameTime--;
}, 1000)


