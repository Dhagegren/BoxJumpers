projekt.scene.GameOver = function (winner) {





    this.gamepad = null;
    this.winner = winner;


    rune.scene.Scene.call(this);
}

projekt.scene.GameOver.prototype = Object.create(rune.scene.Scene.prototype);
projekt.scene.GameOver.prototype.constructor = projekt.scene.GameOver;



projekt.scene.GameOver.prototype.init = function () {
    rune.scene.Scene.prototype.init.call(this);


    this.initGamepad();
    this.initbackGround();
    this.initFireWorks();


    var vinnare = new rune.text.BitmapField(this.winner + " HAR VUNNIT");

    vinnare.autoSize = true;
    vinnare.center = this.application.screen.center;

    var playAgain = new rune.text.BitmapField("Tryck start for att spela igen");
    playAgain.autoSize = true;
    playAgain.center = this.application.screen.center;
    playAgain.centerY = this.application.screen.centerY + 25;

    this.stage.addChild(vinnare);
    this.stage.addChild(playAgain);
};

projekt.scene.GameOver.prototype.initGamepad = function () {
    this.gamepad = this.gamepads.get(0);
}


projekt.scene.GameOver.prototype.initbackGround = function () {
    var background = new rune.display.Sprite(0, 0, 400, 250, "Bakgrund");
    this.stage.addChild(background);
    background.animation.create("idle", [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 3, true);
}

projekt.scene.GameOver.prototype.initFireWorks = function(){
    var fireworks = new rune.display.Sprite(100,20,200,100, "fyrverkerier");
    this.stage.addChild(fireworks);
    fireworks.animation.create("idle", [0,1], 4, true);
}

projekt.scene.GameOver.prototype.update = function (step) {
    rune.scene.Scene.prototype.update.call(this, step);


    if (this.gamepad.pressed(9)) {
        this.application.scenes.load([
            new projekt.scene.Menu()
        ]);
    }

}





