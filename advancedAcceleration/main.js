window.onload = function(){
    var canvas = document.getElementById('canvas'),
        context = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        ship = particle.create(width/2, height/2, 0, 0),
        acc = vector.create(0, 0),
        angle = 0,
        turningRight = false,
        turningLeft = false,
        accelerating = false;
    
    // context.fillStyle = 'black';
    // context.fillRect(0,0,width,height);

    document.body.addEventListener("keydown", function(event){
        switch(event.key){
            case "w":
                accelerating = true;
                break;
            // case "s":
            //     accelerating = true;
            //     break;
            case "a":
                turningLeft = true;
                break;
            case "d":
                turningRight = true;
                break;
            default:
                break;
        }
    });

    document.body.addEventListener("keyup", function(event){
        switch(event.key){
            case "w":
                accelerating = false;
                break;
            // case "s":
            //     accelerating = false;
            //     break;
            case "a":
                turningLeft = false;
                break;
            case "d":
                turningRight = false;
                break;
            default:
                break;
        }
    });
  
    render();

    function render(){
        context.clearRect(0, 0, width, height);

        if(turningLeft){
            angle -= 0.05;
        }
        if(turningRight){
            angle += 0.05;
        }

        acc.setAngle(angle);

        if(accelerating){
            acc.setLength(0.1);
        }else{
            acc.setLength(0);
        }

        ship.accelerate(acc);

        ship.update(); 

        // console.log(p.position.getX(), p.position.getY());
        context.save();
        context.translate(ship.position.getX(), ship.position.getY());
        context.rotate(angle);

        context.fillStyle = "red";
        context.beginPath();
        // context.lineWidth = 5;
        context.moveTo(20, 0);
        context.lineTo(-20, -15);
        context.lineTo(-20, 15);
        context.lineTo(20, 0);
        context.fill();
        

        if(accelerating){
            context.strokeStyle = "orange";
            context.beginPath();
            context.lineWidth = 3;
            context.moveTo(-20, 0);
            context.lineTo(-40, 0);

            context.moveTo(-20, 7);
            context.lineTo(-40, 7);

            context.moveTo(-20, -7);
            context.lineTo(-40, -7);
            context.stroke();
        }
       
 
        context.restore();

        if(ship.position.getX() < 0){
            ship.position.setX(width);
        }   
        if(ship.position.getX() > width){
            ship.position.setX(0);
        }
        if(ship.position.getY()< 0){ 
            ship.position.setY(height);
        }
        if(ship.position.getY() > height){
            ship.position.setY(0);
        }

        // console.log("created circle");        
        requestAnimationFrame(render);
    }
}