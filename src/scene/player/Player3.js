
/**
 * Creates a new object.
 *
 * @constructor
 * @extends projekt.scene.Player
 *
 * @class
 * @classdesc
 * 
 * Player3 scene.
 */
projekt.scene.Player3 = function (boxes, gamepad, players) {

    projekt.scene.Player.call(this, 150, 20, 16, 16, "spelare3", boxes, gamepad, players);



    this.name = "Spelare 3";
}
projekt.scene.Player3.prototype = Object.create(projekt.scene.Player.prototype);
projekt.scene.Player3.prototype.constructor = projekt.scene.Player3;