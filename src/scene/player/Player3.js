
/**
 * Creates a new object.
 *
 * @constructor
 * @extends BoxJumper.scene.Player
 *
 * @class
 * @classdesc
 * 
 * Player3 scene.
 */
BoxJumper.scene.Player3 = function (boxes, gamepad, players) {

    BoxJumper.scene.Player.call(this, 150, 20, 16, 16, "spelare3", boxes, gamepad, players);



    this.name = "Spelare 3";
}
BoxJumper.scene.Player3.prototype = Object.create(BoxJumper.scene.Player.prototype);
BoxJumper.scene.Player3.prototype.constructor = BoxJumper.scene.Player3;