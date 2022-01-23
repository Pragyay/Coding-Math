particle = {
    position: null,
    velocity : null,
    acc : null, 
    color: ``,
    radius : 0,
    friction: vector.create(0.99,0.99),
    alpha: 0.8,

    create(x, y, speed, direction, gravity, color){
        var obj = Object.create(this);
        obj.position = vector.create(x, y);
        obj.velocity = vector.create(0, 0);
        obj.velocity.setLength(speed);
        obj.velocity.setAngle(direction);
        obj.acc = vector.create(0, gravity || 0);
        obj.color = color;

        return obj;
    },

    accelerate(){
        this.velocity.addTo(this.acc);
    },

    addfriction(){
        // this.velocity.setX(this.velocity.getX()*this.friction)
        // this.velocity.setY(this.velocity.getY()*this.friction)
        this.velocity.multiplyBy(this.friction);
    },

    update(){
        // this.velocity.addTo(this.acc);
        this.alpha -= 0.003;
        this.position.addTo(this.velocity);
    },

    getVelocity(){
        return this.velocity;
    },

    getPosition(){
        return this.position;
    }
    
};