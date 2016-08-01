Crafty.scene("loading", function() {
    Crafty.load(['img/tank1-s1.png',
        'img/bullet.png',
        'img/small-explosion.png',
        'img/brick-wall.png',
        'img/base.png',
        'img/steel-wall.png',
        'img/trees.png'], function() {
        // выполним это действие, после того как images/sprite.png будет загружен
        setTimeout(function() {
            Crafty.scene("main");
        }, 2000);
    });

    // меняем цвет фона
    Crafty.background("#000");
    // выводим по центру текст
    Crafty.e("2D, DOM, Text").attr({w: 100, h: 20, x: 150, y: 120})
        .text("Loading... ")
        .css({"text-align": "center"});
});