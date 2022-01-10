var vector = {
    _x: 1,
    _y: 0,

    create(x, y){
        var obj = Object.create(this);
        obj.setX(x);
        obj.setY(y);
        return obj;
    },

    setX(value){
        this._x = value;
    },

    getX(){
        return this._x;
    },

    setY(value){
        this._y = value;
    },

    getY(){
        return this._y;
    },

    setAngle(angle){
        var length = this.getLength();
        this._x = length * Math.cos(angle);
        this._y = length * Math.sin(angle); 
    },

    getAngle(){
        return Math.atan2(this._y, this._x);
    },

    setLength(length){
        var angle = this.getAngle();
        this._x = length * Math.cos(angle);
        this._y = length * Math.sin(angle); 
    },

    getLength(){
        return Math.sqrt(this._x * this._x + this._y * this._y);
    },

    add(v2){
        return vector.create(this._x + v2.getX(), this._y + v2.getY());
    },

    subtract(v2){
        return vector.create(this._x - v2.getX(), this._y - v2.getY());
    },

    multiply(val){
        return vector.create(this._x * val, this._y * val);
    },

    divide(val){
        return vector.create(this._x / val, this._y / val);
    },

    addTo(v){
        this._x += v.getX();
        this._y += v.getY();
    },

    subtractTo(v){
        this._x -= v.getX();
        this._y -= v.getY();
    },

    multiplyBy(v){
        this._x *= v.getX();
        this._y *= v.getY();
    },

    divideBy(v){
        this._x /= v.getX();
        this._y /= v.getY();
    }


};

