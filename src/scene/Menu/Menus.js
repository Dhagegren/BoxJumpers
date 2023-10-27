//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new object.
 *
 * @constructor
 * @extends rune.ui.VTMenu
 *
 * @class
 * @classdesc
 * 
 * Menus scene.
 */
BoxJumper.scene.Menus = function(){
    rune.ui.VTMenu.call(this);

}

/**
 * Function that runs once and does a call
 */
BoxJumper.scene.Menus.init = function(){
    rune.ui.VTMenu.BoxJumper.init.call(this);

    
}

BoxJumper.scene.Menus.prototype = Object.create(rune.ui.VTMenu.prototype);
BoxJumper.scene.Menus.prototype.constructor = BoxJumper.scene.Menus;