
/**
 * Creates a new object.
 *
 * @constructor
 * @extends BoxJumper.scene.Player
 *
 * @class
 * @classdesc
 * 
 * Player2 scene.
 */
BoxJumper.scene.Player2 = function (boxes, gamepad, players) {

    BoxJumper.scene.Player.call(this, 370, 20, 16, 16, "spelare2", boxes, gamepad, players);



    this.name = "Spelare 2";
}

BoxJumper.scene.Player2.prototype = Object.create(BoxJumper.scene.Player.prototype);
BoxJumper.scene.Player2.prototype.constructor = BoxJumper.scene.Player2;