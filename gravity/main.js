window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        angle = -Math.PI*2,
        earth = particle.create(width/2, 20, 3, angle),
        moon = particle.create(width/2 + 100, 40, 15, -Math.PI/2);

    moon.mass  = 130;
    earth.mass = 200;

    render();

    function render(){
        context.clearRect(0, 0, width, height);

        angle += 0.01;
        earth.velocity.setAngle(angle);
        earth.update();
        // console.log(sun.position.getX());

        moon.gravitateTo(earth);
        moon.update(); 

        // console.log(planet.velocity);
        context.beginPath();
        context.fillStyle = "green";
        context.arc(earth.position.getX(), earth.position.getY(), 20, 0, Math.PI*2);
        context.fill();

        context.beginPath();
        context.fillStyle = "white";
        context.arc(moon.position.getX(), moon.position.getY(), 5, 0, Math.PI*2);
        context.fill();
        
        // console.log("created circle");        
        requestAnimationFrame(render);
    }
}