
/**
 * Creates a new object.
 *
 * @constructor
 * @extends projekt.scene.Player
 *
 * @class
 * @classdesc
 * 
 * Player2 scene.
 */
projekt.scene.Player2 = function (boxes, gamepad, players) {

    projekt.scene.Player.call(this, 370, 20, 16, 16, "spelare2", boxes, gamepad, players);



    this.name = "Spelare 2";
}

projekt.scene.Player2.prototype = Object.create(projekt.scene.Player.prototype);
projekt.scene.Player2.prototype.constructor = projekt.scene.Player2;