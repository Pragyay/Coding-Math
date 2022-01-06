window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d")
        width = canvas.width = window.innerWidth
        height = canvas.height = window.innerHeight;
    
    context.translate(0,height/2);
    context.scale(1,-1);

    for(var angle = 0; angle < Math.PI*4; angle += 0.01){
            // console.log(Math.sin(angle));
        var x = angle*100;
        var y = Math.sin(angle)*100;
        
        context.fillRect(x, y, 5, 5);
    }
}