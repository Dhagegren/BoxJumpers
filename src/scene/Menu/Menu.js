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
 * Menu scene.
 */
BoxJumper.scene.Menu = function () {

    rune.scene.Scene.call(this);
    this.gamepad = null;

    this.menus = new BoxJumper.scene.Menus();
    this.musik = null;
}

BoxJumper.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
BoxJumper.scene.Menu.prototype.constructor = BoxJumper.scene.Menu;


/**
 * 
 * Function that calls all the methods once
 * 
 * @returns {undefined}
 * 
 */
BoxJumper.scene.Menu.prototype.init = function () {
    rune.scene.Scene.prototype.init.call(this);
    this.initGamepad();
    this.initbackGround();
    this.initMusic();


    this.menus.add("2-Player");
    this.menus.add("3-Player")
    this.menus.add("4-Player");
    this.menus.add("How to play");

 
    this.menus.center = this.application.screen.center;
    this.stage.addChild(this.menus);

}


BoxJumper.scene.Menu.prototype.initMusic = function () {

    var musika = this.application.sounds.master.get("Musik", "unique");
    musika.volume = 0.3;
    musika.loop = true;
    musika.play();
}


BoxJumper.scene.Menu.prototype.initbackGround = function () {
    var background = new rune.display.Sprite(0, 0, 400, 250, "bakgrundtext");
    this.stage.addChild(background);
    background.animation.create("idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2, true);
}

/**
 * Gets the gamepad
 * 
 * @returns {undefined}
 */
BoxJumper.scene.Menu.prototype.initGamepad = function () {

    this.gamepad = this.gamepads.get(0);

}



/**
 * This method is automatically executed once per "tick". The method is used for 
 * calculations such as application logic.
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
BoxJumper.scene.Menu.prototype.update = function (step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.gamepad.justPressed(13) || this.keyboard.justPressed("S")) {
        this.menus.down();
    }

    if (this.gamepad.justPressed(12)|| this.keyboard.justPressed("W")) {
        this.menus.up();
    }

    if (this.gamepad.justPressed(2)|| this.keyboard.justPressed("Space")) {
        this.menus.select();

        var selected = this.menus.m_index;
    
        switch (selected) {
            case 0:
                this.application.scenes.load([
                    new BoxJumper.scene.Game(0)
                ])
                break;
            case 1:
                this.application.scenes.load([
                    new BoxJumper.scene.Game(1)
                ])
                break;
            case 2:
                this.application.scenes.load([
                    new BoxJumper.scene.Game(2)
                ])
                break;


            case 3:
                this.application.scenes.load([
                    new BoxJumper.scene.HowToPlay()
                ])
                break;

        }

    }
};
