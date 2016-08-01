Crafty.c('Steel', {
    init: function() {
        this.requires('2D, Canvas, Solid, SpriteAnimation, spr_steel');
        this.attr({
            w: 16,
            h: 16
        })
            .animate('Steel', 0, 0, 0)
            .animate('Steel',1,-1);
    }
});/**
 * Created by Andrey on 01.08.2016.
 */
