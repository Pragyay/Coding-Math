var canvas = document.getElementById('canvas'),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 300,
    shapes = [],
    shapesLength = 150;

function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.random() * (max-min)+min;
}

for(let i=0;i<=shapesLength;i++){
    shapes[i] = {
        x: getRandomInt(-1000, 1000),
        y: getRandomInt(-1000, 1000),
        z: getRandomInt(0, 10000),
        color: `hsl(${Math.random() * 360}, 50%, 50%)`
    };
}

function render(){
    context.clearRect(-width/2,-height/2,width,height);

    for(let i=0; i<shapesLength;i++){
        var shape = shapes[i];
        var perspective = fl/(fl+shape.z);

        context.save();
        context.scale(perspective, perspective);
        // context.strokeStyle = "cyan";
        // context.lineWidth = 20;
        context.fillStyle = shape.color;
        context.beginPath();
        context.arc(shape.x, shape.y, 40, 0, Math.PI*2);
        // context.stroke();
        context.fill();
        context.restore();

        // shape.z += 20;
        // if(shape.z >= 9000){
        //     shape.z = 0;
        // }
        
        // move outwards
        shape.z -= 20;
        if(shape.z <= -300){
            shape.z = 10000;
        }
    }
    requestAnimationFrame(render);

    // console.log("rect made");

};

context.translate(width/2, height/2);

render();