
Crafty.c('Tank', {

    init: function() {
        this.requires("Unit"); // подключаем компонент unit
        this.requires("spr_tank1_s1"); // подключаем sprite игрока
        this.requires("SpriteAnimation");
        this.requires("Fourway"); // подключаем компонент движения
        this.attr({x: 0, y: 0, z: 1});
        this.animate("walk_left", 0, 3, 0);
        this.animate("walk_right", 0, 0, 0);
        this.animate("walk_up", 0, 1, 0);
        this.animate("walk_down", 0, 2, 0);


        this.fourway(1);
    }
});