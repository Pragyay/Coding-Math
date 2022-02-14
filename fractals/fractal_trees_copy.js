let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let p0 = {
        x: width / 2,
        y: height - 100
    },
    p1 = {
        x: width / 2,
        y: 100
    },
    branchAngleA,
    branchAngleB,
    trunkRatio = 0.35,
    branch_angle_A = Math.PI,
    increment_a = 0.01,
    branch_angle_b = 0,
    increment_b = 0.0144;


function randomRange(min, max) {
    return min + Math.random() * (max - min);
}


draw();

function draw() {
    context.clearRect(0, 0, width, height);
    branchAngleA = Math.cos(branch_angle_A += increment_a) * Math.PI/6;
    branchAngleB = Math.cos(branch_angle_b += increment_b) * Math.PI/6;

    tree(p0, p1, 8);
    requestAnimationFrame(draw);
}

function tree(p0, p1, limit) {
    let dx = p1.x - p0.x,
        dy = p1.y - p0.y,
        dist = Math.sqrt(dx * dx + dy * dy),
        angle = Math.atan2(dy, dx),
        branchLength = dist * (1 - trunkRatio),
        pA = {
            x: p0.x + dx * trunkRatio,
            y: p0.y + dy * trunkRatio
        },
        pB = {
            x: pA.x + Math.cos(angle + branchAngleA) * branchLength,
            y: pA.y + Math.sin(angle + branchAngleA) * branchLength,
        },
        pC = {
            x: pA.x + Math.cos(angle + branchAngleB) * branchLength,
            y: pA.y + Math.sin(angle + branchAngleB) * branchLength,
        };
    
    if(branchLength > 200){
        context.strokeStyle = "#301906";
        context.lineWidth = 10;
    }
    else if(branchLength > 100 && branchLength <= 200){
        context.strokeStyle = "#212002";
        context.lineWidth = 7;
    }
    else if(branchLength > 20 && branchLength <= 100){
        context.strokeStyle = "#102b05";
        context.lineWidth = 5;
    }
    else if(branchLength <= 20){
        context.strokeStyle = "green";
        context.lineWidth = 2;
    }

    context.beginPath();
    context.moveTo(p0.x, p0.y);
    context.lineTo(pA.x, pA.y);
    context.stroke();
    
    if(limit > 0) {
        tree(pA, pC, limit - 1);
        tree(pA, pB, limit - 1);
    }
    else {
        context.beginPath();
        context.moveTo(pB.x, pB.y);
        context.lineTo(pA.x, pA.y);
        context.lineTo(pC.x, pC.y);
        context.stroke();
    }
    
}