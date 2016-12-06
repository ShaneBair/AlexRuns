Crafty.c('Coin', {
  coinValue: 10,

  init: function() {
    this.addComponent("Collision, 2D, Canvas, Color, SpriteAnimation, coin_start");
    this.reel("spin", 500, [
      [0, 0], [1, 0], [2, 0], [3, 0]
    ]);

    this.animate("spin", -1);
    this.checkHits("Alex");
    this.bind("HitOn", this.coinCollected);
  },

  coinCollected: function (hitData) {
    game.levelScore += this.coinValue;
    this.destroy();
  }

});
