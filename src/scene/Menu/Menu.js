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
projekt.scene.Menu = function () {

    rune.scene.Scene.call(this);
    this.gamepad = null;

    this.menus = new projekt.scene.Menus();
    this.musik = null;
}

projekt.scene.Menu.prototype = Object.create(rune.scene.Scene.prototype);
projekt.scene.Menu.prototype.constructor = projekt.scene.Menu;


/**
 * 
 * Function that calls all the methods once
 * 
 * @returns {undefined}
 * 
 */
projekt.scene.Menu.prototype.init = function () {
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


projekt.scene.Menu.prototype.initMusic = function () {

    var musika = this.application.sounds.master.get("Musik", "unique");
    musika.volume = 0.3;
    musika.play();
}


projekt.scene.Menu.prototype.initbackGround = function () {
    var background = new rune.display.Sprite(0, 0, 400, 250, "bakgrundtext");
    this.stage.addChild(background);
    background.animation.create("idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 2, true);
}

/**
 * Gets the gamepad
 * 
 * @returns {undefined}
 */
projekt.scene.Menu.prototype.initGamepad = function () {

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
projekt.scene.Menu.prototype.update = function (step) {
    rune.scene.Scene.prototype.update.call(this, step);

    if (this.gamepad.justPressed(13)) {
        this.menus.down();
    }

    if (this.gamepad.justPressed(12)) {
        this.menus.up();
    }

    if (this.gamepad.justPressed(2)) {
        this.menus.select();

        var selected = this.menus.m_index;
        console.log(selected);

        switch (selected) {
            case 0:
                this.application.scenes.load([
                    new projekt.scene.Game(0)
                ])
                break;
            case 1:
                this.application.scenes.load([
                    new projekt.scene.Game(1)
                ])
                break;
            case 2:
                this.application.scenes.load([
                    new projekt.scene.Game(2)
                ])
                break;


            case 3:
                this.application.scenes.load([
                    new projekt.scene.HowToPlay()
                ])
                break;

        }

    }
};
