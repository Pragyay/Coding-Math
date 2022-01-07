window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,

        particles = [],
        numParticles = 50;

    for(var i=0;i<numParticles;i+=1){
        particles.push( particle.create(width/2, height/2, Math.random() * 4 + 1, 
            Math.random() * Math.PI*2 ));
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
            p.update(); 

            console.log(p.getVelocity());
            console.log(p.getPosition());


            context.beginPath();
            context.arc(p.position.getX(), p.position.getY(), 5, 0, Math.PI*2);
            context.fill();
            // console.log("created circle");
        }

        requestAnimationFrame(render);
    }
}