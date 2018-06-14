// MVP
// B = border
// D = dragon
// E = end boss 
// F = fire sword
// G = Gate
// U = unvisited
// P = player
// S = princess
// T = dungeon budgi
// V = visited





//---------------MODEL---------------//
///////////////////////////////////////

// Game constructor
function Game() {
  this.board = [
    ["G", "B", "B", "B", "U", "U", "U", "B", "B", "B", "B", "B", "U", "U", "U", "U", "U", "U", "U",],
    ["P", "U", "U", "B", "U", "B", "U", "B", "U", "S", "U", "B", "U", "B", "B", "B", "U", "T", "U",],
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
    ["U", "B", "U", "B", "F", "B", "U", "B", "U", "B", "U", "U", "U", "B", "U", "U", "U", "U", "U",],
    ["U", "B", "U", "U", "B", "B", "U", "B", "U", "B", "B", "U", "B", "U", "U", "B", "B", "B", "B",],
    ["U", "B", "B", "U", "U", "U", "U", "B", "U", "U", "U", "U", "B", "U", "B", "U", "B", "D", "U",],
    ["U", "U", "U", "B", "B", "B", "B", "B", "U", "B", "B", "B", "B", "U", "B", "U", "U", "U", "U",],
    ["B", "B", "U", "U", "U", "U", "U", "U", "U", "B", "U", "U", "U", "U", "U", "U", "B", "U", "U",],
  ]
  this.player = {
    x: 0,
    y: 1,
    direction: "down",
    weapon: "",
    budgiTimeCrystal: 0,
    pet: "",

  };
};

var hero = new Game();
createBoard();
updateTime();


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
        $("#" + i + "-" + j).addClass("gate");
      }
      // Insert budgi
      if (hero.board[i][j] == "T") {
        $("#" + i + "-" + j).addClass("budgi");
      }
      if (hero.board[i][j] == "D") {
        $("#" + i + "-" + j).addClass("dragon");
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
  } else if (this.board[this.player.y - 1][this.player.x] === "G") {
    console.log("wall");
  } else if (this.board[this.player.y - 1][this.player.x] === "S") {
    gameOver();
  } else if (this.board[this.player.y - 1][this.player.x] === "T") {
    budgiDoesJokes();
  }
  else if (this.board[this.player.y - 1][this.player.x] === "F") {
    getFireSword();
    this.player.y = this.player.y - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y + 1][this.player.x] = "V";
    changeDirectionUp();
  } else if (this.board[this.player.y - 1][this.player.x] === "D") {
    getDragon();
    this.player.y = this.player.y - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y + 1][this.player.x] = "V";
    changeDirectionUp();
  }
  else if (this.board[this.player.y - 1][this.player.x] === "E") {
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
  } else if (this.board[this.player.y][this.player.x + 1] === "T") {
    budgiDoesJokes();
  }
  else if (this.board[this.player.y][this.player.x + 1] === "F") {
    getFireSword();
    this.player.x = this.player.x + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x - 1] = "V";
    changeDirectionRight();
  } else if (this.board[this.player.y][this.player.x + 1] === "D") {
    getDragon();
    this.player.x = this.player.x + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x - 1] = "V";
    changeDirectionRight();
  }
  else if (this.board[this.player.y][this.player.x + 1] === "E") {
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
  } else if (this.board[this.player.y + 1][this.player.x] === "T") {
    budgiDoesJokes();
  } else if (this.board[this.player.y + 1][this.player.x] === "F") {
    getFireSword();
    this.player.y = this.player.y + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y - 1][this.player.x] = "V";
    changeDirectionDown();
  } else if (this.board[this.player.y + 1][this.player.x] === "D") {
    getDragon();
    this.player.y = this.player.y + 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y - 1][this.player.x] = "V";
    changeDirectionDown();
  }
  else if (this.board[this.player.y + 1][this.player.x] === "E") {
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
  } else if (this.board[this.player.y][this.player.x - 1] === "S") {
    gameOver();
  } else if (this.board[this.player.y][this.player.x - 1] === "T") {
    budgiDoesJokes();
  } else if (this.board[this.player.y][this.player.x - 1] === "F") {
    getFireSword();
    this.player.x = this.player.x - 1;
    this.board[this.player.y][this.player.x] = "P";
    this.board[this.player.y][this.player.x + 1] = "V";
    changeDirectionLeft();
  } else if (this.board[this.player.y][this.player.x - 1] === "D") {
    getDragon();
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

// GAME FUNCTION



function gameOver() {
  clearInterval(gameTimer);
  $(".game-container").hide();
  $(".center-container").addClass("game-over");
  $("#audio-box").html("<source src='sound/fanfare5v3.mp3' type='audio/mp3'>");
  document.getElementById("audio-box").load();
  $("#voice-box").html("<source src='sound/princess_outro.mp3' type='audio/mp3'>");
  document.getElementById("voice-box").load();
  $(".center-container").text("Congratulations! You've won");
  if (hero.player.pet = "dragon") {
    var princessText = "Laure: Ironhero! Thank you for saving me and bringing Pepe back to me. You are even better than the best. Here are two beers for you and also a slice of pizza."
      + " Congratulations! You have saved the Ironprincess and Pepe. Refresh page for another try. Maby there is something you missed?!";
    prinessCalls(princessText);
  } else {
    var princessText = "Laure: Ironhero you've saved me. You're truly the best. Here's a beer for you :-)"
      + " Congratulations! You have saved the Ironprincess. Refresh page for another try. Maby there is something you missed?!";
    prinessCalls(princessText);
  }
  gameTime = 0;
  console.log("You've won");
}
function playerDefeated() {
  clearInterval(gameTimer);
  $(".game-container").hide();
  $("#audio-box").html("<source src='sound/losefanfare.mp3' type='audio/mp3'>");
  document.getElementById("audio-box").load();
  $(".center-container").addClass("game-over");
  $(".center-container").text("Game Over");
  var vilianText = "Zombie-TA: Hahaha. You have been defeated by my Greatness. Better do your homework and try again if you dare!!!"
  vilianCalls(vilianText);
  gameTime = 0;
  console.log("You were defeated");
}
function defeatEndBoss() {
  clearInterval(gameTimer);
  var vilianText = "Zombie-TA: Arrrrghhh. I was defeated by a fool. You.. will never have the princ...*dies*."
  vilianCalls(vilianText);
  gameTime = 0;
  console.log("You've defeated the Zombie-TA");
}
function getFireSword() {
  hero.player.weapon = "firesword";
  $(".item-box-text").html("Flaming sword! <br>Boom..You rock!!");
  $(".item-box-pic").addClass("flaming-sword-large");
  $(".item-box").delay(6000).fadeOut();
}
function getDragon() {
  hero.player.pet = "dragon"
}


// GAME TIMER
var gameTime = 91;
var gameTimer = setInterval(function () {
  gameTime--;
  if (gameTime === 0) {
    playerDefeated();
  } else if (gameTime === 90) {
    var princessText = "Laure: Ironhero! I didn't finish my exercises in time so I was kidnapped by a zombie-TA. Please save me."
      + " The only thing that can defeat the zombie-TA is the sword of flames."
      + " It is hidden somewhere in this dungen und you have to find it."
      + " Hurry up, we don't have much time!!! Oh yeah, and yould pick up my baby dragon Pepe please? I've lost him somewhere inside this dungeon."
    prinessCalls(princessText);
   

  } else if (gameTime == 89) {
    $("#voice-box").html("<source src='sound/princess_intro.mp3' type='audio/mp3'>");
    document.getElementById("voice-box").load();
  } 
  else if (gameTime === 75) {
    var vilianText = "Zombie-TA: Hahaha. You will never save the Ironprincess stupid. She is mine forever and I will let her do excercies for eternity!!!"
      + " Princess do you hear me?! FOREVER!!!"
    vilianCalls(vilianText);
  } else if (gameTime === 65) {
    var princessText = "Laure: Nooo never!!! Ironhero help me!"
    prinessCalls(princessText);
  } else if (gameTime === 55) {
    var princessText = "Laure: Ironhero! Hurry up!"
    prinessCalls(princessText);
  } else if (gameTime === 45) {
    var vilianText = "Zombie-TA: Screw you Ironhero. You will never make it in time. By the way..did you think of your pretty little sword hah?";
    vilianCalls(vilianText);
  } else if (gameTime == 10) {
    var princessText = "IRONHERO HURRY!!!"
    prinessCalls(princessText);
  } else if (gameTime == 5) {
    var vilianText = "Zombie-TA: I told you, that you'll never make it!!! Afterwards I'll do grocerys and have a beer."
  }
}, 1000)

function updateTime() {
  $("#time").text(gameTime);
}
setInterval(function () {
  updateTime();
}, 1000);

// NPC AND CHATBOX CONTROL FUNCTIONS
function prinessCalls(princessText) {
  $(".portrait-box").removeClass("budgi-portrait");
  $(".portrait-box").removeClass("villian-portrait");
  $(".portrait-box").addClass("princess-portrait");
  $(".chat-box").text(princessText)
  // $(".princess-portrait").delay(2000).fadeOut();
  // $(".chat-box").delay(2000).fadeOut();
}
function vilianCalls(vilianText) {
  $(".portrait-box").removeClass("budgi-portrait");
  $(".portrait-box").removeClass("princess-portrait");
  $(".portrait-box").addClass("villian-portrait");
  $(".chat-box").text(vilianText);
}
function budgiDoesJokes() {

  var budgiJokes = [
    "Aşkım the budgi: Chirp Chirp. I will give you my magical time Crystal once and tell you a joke! Can a kangaroo jump higher than a house? Of course, a house doesn’t jump at all. Now, this was fun but it also took you a few seconds, you better hurry up Ironhero! Chirp Chirp!!!",
    "Aşkım the budgi: Chirp Chirp. I will give you my magical time Crystal once and tell you a black humor joke! You know you're ugly when you get handed the camera every time they make a group photo. Now, this was fun but it also took you a few seconds, you better hurry up Ironhero! Chirp Chirp!!!",
    "Aşkım the budgi: Chirp Chirp. I will give you my magical time Crystal once and tell you a joke. Did you know that I had a dog? My dog used to chase people on a bike a lot. It got so bad, finally I had to take his bike away. Now, this was fun but it also took you a few seconds, you better hurry up Ironhero! Chirp Chirp!!!",
    "Aşkım the budgi: Chirp Chirp. I will give you my magical time Crystal once and tell you a joke. Here's one for the boys and the girls. What is the difference between a snowman and a snowwoman? Snowballs!! Now, this was fun but it also took you a few seconds, you better hurry up Ironhero! Chirp Chirp!!!",
    "Aşkım the budgi: Chirp Chirp. I have told you enough jokes. You can have my magical time crystal once, but therefore Aşkım wants a cookie. Chirp Chirp.",
    "Aşkım the budgi: Chirp Chirp. Don't be so rude.. I gave you magical time crystal, so give Aşkım a acookie. Chirp Chirp.",
  ];

  if (hero.player.budgiTimeCrystal === 0) {
    var ranNb = Math.floor(Math.random() * budgiJokes.length);
    $(".portrait-box").addClass("budgi-portrait");
    $(".chat-box").text(budgiJokes[ranNb]);
    budgiGivesExtraTime();
  } else {
    var ranNb = Math.floor(Math.random() * budgiJokes.length);
    $(".portrait-box").addClass("budgi-portrait");
    $(".chat-box").text(budgiJokes[ranNb]);
  }
}

function budgiGivesExtraTime() {
  hero.player.budgiTimeCrystal++;
  gameTime += 20;
}
