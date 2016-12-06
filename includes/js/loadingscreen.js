Crafty.defineScene("LoadingScreen", function() {
  Crafty.background("#efefef");
  var backgroundManager = Crafty.e("BackgroundManager");
  Crafty.e("2D, DOM, Text")
      .attr({ w: 300, h: 20, x: 300, y: 200 })
      .text("Loading..")
      .css({ "text-align": "center"})
      .textFont({size: '20px', weight: 'bold'})
      .textColor("#000000");

      Crafty.e("2D, DOM, Text")
      .attr({ w:800, h:40, x: 50, y: 50})
      .text("Alex Runs Forever")
      .textFont({size:'80px', weight:'bold'})
      .css({"text-align": "center"})
      .textColor("#000000");

      Crafty.e("2D, DOM, Text")
      .attr({ w: 150, h:20, x: 750, y: 280 })
      .text("A Shane Bair Production")
      .textFont({size:'12px'})
      .textColor("#000000");
});
