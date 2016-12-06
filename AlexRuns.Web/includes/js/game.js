var game = {
  screenWidth: 900,
  screenHeight: 300,
  highScore: 0,
  levelScore: 0
};

var assetsObj = {
    "sprites": {
        "includes/images/alexsprite.png": {
            tile: 40,
            tileh: 50,
            paddingX: 0,
            paddingY: 0,
            map: {
                alex_standing: [0, 1],
                alex_running_start: [0, 0],
                alex_running_middle: [4, 0],
                alex_running_end: [9, 0]
            }
        },
        "includes/images/coinsprite.png": {
          tile: 15,
          tileh: 16,
          map: {
            coin_start: [0, 0]
          }
        },
        "includes/images/bg1.png": {
          tile: 512,
          tileh: 300,
          map: {
            background_tile: [0, 0]
          }
        }
    }
};

Crafty.init(game.screenWidth, game.screenHeight, document.getElementById('game'));
Crafty.enterScene("LoadingScreen");

Crafty.load(assetsObj, function() {
  game.highScore = Crafty.storage("HighScore");
  Crafty.enterScene("StartScreen");
});
