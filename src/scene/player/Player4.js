
/**
 * Creates a new object.
 *
 * @constructor
 * @extends BoxJumper.scene.Player
 *
 * @class
 * @classdesc
 * 
 * Player4 scene.
 */
BoxJumper.scene.Player4 = function (boxes, gamepad, players) {

    BoxJumper.scene.Player.call(this, 250, 20, 16, 16, "spelare4", boxes, gamepad, players);



    this.name = "Spelare 4";
}
BoxJumper.scene.Player4.prototype = Object.create(BoxJumper.scene.Player.prototype);
BoxJumper.scene.Player4.prototype.constructor = BoxJumper.scene.Player4;