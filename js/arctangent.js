window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight;
    
    var arrowX = width/2,
        arrowY = height/2,
        xradius = 350,
        yradius = 200,
        circle_angle_x = 0,
        circle_angle_y = 0,
        xspeed = 0.02,
        yspeed = 0.0262,
        angle = 0;

    render();

    function render(){
        context.clearRect(0, 0, width, height);  

        context.save();
        context.translate(arrowX + xradius*Math.cos(circle_angle_x), arrowY+ yradius*Math.sin(circle_angle_y));
        context.rotate(angle);
 
        // context.beginPath();
        // context.arc(0, 0, 50, 0, Math.PI*2);
        // context.fill()

        context.lineWidth = 5;
        context.beginPath();
        context.moveTo(40, 0);
        context.lineTo(-40, 0);
        context.moveTo(40, 0);
        context.lineTo(20, 20);
        context.moveTo(40, 0);
        context.lineTo(20, -20);
        context.stroke();

        context.restore();

        circle_angle_x += xspeed;
        circle_angle_y += yspeed;

        // context.beginPath();
        // context.arc(0, 0, 50, 0, Math.PI*2);
        // context.fill()

        requestAnimationFrame(render);
    }
    document.body.addEventListener("mousemove", function(event){
        var dx = event.clientX - arrowX;
        var dy = event.clientY - arrowY;
        angle = Math.atan2(dy, dx);
    });
}

// window.onload = function(){
//     var canvas = document.getElementById("canvas"),
//         context = canvas.getContext('2d'),
//         width = canvas.width = window.innerWidth,
//         height = canvas.height = window.innerHeight;
    
//     var arrowX = width/2,
//         arrowY = height/2,
//         angle = 0;

//     render();

//     function render(){
//         context.clearRect(0, 0, width, height);  

//         context.save();
//         context.translate(arrowX + radius*Math.cos(angle), arrowY+ radius*Math.sin(angle));
//         context.rotate(angle);
 
//         // context.beginPath();
//         // context.arc(0, 0, 50, 0, Math.PI*2);
//         // context.fill()

//         context.lineWidth = 5;
//         context.beginPath();
//         context.moveTo(20, 0);
//         context.lineTo(-20, 0);
//         context.moveTo(20, 0);
//         context.lineTo(10, 10);
//         context.moveTo(20, 0);
//         context.lineTo(10, -10);
//         context.stroke();

//         context.restore();

//         // context.beginPath();
//         // context.arc(0, 0, 50, 0, Math.PI*2);
//         // context.fill()

//         requestAnimationFrame(render);
//     }
//     document.body.addEventListener("mousemove", function(event){
//         var dx = event.clientX - arrowX;
//         var dy = event.clientY - arrowY;
//         angle = Math.atan2(dy, dx);
//     });
// }