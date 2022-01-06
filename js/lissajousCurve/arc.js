var arc = {
    initial_x : 0,
    initial_y : 0,
    xradius : 150,
    yradius : 100,
    xangle : 0,
    yangle : 0,
    xspeed : 0,
    yspeed : 0,

    create: function(x, y, xradius, yradius, xspeed, yspeed){
        var obj = Object.create(this);

        // obj.set_angle(xangle, yangle);
        obj.set_speed(xspeed, yspeed);
        obj.set_initial_pos(x, y);
        obj.set_radius(xradius, yradius);

        return obj;
    },

    set_radius: function(xradius, yradius){
        this.xradius = xradius;
        this.yradius = yradius;
    },

    set_speed: function(xspeed, yspeed){
        this.xspeed = xspeed;
        this.yspeed = yspeed;
    },

    // get_speed: function(){
    //     return this.xspeed;
    // },

    set_initial_pos(x, y){
        this.initial_x = x;
        this.initial_y = y;
    },

    updateX: function(){
        return this.initial_x + this.xradius*Math.cos(this.xangle);
    },

    updateY: function(){
        return this.initial_y + this.yradius*Math.sin(this.yangle);
    },

    updateAngle: function(){
        this.xangle += this.xspeed;
        this.yangle += this.yspeed;
    }

};