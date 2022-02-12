let canvas = document.getElementById("canvas"),
    context = canvas.getContext('2d'),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let p0 = {
        x: 0,
        y: -300
    },
    p1 = {
        x: 450,
        y: 300
    },
    p2 = {
        x: -450,
        y: 300
    };

context.translate(width/2, height/2);

function sierpinski(p0, p1, p2, limit){
    if(limit > 0){
        let pa = {
                x : (p0.x+p1.x)/2,
                y: (p0.y+p1.y)/2
            },
            pb = {
                x : (p1.x+p2.x)/2,
                y: (p1.y+p2.y)/2
            },
            pc = {
                x : (p2.x+p0.x)/2   ,
                y: (p2.y+p0.y)/2
            };
        sierpinski(p0, pa, pc, limit-1);
        sierpinski(pa, p1, pb, limit-1);
        sierpinski(pc, pb, p2, limit-1);

    } else {
        drawTriangle(p0,p1,p2);
    }
    
}

function drawTriangle(p0, p1, p2){
    context.beginPath();
    context.fillStyle="white"
    context.moveTo(p0.x,p0.y);
    context.lineTo(p1.x,p1.y);
    context.lineTo(p2.x,p2.y);
    context.fill(); 
}

for(let i=1;i<=10;i++){
    render(i);
}

function render(i){
    setTimeout(function(){
        context.clearRect(-width/2,-height/2,width,height);
        sierpinski(p0,p1,p2,i);
    },1000*i);
}


