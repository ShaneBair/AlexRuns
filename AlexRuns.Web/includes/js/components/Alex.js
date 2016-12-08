Crafty.c('Alex', {
    init: function() {
        this.addComponent("2D, Canvas, Color, Jumper, Gravity, SpriteAnimation, alex_standing, Motion");
        //this.w = 20;
        //this.h = 50;
        this.x = 20;
        this.y = 100;
        this.z = 1;
        this.jumper(200, ['UP_ARROW', 'W']);
        this.gravity('Floor');

        this.reel("running", 1000, [
          [0, 0], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0]
        ]);
        this.animate("running", -1);
        this.vx = 200;

        this.bind("CheckLanding", this.checkLanding);
      },

      checkLanding: function(ground) {
        if (this.y + this.h > ground.y + this.dy) { // forbid landing, if player's feet are not above ground
          this.canLand = false;
        }
      }
});
