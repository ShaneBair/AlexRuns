Crafty.c('BackgroundManager', {
    init: function() {
      Crafty.e("Background").attr({x: 0, y: 0 });
      Crafty.e("Background").attr({x: 512, y: 0 });
    },

    manage: function() {
      var backgrounds = Crafty("Background");

      var first = Crafty(_.first(backgrounds));
      var last = Crafty(_.last(backgrounds));

      if( (first.x + first.w) < (Crafty.viewport.x * -1)) {
        first.destroy();
      }

      var endpoint = last.x + last.w,
          stagePoint = Crafty.viewport.x * -1 + Crafty.viewport._width;
      if( endpoint < stagePoint) {
        Crafty.e("Background").attr({x: endpoint});
      }
    }
});
