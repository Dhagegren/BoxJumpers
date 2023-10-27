
/**
 * Creates a new object.
 *
 * @constructor
 * @extends BoxJumper.scene.Player
 *
 * @class
 * @classdesc
 * 
 * Player1 scene.
 */
BoxJumper.scene.Player1 = function (boxes, gamepad, players) {

    BoxJumper.scene.Player.call(this, 20, 20, 16, 16, "gubbeny2", boxes, gamepad, players);


    this.name = "Spelare 1";

}

BoxJumper.scene.Player1.prototype = Object.create(BoxJumper.scene.Player.prototype);
BoxJumper.scene.Player1.prototype.constructor = BoxJumper.scene.Player1;