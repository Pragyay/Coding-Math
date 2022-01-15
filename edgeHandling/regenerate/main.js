window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        particles = [],
        numParticles = 150;

    for(var i=0;i<numParticles;i+=1){
        let p = particle.create(width/2, height+100, Math.random() * 6 + 6, 
           -Math.PI/2 + (Math.random() * .2) - .1, 0.12);
        p.radius = Math.random()*8 + 2;
        particles.push(p);
    }

    // var position = vector.create(0, 0);

    // var vel = vector.create(0, 0);
    // vel.setLength(3);
    // vel.setAngle(Math.PI/6);

    render();

    function render(){
        context.clearRect(0, 0, width, height);

        // position.addTo(vel);
        
        for(var i=0; i<numParticles; i+=1){
            var p = particles[i];

            p.accelerate();
            p.update(); 

            // console.log(p.getVelocity());
            // console.log(p.getPosition());

            context.beginPath();
            context.fillStyle = "brown";
            context.arc(p.position.getX(), p.position.getY(), p.radius, 0, Math.PI*2);
            context.fill();

            if(p.position.getY() - p.radius > height){
                p.position.setX(width/2);
                p.position.setY(height);
                p.velocity.setLength(Math.random() * 5 + 6);
                p.velocity.setAngle(-Math.PI/2 + (Math.random() * .2) - .1);
            }
        }

        requestAnimationFrame(render);
    }
}