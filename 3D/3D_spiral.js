var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 180,
    shapes = [],
    shapesCount = 300,
    centerZ = 2000,
    radius = 1000,
    baseAngle = 0,
    rotationSpeed = 0.01;

function zsort(objA, objB){
    return objB.z - objA.z;
}

function render(){
    baseAngle += rotationSpeed;

    // zsort to sort numerically, not by string
    shapes.sort(zsort);
    context.clearRect(-width/2,-height/2,width,height);

    for(let i = 0; i < shapesCount; i++){
        var shape = shapes[i];

        var perspective = fl/(fl+shape.z);
        shape.alpha = perspective*2;
        // console.log(perspective);

        context.save();
        context.globalAlpha = shape.alpha;
        context.scale(perspective, perspective);
        
        context.beginPath();
        context.fillStyle = "cyan";
        context.arc(shape.x, shape.y, 40, 0, Math.PI)
        context.fill();

        context.fill();
        context.restore();

        shape.x = Math.cos(shape.angle+baseAngle)*radius;
        shape.z = centerZ + Math.sin(shape.angle+baseAngle)*radius;
    }
    requestAnimationFrame(render);

};

document.body.addEventListener("mousemove", function(event){
    rotationSpeed = (event.clientX - width/2)*0.0002;
    // y_value = (event.clientY - height/2)*0.5;
});


for(let i=0;i<shapesCount;i++){ 
    let shape = {
        y: 2000-(4000/ shapesCount*i),
        angle: i,
        // color: `hsl(${Math.random() * 360}, 50%, 50%)`,
        alpha: 1
    };
    shape.x = Math.cos(shape.angle+baseAngle)*radius;
    shape.z = centerZ + Math.sin(shape.angle+baseAngle)*radius;

    shapes.push(shape);
}

context.translate(width/2, height/2);

render();