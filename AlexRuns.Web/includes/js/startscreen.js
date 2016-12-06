Crafty.defineScene("StartScreen", function() {
  Crafty.background("#efefef");
  var backgroundManager = Crafty.e("BackgroundManager");

  Crafty.e("2D, DOM, Text, Mouse")
      .attr({ w: 300, h: 20, x: 300, y: 200 })
      .text("Click to start")
      .css({ "text-align": "center"})
      .textFont({size: '20px', weight: 'bold'})
      .textColor("#000000")
      .bind('Click', function(MouseEvent) {
        Crafty.enterScene("Level1");
      });

  Crafty.e("2D, DOM, Text")
      .attr({ w:800, h:40, x: 50, y: 50})
      .text("Alex Runs")
      .textFont({size:'80px', weight:'bold'})
      .css({"text-align": "center"})
      .textColor("#000000");

  Crafty.e("2D, DOM, Text")
      .attr({ w: 150, h:20, x: 750, y: 280 })
      .text("A Shane Bair Production")
      .textFont({size:'12px'})
      .textColor("#000000");

  if(game.highScore > 0) {
    Crafty.e("2D, DOM, Text")
      .attr({x: 350, y: 240, w: 400, h: 20 })
      .text("Highscore: " + game.highScore)
      .textFont({size: '20px', weight: 'bold'});
  }
  if(game.levelScore > 0) {
    Crafty.e("2D, DOM, Text")
      .attr({x: 350, y: 270, w: 400, h: 20 })
      .text("Last Score: " + game.levelScore)
      .textFont({size: '20px', weight: 'bold'});
  }
});
