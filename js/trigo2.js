window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var centerX = width*.5,
        centerY = height*.5,
        offset = height*.5-50,
        baseRadius = 100,
        baseAlpha = 0.5,
        speed = 0.03,
        angle = 0;

    render1();

    function render1(){
        var y_sin = centerY + Math.sin(angle)*offset;
        var radius = baseRadius + Math.sin(angle)*50;
        var alpha = baseAlpha + Math.sin(angle)*0.5;

        // console.log(angle);

        context.clearRect(0, 0, width, height);

        context.beginPath();
        context.fillStyle = "black";
        context.arc(centerX-400, y_sin, 50, 0, Math.PI*2);
        context.fill();

        context.beginPath();
        context.fillStyle = "black";
        context.arc(centerX, centerY, radius, 0, Math.PI*2);
        context.fill();

        context.beginPath();
        context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";
        context.arc(centerX+400, centerY, 100, 0, Math.PI*2);
        context.fill();

        angle += speed;

        requestAnimationFrame(render1);
    }

    function render2(){
        var radius = baseRadius + Math.cos(angle)*50;

        context.clearRect(0, 0, width, height);
        context.beginPath();
        context.arc(centerX, centerY, radius, 0, Math.PI*2, true);
        context.fill();

        angle += speed;

        requestAnimationFrame(render2);
    }

    function render3(){
        var alpha = baseAlpha + Math.cos(angle)*0.5;
        console.log(alpha);
    
        context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";

        context.clearRect(0,0,width,height);
        context.beginPath();
        context.arc(centerX, centerY, 100, 0, Math.PI*2, false);
        context.fill();
 
        angle += speed;

        requestAnimationFrame(render3);
    }
}