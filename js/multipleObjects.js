window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var initial_x = width/2,
        initial_y = height/2,
        radius = 200,
        angle = 0,
        numObjects = 10,
        slice = Math.PI*2/numObjects,
        x, y;
    
    context.beginPath();
    context.arc(initial_x,initial_y,radius,0,Math.PI*2);
    context.stroke();
    
    for(var i=0;i<numObjects;i++){
        angle = i*slice;
        x = initial_x + Math.cos(angle)*radius;
        y = initial_y + Math.sin(angle)*radius;
        context.beginPath();
        context.arc(x, y, 10, 0, Math.PI*2, false);
        context.fill();
    }

};