Crafty.c('LevelBuilder', {
    lookAhead: 50,

    levelRules: {
      minimumPieceLength: 100,
      maximumPieceLength: 300,
      maximumGap: 200,
      upHeightVariation: 100,
      downHeightVariation: 200
    },

    init: function() {
      Crafty.e('Platform')
        .attr({ x: 0, y: 200, w: game.screenWidth, h: 5, z:1 });
    },

    keepItComing: function() {
      var pieces = Crafty("LevelPiece");

      var first = Crafty(_.first(pieces));
      if( (first.x + first.w) < (Crafty.viewport.x * -1)) {
        first.destroy();
      }

      var lastPiece = Crafty(_.last(pieces));
      var endpoint = lastPiece.x + lastPiece.w,
          stagePoint = Crafty.viewport.x * -1 + Crafty.viewport._width + this.lookAhead;
      if( endpoint < stagePoint) {
        this.generateNextPiece(lastPiece);
      }
    },

    generateNextPiece: function (lastPiece) {
      Crafty.e('Platform')
        .attr({
          x: lastPiece.x + lastPiece.w + this.getRandomInt(0, this.levelRules.maximumGap),
          y: lastPiece.y,
          w: this.getRandomInt(this.levelRules.minimumPieceLength, this.levelRules.maximumPieceLength),
          h: 5,
          z: 1
        });
    },

    getRandomInt: function (min, max) {
      return Math.random() * (max - min) + min;
    }
});
