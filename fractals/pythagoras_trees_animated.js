let canvas = document.getElementById("canvas"),
ctx = canvas.getContext('2d'),
width = canvas.width = window.innerWidth,
height = canvas.height = window.innerHeight;

let branchAngle,
    initial_angle = 0,
    increment = 0.01;

function randomRange(min, max){
    return Math.random()*(max-min) + min;
}

function tree(x, y, size, angle, limit){
    // ctx.fillStyle = "white";
    
    ctx.save();
    // if(size < 20){
    //     ctx.fillStyle = "pink";
    
    // }else{
    //     ctx.fillStyle = "#301906";
    // }
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.fillRect(0, 0, size, -size);
    
    //left branch
    let x0 = 0,
    y0 = -size,
    size0 = Math.abs(size * Math.cos(branchAngle)),
    angle0 = branchAngle;
    
    if(limit > 0){
        tree(x0, y0, size0, angle0, limit-1);
    }else{ 
        ctx.save();
        ctx.translate(x0, y0);
        ctx.rotate(angle0);
        ctx.fillRect(0, 0, size0, -size0);
        ctx.restore();
    }
    
    //right branch
    let x1 = x0 + size0 * Math.cos(angle0),
    y1 = y0 + size0 * Math.sin(angle0),
    size1 = Math.abs(size * Math.sin(branchAngle)),
    angle1 = Math.PI/2 + angle0;
    
    if(limit > 0){
        tree(x1, y1, size1, angle1, limit-1);
    }else{
        ctx.save();
        ctx.translate(x1, y1);
        ctx.rotate(angle1);
        ctx.fillRect(0, 0, size1, -size1);
        ctx.restore();  
    }
    
    ctx.restore();
}

render();

function render(){
    ctx.clearRect(0, 0, width, height);
    branchAngle = (Math.cos(initial_angle += increment)*Math.PI/4) - Math.PI/4;
    console.log(branchAngle);
    tree(width/2 - 60, height, 120, 0, 9);
    requestAnimationFrame(render);
}