var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 300,
    shapes = [],
    shapesLength = 10,
    centerZ = 1000,
    radius = 1000,
    baseAngle = 0,
    rotationSpeed = 0.01,
    y_value = 0;

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.random() * (max-min)+min;
}

function zsort(objA, objB){
    return objB.z - objA.z;
}

function render(){
    baseAngle += rotationSpeed;

    // zsort to sort numerically, not by string
    shapes.sort(zsort);
    context.clearRect(-width/2,-height/2,width,height);

    for(let i = 0; i < shapesLength; i++){
        var shape = shapes[i];
        var perspective = fl/(fl+shape.z);

        context.save();
        context.scale(perspective, perspective);
        
        context.beginPath();
        context.fillStyle = shape.color;
        context.rect(shape.x, shape.y, 200, 150);
        context.fill();

        context.fill();
        context.restore();

        shape.x = Math.cos(shape.angle+baseAngle)*radius;
        shape.z = centerZ + Math.sin(shape.angle+baseAngle)*radius;

        shape.y = y_value;
    }
    requestAnimationFrame(render);

};

document.body.addEventListener("mousemove", function(event){
    rotationSpeed = (event.clientX - width/2)*0.00005;
    // y_value = (event.clientY - height/2)*0.5;
});


for(let i=0;i<shapesLength;i++){ 
    let shape = {
        y: y_value,
        angle: Math.PI*2 / shapesLength*i,
        color: `hsl(${Math.random() * 360}, 50%, 50%)`
    };
    shape.x = Math.cos(shape.angle+baseAngle)*radius;
    shape.z = centerZ + Math.sin(shape.angle+baseAngle)*radius;

    shapes.push(shape);
}

context.translate(width/2, height/2);

render();