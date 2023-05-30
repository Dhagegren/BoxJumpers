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
projekt.scene.Menus = function(){
    rune.ui.VTMenu.call(this);

}

/**
 * Function that runs once and does a call
 */
projekt.scene.Menus.init = function(){
    rune.ui.VTMenu.projekt.init.call(this);

    
}

projekt.scene.Menus.prototype = Object.create(rune.ui.VTMenu.prototype);
projekt.scene.Menus.prototype.constructor = projekt.scene.Menus;