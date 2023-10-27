//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.scene.Scene
 *
 * @class
 * @classdesc
 * 
 * Game scene.
 */
BoxJumper.scene.Game = function (numPlayers) {

  //--------------------------------------------------------------------------
  // Super call
  //--------------------------------------------------------------------------

  this.boxes = null;
  this.background = null;
  this.posArr = [10, 42, 74, 106, 138, 170, 202, 234, 266, 298, 330, 362];
  this.columnsCounts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.gamepad = null;
  this.players = null;
  this.nrOfPlayers = numPlayers;
  this.deathOrder = [];

  this.gameRunning = true;



  /**
   * Calls the constructor method of the super class.
   */
  rune.scene.Scene.call(this);
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

BoxJumper.scene.Game.prototype = Object.create(rune.scene.Scene.prototype);
BoxJumper.scene.Game.prototype.constructor = BoxJumper.scene.Game;

//------------------------------------------------------------------------------
// Override public prototype methods (ENGINE)
//------------------------------------------------------------------------------

/**
 * This method is automatically executed once after the scene is instantiated. 
 * The method is used to create objects to be used within the scene.
 *
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.init = function () {
  rune.scene.Scene.prototype.init.call(this);

  this.boxes = this.groups.create(this.stage);
  this.players = this.groups.create(this.stage);


  this.initGamepad();
  this.initBackground();
  this.timers.create(3, true);

  this.initPlayers(this.nrOfPlayers);
};


/**
 * 
 * @param {object} winner 
 * 
 * Function runs when the game is over and loads the GameOver scene
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.gameOver = function (winner) {
  this.gameRunning = false;
   this.application.scenes.load([
     new BoxJumper.scene.GameOver(winner)
   ]);
}



/**
 * 
 * initializes the boxes and starts the sequence of the dropping
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.initBox = function () {
  var lowestColumns = [];
  var i;
  var lowestCount = Infinity;

  for (i = 0; i < 12; i++) {
    if (this.columnsCounts[i] < lowestCount) {
      lowestCount = this.columnsCounts[i];
    }
  }

  for (i = 0; i < 12; i++) {
    if (this.columnsCounts[i] === lowestCount) {
      lowestColumns.push(i);
    }
  }

  var randCol;
  if (lowestColumns.length > 0 && Math.random() < 0.25) {
    randCol = lowestColumns[Math.floor(Math.random() * lowestColumns.length)];
  } else {
    var columnsToExclude = [];
    for (i = 0; i < 12; i++) {
      if (this.columnsCounts[i] >= 7) {
        columnsToExclude.push(i);
      }
    }
    do {
      randCol = Math.floor(Math.random() * 12);
    } while (columnsToExclude.includes(randCol));
  }

  var randomValue = this.posArr[randCol];

  var box = new BoxJumper.scene.Box(randomValue, 0, 32, 32, "box", this.boxes);
  this.boxes.addMember(box);
  this.stage.addChild(box);

  this.columnsCounts[randCol]++;

  var fullColumns = [];
  for (i = 0; i < 12; i++) {
    if (this.columnsCounts[i] >= 7) {
      fullColumns.push(i);
    }
  }

  if (fullColumns.length >= 12) {
    this.gameOver();
    this.application.scenes.load([
      new BoxJumper.scene.Menu()
    ]);
  }
};



/**
 * 
 * Initializes the background picture for the game scene
 * 
 * @returns {undefined}
 * 
 */
BoxJumper.scene.Game.prototype.initBackground = function () {

  this.background = new rune.display.Sprite(0, 0, 400, 250, "Bakgrund");
  this.stage.addChild(this.background);
  this.background.animation.create("idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2, true);
}


/**
 * Gets the gamepad
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.initGamepad = function () {

  this.gamepad = this.gamepads.get(0);

}





/**
 * 
 * Function to initialize the players
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.initPlayer1 = function () {

  var gamepad = this.gamepads.get(0);
  var player1 = new BoxJumper.scene.Player1(this.boxes, gamepad, this.players);
  player1.setAnimation();
  this.players.addMember(player1);
  this.stage.addChild(player1);
}

/**
 * 
 * Function to initialize the players
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.initPlayer2 = function () {

  var gamepad = this.gamepads.get(1);
  var player2 = new BoxJumper.scene.Player2(this.boxes, gamepad, this.players);
  player2.setAnimation();
  this.players.addMember(player2);
  this.stage.addChild(player2);
}



/**
 * 
 * Function to initialize the players
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.initPlayer3 = function () {
  var gamepad = this.gamepads.get(2);
  var player3 = new BoxJumper.scene.Player3(this.boxes, gamepad, this.players);
  player3.setAnimation();
  this.players.addMember(player3);
  this.stage.addChild(player3);
}

/**
 * 
 * Function to initialize the players
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.initPlayer4 = function () {
  var gamepad = this.gamepads.get(3);
  var player4 = new BoxJumper.scene.Player4(this.boxes, gamepad, this.players);
  player4.setAnimation();
  this.players.addMember(player4);
  this.stage.addChild(player4);
}




/**
 * 
 * Checks how many players the user have chosen and initialazis them
 * 
 * @returns {undefined}
 * 
 */
BoxJumper.scene.Game.prototype.initPlayers = function () {

  switch (this.nrOfPlayers) {
    case 0:
      this.initPlayer1();
      this.initPlayer2();
      break;

    case 1:
      this.initPlayer1();
      this.initPlayer2();
      this.initPlayer3();
      break;

    case 2:
      this.initPlayer1();
      this.initPlayer2();
      this.initPlayer3();
      this.initPlayer4();
      break;

  }

};






/**
 * This method is automatically executed once per "tick". The method is used for 
 * calculations such as application logic.
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.update = function (step) {
  rune.scene.Scene.prototype.update.call(this, step);




  if (this.timers.m_timers[0].elapsed > 966) {
    this.initBox();
    this.timers.m_timers[0].restart();
  }

  


  var aliveCount = 0;
  var lastAlivePlayer = null;

  if(this.gameRunning){

  // Check the status of each player
  this.players.forEachMember(function (player) {
    if (player.alive) {
      aliveCount++;
      lastAlivePlayer = player;
    }
  }, this);

  // Check if there is only one player alive
  if (aliveCount === 1) {
    // Perform actions for end of the game, e.g., display winner, end match, etc.
    lastAlivePlayer.canControl = false;


    this.timers.create({
      duration: 2500,
      scope: this,
      onComplete: this.gameOver.bind(this, lastAlivePlayer.name)
    });

    return; // Exit the update function
  }
}

};



/**
 * This method is automatically called once just before the scene ends. Use 
 * the method to reset references and remove objects that no longer need to 
 * exist when the scene is destroyed. The process is performed in order to 
 * avoid memory leaks.
 *
 * Removes all graphic objects such as players and boxes and other references.
 * 
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Game.prototype.dispose = function () {
  rune.scene.Scene.prototype.dispose.call(this);



  this.boxes.forEachMember(function (box) {
    box.dispose();
    box =null;
  });

  this.players.forEachMember(function(player){
    player.dispose();
    player = null;
  })

   this.background = null;
   this.posArr = null;
   this.columnsCounts = null;
   this.gamepad = null;
   this.nrOfPlayers = null;;
   this.deathOrder = null;
};