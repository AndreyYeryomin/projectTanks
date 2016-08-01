Crafty.c('Unit', {
    init: function() {
        this.requires("2D");
        this.requires("Canvas");
        this.requires("SpriteAnimation");
        this.requires("Collision"); // компонент столкновения

        this.attr({x: 0, y: 0, z: 1});

        this.collision(); // подключаем компонент столкновения

        // отрабатываем событие столкновения с камнем

        this.onHit("Bricks", function(e) {
            var object = e[0].obj;
            // left
            if (object.x > this.x && (this.x + Settings.poligon) > object.x) {
                this.x -= this._speed;
                this.stop();
            }
            // right
            if (object.x < this.x && this.x < (object.x + Settings.poligon)) {
                this.x += this._speed;
                this.stop();
            }
            // top
            if (object.y < this.y && (this.y + Settings.poligon) > object.y) {
                this.y += this._speed;
                this.stop();
            }
            // bottom
            if (object.y > this.y && this.y < (object.y + Settings.poligon)) {
                this.y -= this._speed;
                this.stop();
            }
        });
        this.onHit("Steel", function(e) {
            var object = e[0].obj;
            // left
            if (object.x > this.x && (this.x + Settings.poligon) > object.x) {
                this.x -= this._speed;
                this.stop();
            }
            // right
            if (object.x < this.x && this.x < (object.x + Settings.poligon)) {
                this.x += this._speed;
                this.stop();
            }
            // top
            if (object.y < this.y && (this.y + Settings.poligon) > object.y) {
                this.y += this._speed;
                this.stop();
            }
            // bottom
            if (object.y > this.y && this.y < (object.y + Settings.poligon)) {
                this.y -= this._speed;
                this.stop();
            }
        });

        // анимация движения, сами указатели на sprite
        // находятся в дочерних компонентах

        this.bind("Moved", function(e) {
            if(this.x < e.x) {
                if(!this.isPlaying("TankMoveLeft"))
                    this.stop().animate("TankMoveLeft", 10);
            }
            if(this.x > e.x) {
                if(!this.isPlaying("TankMoveRight"))
                    this.stop().animate("TankMoveRight", 10);
            }
            if(this.y < e.y) {
                if(!this.isPlaying("TankMoveUp"))
                    this.stop().animate("TankMoveUp", 10);
            }
            if(this.y > e.y) {
                if(!this.isPlaying("TankMoveDown"))
                    this.stop().animate("TankMoveDown", 10);
            }
        });
    }
});

