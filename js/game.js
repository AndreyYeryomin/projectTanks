/**
 * Created by Andrey on 01.08.2016.
 */
var Settings = {
    width: 400,
    height: 400,
    poligon: 16,
    level: 1,
    tanks_count: 0,
    startKey: 32
};
window.onload = function() {
    Crafty.init(Settings.width, Settings.height); // создаем игровое поле

    // подгружаем sprite
    Crafty.sprite(32, 32, 'img/tank1-s1.png', {
        spr_tank1_s1: [0, 3]
    },0,0);
  
    //bullet sprite
    Crafty.sprite(8, 8, 'img/bullet.png', {
        spr_bullet: [0, 0]
    },0,0);
    //bullet explosion
    Crafty.sprite(32, 32, 'img/small-explosion.png', {
        spr_small_explosion: [0, 0]
    },0,0);
    //bricks
    Crafty.sprite( 8, 8, 'img/brick-wall.png', {
        spr_bricks: [0,0]
    });
    //steal
    Crafty.sprite(16,16, 'img/steel-wall.png', {
        spr_steel: [0,0]
    });

    // запускаем первую сцену
    Crafty.scene("loading");
};
