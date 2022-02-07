let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    x = width/2,
    y = height/2,
    radius = 300,
    angle_x = 0,
    angle_y = 0,
    angle_increment_x = 0.013,
    angle_increment_y = 0.033;

particles = [];

particle = {
    x: 0,
    y: 0,
    xradius: 0,
    yradius: 0,
    angle_x: 0,
    angle_y: 0,
    angle_increment_x: 0,
    angle_increment_y: 0,

    create(xradius, yradius, angle_x, angle_y, angle_increment_x, angle_increment_y){
        let obj = Object.create(this);
        obj.xradius = xradius;
        obj.yradius = yradius;
        obj.angle_x = angle_x;
        obj.angle_y = angle_y;
        obj.angle_increment_x = angle_increment_x;
        obj.angle_increment_y = angle_increment_y;

        return obj;
    },
};

let p1 = particle.create(200,300, 0,0, 0.03,0.033),
    p2 = particle.create(150,200, 0,0, 0.01,0.04),
    p3 = particle.create(300,200, 0,0, 0.07,0.08),
    p4 = particle.create(400,100, 0,0, 0.03,0.0131);

particles.push(p1);
particles.push(p2);
particles.push(p3);
particles.push(p4);

context.translate(width/2,height/2);

function draw(x, y){
    context.beginPath();
    context.fillStyle = "red";
    context.arc(x,y,5,0,Math.PI*2);
    context.fill();  
    context.closePath();
};

render();

function render(){
  context.clearRect(-width/2,-height/2,width,height);
  
  for(let i=0;i<particles.length;i++){
    let p = particles[i];
    draw(p.x, p.y);
    p.angle_x += p.angle_increment_x;
    p.angle_y += p.angle_increment_y;
    p.x = Math.cos(p.angle_x)*p.xradius;
    p.y = Math.sin(p.angle_y)*p.yradius;
  }
  
  requestAnimationFrame(render);
}
    
    