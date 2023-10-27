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
BoxJumper.system.Main = function() {

    //--------------------------------------------------------------------------
    // Super call
    //--------------------------------------------------------------------------
    
    /**
     * Extend (Rune) Application.
     */
    rune.system.Application.call(this, {
        developer: "com.danieldev",
        app: "BoxJumper",
        build: "1.0.0",
        scene: BoxJumper.scene.Menu,
        resources: BoxJumper.data.Requests,
        useGamepads:true,
        useKeyboard:true,
        framerate: 30,
        debug: false
    });
};

//------------------------------------------------------------------------------
// Inheritance
//------------------------------------------------------------------------------

BoxJumper.system.Main.prototype = Object.create(rune.system.Application.prototype);
BoxJumper.system.Main.prototype.constructor = BoxJumper.system.Main;