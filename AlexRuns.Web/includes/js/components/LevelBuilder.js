Crafty.c('LevelBuilder', {
    lookAhead: 50,

    levelRules: {
      minimumPieceLength: 100,
      maximumPieceLength: 300,
      minimumGap: 50,
      maximumGap: 150,
      maximumGapUp: 100,
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
      var direction = this.newDirection(),
          xPos = this.newXPosition(lastPiece, direction),
          yPos = this.newYPosition(lastPiece, direction),
          width = this.newWidth(lastPiece);

      Crafty.e('Platform')
        .attr({
          x: xPos,
          y: yPos,
          w: width,
          h: 5,
          z: 1
        });
    },

    newDirection: function() {
      return this.getRandomInt(-1, 1);
    },

    newWidth: function (lastPiece) {
      return this.getRandomInt(this.levelRules.minimumPieceLength, this.levelRules.maximumPieceLength);
    },

    newXPosition: function (lastPiece, direction) {
      var gap = this.getRandomInt(this.levelRules.minimumGap, this.levelRules.maximumGap);
      if(direction == -1) {
        gap = this.getRandomInt(this.levelRules.minimumGap, this.levelRules.maximumGapUp);
      }

      return lastPiece.x + lastPiece.w + gap;
    },

    newYPosition: function (lastPiece, direction) {
      var result = lastPiece.y;

      if(direction == -1) {
          result -= this.getRandomInt(0, this.levelRules.upHeightVariation);
      }
      else if(direction == 1) {
        result += this.getRandomInt(0, this.levelRules.downHeightVariation);
      }

      // Take in to account screen restraints
      if(result > game.screenHeight - 15) {
        result = game.screenHeight - 15;
      }
      else if (result < 50) {
        result = 50;
      }

      return result;
    },

    getRandomInt: function (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
});
