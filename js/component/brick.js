Crafty.c('Bricks', {
    init: function() {
        this.requires('2D, Canvas, Solid, SpriteAnimation, spr_bricks');
        this.attr({
            w: 12,
            h: 12
        })
            .animate('Bricks', 0, 0, 0)
            .animate('Bricks',1,-1);
    }
});
