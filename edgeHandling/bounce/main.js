window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = particle.create(width/2, height/2, 30, Math.random()* Math.PI, 1.1);
    
    p.radius = 40;
    p.bounce = -0.9;

    render();

    function render(){
        context.clearRect(0,0,width,height);

        // console.log(particle.velocity);
        p.update();

        context.beginPath();
        context.fillStyle = "white";
        context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI*2);
        context.fill();

        if(p.position.getX() + p.radius > width){
            p.position.setX(width - p.radius);
            p.velocity.setX(p.velocity.getX() * p.bounce);
        }
        if(p.position.getX() - p.radius < 0){
            p.position.setX(p.radius);
            p.velocity.setX(p.velocity.getX() * p.bounce);
        }
        if(p.position.getY() - p.radius < 0){
            p.position.setY(p.radius);
            p.velocity.setY(p.velocity.getY() * p.bounce);
        }
        if(p.position.getY() + p.radius > height){
            p.position.setY(height - p.radius);
            p.velocity.setY(p.velocity.getY() * p.bounce);
        }

        requestAnimationFrame(render);
    }
}