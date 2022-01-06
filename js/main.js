window.onload = function(){
    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d")
        width = canvas.width = window.innerWidth
        height = canvas.height = window.innerHeight;

    var list = ["red","green","blue","purple"];
    for(var i=0;i<100;i++){
        context.beginPath();
        context.strokeStyle =  list[Math.floor(Math.random()*list.length)];
        context.moveTo(Math.random()*width, Math.random()*height);
        context.lineTo(Math.random()*width, Math.random()*height);
        context.stroke();
    }
}
