particle = {
    position: null,
    velocity : null,
    mass : 0,

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

    angleTo(p){
        return Math.atan2(p.position.getY() - this.position.getY(), p.position.getX() - this.position.getX());
    },

    distanceTo(p){
        let dx = p.position.getX() - this.position.getX(),
            dy = p.position.getY() - this.position.getY();

        return Math.sqrt(dx*dx + dy*dy);
    },

    gravitateTo(p){
        var gravity = vector.create(0, 0),
            distance = this.distanceTo(p);
        
        gravity.setLength(p.mass*this.mass/(distance*distance));
        gravity.setAngle(this.angleTo(p)); 
        
        this.velocity.addTo(gravity);   
        console.log(gravity);
    }
    
};