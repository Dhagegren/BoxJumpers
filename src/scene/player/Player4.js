
/**
 * Creates a new object.
 *
 * @constructor
 * @extends projekt.scene.Player
 *
 * @class
 * @classdesc
 * 
 * Player4 scene.
 */
projekt.scene.Player4 = function (boxes, gamepad, players) {

    projekt.scene.Player.call(this, 250, 20, 16, 16, "spelare4", boxes, gamepad, players);



    this.name = "Spelare 4";
}
projekt.scene.Player4.prototype = Object.create(projekt.scene.Player.prototype);
projekt.scene.Player4.prototype.constructor = projekt.scene.Player4;