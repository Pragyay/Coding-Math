window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    context.fillStyle = 'black';
    context.fillRect(0,0,width,height);

    // create arc object 
    // parameters: (x, y, xradius, yradius, xspeed, yspeed)
    var arc1 = arc.create(width/4, height/4, 200, 100, 0.03, 0.042);
    var arc2 = arc.create(3*width/4, height/4, 100, 120, 0.05, 0.03);
    var arc3 = arc.create(width/4, 3*height/4, 150, 100, 0.03, 0.04);
    var arc4 = arc.create(3*width/4, 3*height/4, 200, 100, 0.02, 0.04);
    
    render();

    function render(){

        //update x and y coordinates 
        var x1 = arc1.updateX();
        var y1 = arc1.updateY();

        var x2 = arc2.updateX();
        var y2 = arc2.updateY();

        var x3 = arc3.updateX();
        var y3 = arc3.updateY();

        var x4 = arc4.updateX();
        var y4 = arc4.updateY();

        // context.clearRect(0, 0, width, height);

        context.fillStyle = "#00FFFF";

        context.beginPath();
        context.arc(x1, y1, 4, 0, Math.PI*2);
        context.fill();

        context.beginPath();
        context.arc(x2, y2, 4, 0, Math.PI*2);
        context.fill();

        context.beginPath();
        context.arc(x3, y3, 4, 0, Math.PI*2);
        context.fill();

        context.beginPath();
        context.arc(x4, y4, 4, 0, Math.PI*2);
        context.fill();

        arc1.updateAngle();
        arc2.updateAngle();
        arc3.updateAngle();
        arc4.updateAngle();

        requestAnimationFrame(render);
    }

}