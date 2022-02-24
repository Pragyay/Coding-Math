let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let rules = [
    //stem
    {
        a: 0,
        b: 0,
        c: 0,
        d: 0.2,
        tx: 0,
        ty: 0.01,
        weight: 0.01,
        color: "yellow"
    },
    // succesively smaller leaflets
    {
        a: 0.85,
        b: 0.04,
        c: -0.04,
        d: 0.85,
        tx: 0,
        ty: 1.6,
        weight: 0.85 ,
        color: "green"
    },
    // largest left hand leaflet
    {
        a: 0.20,
        b: -0.26,
        c: 0.23,
        d: 0.22,
        tx: 0,
        ty: 1.6,
        weight: 0.07,
        color: "red" 
    },
    // largest right hand leaflet
    {
        a: -0.15,
        b: 0.28,
        c: 0.26,
        d: 0.24,
        tx: 0,
        ty: 0.44,
        weight: 0.07,
        color: "blue"
    },
]

context.translate(width/2, height);

let x = Math.random(),
    y = Math.random();

iterate();

function iterate(){
    for(let i=0; i<100; i++){
        let rule = getRule(),
            x1 = x * rule.a + y * rule.b + rule.tx,
            y1 = x * rule.c + y * rule.d + rule.ty;
        x = x1;
        y = y1;
        // plot(x, y, rule.color);
        plot(x, y);
    }
    requestAnimationFrame(iterate);
}

function getRule(){
    let rand = Math.random();
    for(let i=0; i < rules.length; i++){
        let rule = rules[i];
        if(rand < rule.weight){
            return rule;
        }
        rand -= rule.weight;
    }
}

// function plot(x, y, color){
//     context.fillStyle = color;
//     context.fillRect(x * 60, -y * 60, 1, 1);
// }
function plot(x, y){
    context.fillStyle = "green";
    context.fillRect(x * 60, -y * 60, 0.5, 0.5);
}