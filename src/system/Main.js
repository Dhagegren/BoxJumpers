//------------------------------------------------------------------------------
// Constructor scope
//------------------------------------------------------------------------------

/**
 * Creates a new instance of the Main class.
 *
 * @constructor
 * 
 * @class
 * @classdesc
 * 
 * Entry point class.
 */
projekt.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend (Rune) Application.
     */
    rune.system.Application.call(this, {
        developer: "com.vectorpanic",
        app: "projekt",
        build: "1.0.0",
        scene: projekt.scene.Menu,
        resources: projekt.data.Requests,
        useGamepads:true,
        useKeyboard:true,
        framerate: 30,
        debug: false
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

projekt.system.Main.prototype = Object.create(rune.system.Application.prototype);
projekt.system.Main.prototype.constructor = projekt.system.Main;