var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 300,
    shapes = [],
    shapesCount = 300,
    centerZ = 3000,
    radius = 1000,
    baseAngle = 0,
    rotationSpeed = 0.01;


function render(){
    baseAngle += rotationSpeed;

    context.clearRect(-width/2,-height/2,width,height);

    context.beginPath();
    context.strokeStyle = "white";
    for(let i = 0; i < shapesCount; i++){
        var shape = shapes[i];
        var perspective = fl/(fl+shape.z);
        
        context.save();
        context.scale(perspective, perspective);
        context.translate(shape.x, shape.y);
        
        if(i==0){
            context.moveTo(0,0);
        }else{
            context.lineTo(0,0);
        }

        context.restore();

        shape.x = Math.cos(shape.angle+baseAngle)*radius;
        shape.z = centerZ + Math.sin(shape.angle+baseAngle)*radius;
    }
    context.stroke();
    requestAnimationFrame(render);

};

document.body.addEventListener("mousemove", function(event){
    rotationSpeed = (event.clientX - width/2)*0.0002;
    // y_value = (event.clientY - height/2)*0.5;
});


for(let i=0;i<shapesCount;i++){ 
    let shape = {
        angle: 0.2 * i,
        y: 2000 - 4000 / shapesCount * i +500
    };
    shape.x = Math.cos(shape.angle+baseAngle)*radius;
    shape.z = centerZ + Math.sin(shape.angle+baseAngle)*radius;

    shapes.push(shape);
}

context.translate(width/2, height/2);

render();