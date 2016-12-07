Crafty.defineScene("Level1", function() {
 // Create score tracker
 game.levelScore = 0;

 var scoreLabel = Crafty.e("2D, DOM, Text")
          .attr({ w:60, h:18, x: 0, y: 0})
          .text("Score: ")
          .textFont({size: '18px', weight:'bold'}),
      scoreOffset = 60,
      scoreField = Crafty.e("2D, DOM, Text")
          .attr({ w: 400, h: 18, x: scoreOffset, y: 0})
          .text(game.levelScore)
          .textFont({size: '18px'})

  // Create playable Alex
  var alex = Crafty.e('Alex').bind("Moved", controlViewport);

  // Create pieces that dynamically build level
  var backgroundManager = Crafty.e("BackgroundManager");
  var levelBuilder = Crafty.e("LevelBuilder");

  Crafty.bind("EnterFrame", levelLoop);

  function levelLoop(data) {
    backgroundManager.manage();
    levelBuilder.keepItComing();
    updateScore();
    isAlexDead();
  }

  function isAlexDead() {
      updateScore();
      if(alex.y > 300) {
        if(game.levelScore > game.highScore) {
          game.highScore = game.levelScore;
          Crafty.storage("HighScore", game.highScore);
        }
        Crafty.unbind("EnterFrame", levelLoop);

        scores.postScore(game.levelScore);

        Crafty.enterScene("StartScreen");
      }
  }

  function controlViewport() {
    if (alex.x >= (game.screenWidth / 4) )
    {
      var newX = (alex.x - (game.screenWidth / 4));
      Crafty.viewport.x = newX * -1;
      scoreLabel.x  = newX;
      scoreField.x = newX + scoreOffset;

    }
  }

  function updateScore() {
    game.levelScore = Crafty.viewport.x * -1;
    scoreField.text(game.levelScore);
  }

});
