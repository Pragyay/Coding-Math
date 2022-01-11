particle = {
    position: null,
    velocity : null,

    create(x, y, speed, direction){
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);

        return obj;
    },

    accelerate(acc){
        this.velocity.addTo(acc);
    },

    update(){
        this.position.addTo(this.velocity);
    },

    getVelocity(){
        return this.velocity;
    },

    getPosition(){
        return this.position;
    }
    
};