
/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.display.Sprite
 *
 * @class
 * @classdesc
 * 
 * Box scene.
 */
projekt.scene.Box = function (x, y, width, height, resource, boxes) {


  rune.display.Sprite.call(this, x, y, width, height, resource);

  this.velocity.y = 1;
  this.floor = 190;
  this.boxes = boxes;
}

projekt.scene.Box.prototype = Object.create(rune.display.Sprite.prototype);
projekt.scene.Box.prototype.constructor = projekt.scene.Box;




/**
 * 
 * Method that checks if the boxes lands on top of eachother
 * 
 * @returns {undefined}
 */
projekt.scene.Box.prototype.checkBoxHit = function () {

  this.boxes.forEachMember(function (box) {
    this.hitTestAndSeparateObject(box, function () {
      this.velocity.y = 0;
      this.gravity = 0;
    }, this);
  }, this);

}




/**
 * This method is automatically executed once per "tick". The method is used for 
 * calculations such as application logic.
 *
 * @param {number} step Fixed time step.
 *
 * @returns {undefined}
 */
projekt.scene.Box.prototype.update = function (step) {
  rune.display.Sprite.prototype.update.call(this, step);
  this.checkBoxHit();

  if (this.y >= this.floor) {
    this.velocity.y = 0;
    this.gravity = 0;
    this.y = this.floor;
  }


};




