window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        angle = -Math.PI*2,
        sun = particle.create(width/2, height/2, 0, 0),
        earth = particle.create(width/2, 20, 3, angle),
        moon = particle.create(width/2 + 80 , 40, 15, -Math.PI/2);

    earth.mass = 200;
    moon.mass = 100;

    render();

    function render(){
        context.clearRect(0, 0, width, height);

        sun.update();

        angle += 0.01;
        earth.velocity.setAngle(angle);
        earth.update();
        // console.log(sun.position.getX());

        moon.gravitateTo(earth);
        moon.update(); 

        context.beginPath();
        context.fillStyle = "orange";
        context.arc(sun.position.getX(), sun.position.getY(), 40, 0, Math.PI*2);
        context.fill();
        
        // console.log(planet.velocity);
        context.beginPath();
        context.fillStyle = "green";
        context.arc(earth.position.getX(), earth.position.getY(), 10, 0, Math.PI*2);
        context.fill();

        context.beginPath();
        context.fillStyle = "white";
        context.arc(moon.position.getX(), moon.position.getY(), 2, 0, Math.PI*2);
        context.fill();
        
        requestAnimationFrame(render);
    }
}