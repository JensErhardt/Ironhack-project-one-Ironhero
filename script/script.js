
// BV = border vertically
// BH = border horizontally
// U = unvisited
// V = visited
// B = border
// P = player
// S = princess
// E = end boss 


//---------------MODEL---------------//
///////////////////////////////////////

// Game constructor
function Game() {
  this.board = [
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "S", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "E", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "P", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "B", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
    ["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U",],
  ]
  this.player = {
    x: 9,
    y: 9,
    direction: "up",
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
    }
  }
  removeFogOfWar();
}
updateTiles();


//------------Controller-------------//
///////////////////////////////////////

// Eventlistener and key binding
var eventListener = document.querySelector("body");
eventListener.onkeydown = function() {
  switch (event.keyCode) {
    case 38:
      hero.moveUp();
      console.log("DEBUG keyCode: "+event.keyCode)
      break;
    case 39:
      hero.moveRight();
      console.log("DEBUG keyCode: "+event.keyCode)
      break;
    case 40:
      hero.moveDown();
      console.log("DEBUG keyCode: "+event.keyCode)
      break;
    case 37:
      hero.moveLeft();
      console.log("DEBUG keyCode: "+event.keyCode)
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
Game.prototype.moveUp = function() {
  $(".player").css({"background-image": ""});
  if (this.player.y == 0) {
    console.log("y end of board");
  } else {
  this.player.y = this.player.y - 1;
  this.board[this.player.y][this.player.x] = "P";
  this.board[this.player.y + 1][this.player.x] = "V";
  }
  changeDirectionUp();
  console.log("DEBUG: moveUp")
}
// Move right
Game.prototype.moveRight = function() {
  $(".player").css({"background-image": ""});
  if (this.player.x == this.board.length - 1) {
    console.log("end of x reached")
  } else {
  this.player.x = this.player.x + 1;
  this.board[this.player.y][this.player.x] = "P";
  this.board[this.player.y][this.player.x - 1] = "V";
  }
  changeDirectionRight();
}
// Move down
Game.prototype.moveDown = function() {
  $(".player").css({"background-image": ""});
  if (this.player.y == this.board.length - 1) {
    console.log("board y reached");
  } else {
  this.player.y = this.player.y + 1;
  this.board[this.player.y][this.player.x] = "P";
  this.board[this.player.y - 1][this.player.x] = "V";
  }
  changeDirectionDown();
}
// Move left
Game.prototype.moveLeft = function() {
  $(".player").css({"background-image": ""});
  if(this.player.x == 0) {
    console.log("board x reached")
  } else {
  this.player.x = this.player.x - 1;
  this.board[this.player.y][this.player.x] = "P";
  this.board[this.player.y][this.player.x + 1] = "V";
  }
  changeDirectionLeft();
}



function removeFogOfWar() {
  var viewDeltaOne = 1;
  var viewDeltaTwo = 2;

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

    // if ($("#" + (player.player.y - viewDeltaOne) + "-" + (player.player.x)).hasClass("rock")) {
    //     $("#" + (player.player.y - viewDeltaOne) + "-" + (player.player.x)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y - viewDeltaTwo) + "-" + (player.player.x)).hasClass("rock")) {
    //     $("#" + (player.player.y - viewDeltaTwo) + "-" + (player.player.x)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y + viewDeltaOne) + "-" + (player.player.x)).hasClass("rock")) {
    //     $("#" + (player.player.y + viewDeltaOne) + "-" + (player.player.x)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y + viewDeltaTwo) + "-" + (player.player.x)).hasClass("rock")) {
    //     $("#" + (player.player.y + viewDeltaTwo) + "-" + (player.player.x)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y) + "-" + (player.player.x - viewDeltaOne)).hasClass("rock")) {
    //     $("#" + (player.player.y) + "-" + (player.player.x - viewDeltaOne)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y) + "-" + (player.player.x - viewDeltaTwo)).hasClass("rock")) {
    //     $("#" + (player.player.y) + "-" + (player.player.x - viewDeltaTwo)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y) + "-" + (player.player.x + viewDeltaOne)).hasClass("rock")) {
    //     $("#" + (player.player.y) + "-" + (player.player.x + viewDeltaOne)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y) + "-" + (player.player.x + viewDeltaTwo)).hasClass("rock")) {
    //     $("#" + (player.player.y) + "-" + (player.player.x + viewDeltaTwo)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y - viewDeltaOne) + "-" + (player.player.x - viewDeltaOne)).hasClass("rock")) {
    //     $("#" + (player.player.y - viewDeltaOne) + "-" + (player.player.x - viewDeltaOne)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y + viewDeltaOne) + "-" + (player.player.x + viewDeltaOne)).hasClass("rock")) {
    //     $("#" + (player.player.y + viewDeltaOne) + "-" + (player.player.x + viewDeltaOne)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y - viewDeltaOne) + "-" + (player.player.x + viewDeltaOne)).hasClass("rock")) {
    //     $("#" + (player.player.y - viewDeltaOne) + "-" + (player.player.x + viewDeltaOne)).addClass("v-rock");
    // }
    // if ($("#" + (player.player.y + viewDeltaOne) + "-" + (player.player.x - viewDeltaOne)).hasClass("rock")) {
    //     $("#" + (player.player.y + viewDeltaOne) + "-" + (player.player.x - viewDeltaOne)).addClass("v-rock");
    // }

}


function timeLeft() {

}