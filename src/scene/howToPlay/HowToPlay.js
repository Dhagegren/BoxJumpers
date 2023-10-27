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
 * HowToPlay scene.
 */
BoxJumper.scene.HowToPlay = function () {


    this.gamepad = null;

    rune.scene.Scene.call(this);
}

BoxJumper.scene.HowToPlay.prototype = Object.create(rune.scene.Scene.prototype);
BoxJumper.scene.HowToPlay.prototype.constructor = BoxJumper.scene.HowToPlay;


/**
 * 
 * Function that calls all the methods once
 * 
 * @returns {undefined}
 */
BoxJumper.scene.HowToPlay.prototype.init = function () {
    rune.scene.Scene.prototype.init.call(this);

    this.initBackground();
    this.initGamepad();

};


/**
 * Gets the gamepad
 * 
 * @returns {undefined}
 */
BoxJumper.scene.HowToPlay.prototype.initGamepad = function () {
    this.gamepad = this.gamepads.get(0);
}


/**
 * 
 * Initializes the background for the how to play page
 * 
 * @returns {undefined}
 * 
 */
BoxJumper.scene.HowToPlay.prototype.initBackground = function(){
    var howtoplay = new rune.display.Sprite(0, 0, 400, 250, "Howtoplay");
    this.stage.addChild(howtoplay);
    howtoplay.animation.create("idle", [0, 1, 2], 3, true);
}




/**
 * This method is automatically executed once per "tick". The method is used for 
 * calculations such as application logic.
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
BoxJumper.scene.HowToPlay.prototype.update = function (step) {
    rune.scene.Scene.prototype.update.call(this, step);


    if (this.gamepad.pressed(9)) {
        this.application.scenes.load([
            new BoxJumper.scene.Menu()
        ]);
    }

}