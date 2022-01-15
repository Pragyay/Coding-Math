particle = {
    position: null,
    velocity : null,
    acc : null, 
    radius : 0,

    create(x, y, speed, direction, gravity){
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.acc = vector.create(0, gravity || 0);

        return obj;
    },

    accelerate(){
        this.velocity.addTo(this.acc);
    },

    update(){
        this.velocity.addTo(this.acc);
        this.position.addTo(this.velocity);
    },

    getVelocity(){
        return this.velocity;
    },

    getPosition(){
        return this.position;
    }
    
};