let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    fl = 300,
    particles = [],
    numParticles = 200,
    centerZ = 1000,
    baseAngle = 0,
    rotationSpeed = 0.01;

// get random int between specified range
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.random() * (max-min)+min;
}
// returns negative value if particleB is ahead of particleA, 
// positive if particleA is ahead of particleB.
function zsort(particleA, particleB) {
    return particleB.z - particleA.z;
}
// normalize value in specified range
function normalize(value, min, max){
    return (value-min)/(max-min);
}

function update() {
    baseAngle += rotationSpeed;
    particles.sort(zsort);
    context.clearRect(-width / 2, -height / 2, width, height);
    for(var i = 0; i < numParticles; i += 1) {
        var particle = particles[i],
            perspective = fl / (fl + particle.z);

        context.save();
        context.scale(perspective, perspective);
        context.translate(particle.x, particle.y);
        context.globalAlpha = normalize(particle.y, -2000, 2000);

        context.beginPath();
        context.fillStyle = particle.color;
        context.arc(0, 0, 40, 0, Math.PI * 2, false);
        context.fill();

        context.restore();

        particle.x = Math.cos(particle.angle + baseAngle) * particle.radius;
        particle.z = centerZ + Math.sin(particle.angle + baseAngle) * particle.radius;
        particle.y -= 10;

        if(particle.y < -2000) {
            particle.y = 2000;
        }
    }
    requestAnimationFrame(update);
}

// loop to set properties of each particle and push it to particles array
for(var i = 0; i < numParticles; i += 1) {
    var particle = {
        angle: getRandomInt(0, Math.PI * 2),
        radius: getRandomInt(100, 1100),
        y: getRandomInt(2000, -2000),
        color: `hsl(${Math.random() * 360}, 50%, 50%)`
    };
    particle.x = Math.cos(particle.angle + baseAngle) * particle.radius;
    particle.z = centerZ + Math.sin(particle.angle + baseAngle) * particle.radius;
    particles.push(particle);
}

context.translate(width / 2, height / 2);

document.body.addEventListener("mousemove", function(event) {
    rotationSpeed = (event.clientX - width / 2) * 0.00005;
});

update();




