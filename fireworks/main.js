var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        numParticles = 400;

let mouse = {
    x: width/2,
    y: height/2
}

let particles = [];
document.body.addEventListener('click', function(event){
    mouse.x = event.clientX;
    mouse.y = event.clientY;

    // console.log(mouse);
 
    let angle_increment = Math.PI*2/numParticles;

    for(var i=0;i < numParticles;i++){
        let p = particle.create(mouse.x, mouse.y, Math.random()*5, 
            angle_increment*i, 0.03, `hsl(${Math.random() * 360}, 50%, 50%)`);
        particles.push(p);
    }
    for(var i=0;i < numParticles;i++){
        console.log(particles[i].color);
    }
});

render();

function render(){
    // context.clearRect(0, 0, width, height);
    context.fillStyle = "rgba(0,0,0,0.05)";
    context.fillRect(0,0,width,height);

    particles.forEach((particle, i) => {

        context.save();
        context.globalAlpha = particle.alpha;
        context.beginPath();
        context.fillStyle = particles[i].color;
        // console.log(particles[i].color);
        context.arc(particle.position.getX(), particle.position.getY(), 3, 0, Math.PI*2);
        context.fill();
        context.closePath();
        context.restore();
        
        particle.addfriction();
        particle.accelerate();
        particle.update(); 
        
        // console.log(Math.sqrt(particle.velocity.getX()*particle.velocity.getX() 
        //  + particle.velocity.getY()*particle.velocity.getY()));
        
        if(particle.alpha <= 0){
            particles.splice(i, 1);
        }
    });
    console.log(particles.length);

    requestAnimationFrame(render);
}