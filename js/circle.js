window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var inital_x = width/2,
        initial_y = height/2,
        xradius = 250,
        yradius = 150,
        xangle = 0,
        yangle = 0,
        xspeed = 0.1;
        yspeed = 0.131;

    render();

    function render(){

        var x = inital_x + xradius*Math.cos(xangle);
        var y = initial_y + yradius*Math.sin(yangle);

        context.clearRect(0, 0, width, height);

        context.beginPath();

        // context.fillStyle = "green";
        context.arc(x, y, 10, 0, Math.PI*2);
        context.fill();

        xangle += xspeed;
        yangle += yspeed;

        requestAnimationFrame(render);
    }

}