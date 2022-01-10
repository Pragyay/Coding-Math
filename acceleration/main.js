window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        p = particle.create(0, height, 10, -Math.PI/2),
        acc = vector.create(0.1, 0.1);

    // var position = vector.create(0, 0);

    // var vel = vector.create(0, 0);
    // vel.setLength(3);
    // vel.setAngle(Math.PI/6);

    render();

    function render(){
        context.clearRect(0, 0, width, height);

        p.accelerate(acc);

        p.update(); 
        console.log(p.position.getX(), p.position.getY());

        context.beginPath();
        context.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI*2);
        context.fill();
        // console.log("created circle");        
        requestAnimationFrame(render);
    }
}