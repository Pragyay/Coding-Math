let canvas = document.getElementById("canvas"),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 300,
    points = [],
    needsUpdate = true;

context.translate(width/2, height/2); 

points[0] = {x: -100, y: -100, z: 100}
points[1] = {x: -100, y: -100, z: 200}
points[2] = {x: 100, y: -100, z: 200}
points[3] = {x: 100, y: -100, z: 100}
points[4] = {x: -100, y: 100, z: 100}
points[5] = {x: -100, y: 100, z: 200}
points[6] = {x: 100, y: 100, z: 200}
points[7] = {x: 100, y: 100, z: 100}

function project(){
    for(let i=0; i<points.length;i++){
        var p = points[i],
            scale = fl/(fl+p.z);
        
        p.sx = p.x*scale;
        p.sy = p.y*scale;
    }
}

function drawLine(){
    var p = points[arguments[0]];
    context.moveTo(p.sx, p.sy);

    for(let i=1;i<arguments.length;i++){
        p = points[arguments[i]];
        context.lineTo(p.sx, p.sy);
    }
}

function translateModel(x, y, z){
    for(var i=0; i<points.length;i++){
        points[i].x += x;
        points[i].y += y;
        points[i].z += z;
    }
    needsUpdate = true;
}

document.body.addEventListener("keydown", function(event){
    switch(event.key){
        //left
        case "a":
            translateModel(-20,0,0);
            break;
        //right
        case "d":
            translateModel(20,0,0);
            break;

        //up
        case "w":  
            translateModel(0,-20,0);
            break;

        //down
        case "s":
            translateModel(0,20,0);
            break;
        
        case "ArrowDown":
            translateModel(0,0,20);
            break;

        case "ArrowUp":
            translateModel(0,0,-20);
            break;

    }
});

render();

function render(){
    if(needsUpdate){
        context.clearRect(-width/2,-height/2,width,height);

        project();

        context.beginPath();
        context.strokeStyle = "white";
        // context.lineWidth  = 20;
        drawLine(0,1,2,3,0);
        drawLine(4,5,6,7,4);
        drawLine(0,4);
        drawLine(1,5);
        drawLine(2,6);
        drawLine(3,7);
        context.stroke();

        needsUpdate = false;
    }
    requestAnimationFrame(render);
}