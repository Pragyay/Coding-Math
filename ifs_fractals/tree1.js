let canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;

let rules = [
    {
        a: 0.05,
        b: 0,
        c: 0,
        d: 0.4,
        tx: -0.06,
        ty: -0.47,
        weight: 0.143,
        color: "brown"
    },
    {
        a: -0.05,
        b: 0,
        c: 0,
        d: -0.4,
        tx: -0.06,
        ty: -0.47,
        weight: 0.143 ,
        color: "brown"
    },
    {
        a: 0.03,
        b: -0.14,
        c: 0,
        d: 0.26,
        tx: -0.16,
        ty: -0.01,
        weight: 0.143,
        color: "brown" 
    },
    {
        a: -0.03,
        b: 0.14,
        c: 0,
        d: -0.26,
        tx: -0.16,
        ty: -0.01,
        weight: 0.143,
        color: "brown"
    },
    {
        a: 0.56,
        b: 0.44,
        c: -0.37,
        d: 0.51,
        tx: 0.3,
        ty: 0.15,
        weight: 0.143,
        color: "green"
    },
    {
        a: 0.19,
        b: 0.07,
        c: -0.1,
        d: 0.15,
        tx: -0.2,
        ty: 0.28,
        weight: 0.143,
        color: "green"
    },
    {
        a: -0.33,
        b: -0.34,
        c: -0.33,
        d: 0.34,
        tx: -0.54,
        ty: 0.39,
        weight: 0.143,
        color: "green"
    }
]

context.translate(width/2, height/2);

let x = Math.random(),
    y = Math.random();

iterate();

function iterate(){
    for(let i=0; i<1000; i++){
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
//     context.fillRect(x * 300, -y * 300, 1, 1);
// }

function plot(x, y){
    // context.fillStyle = "white";
    context.fillRect(x * 300, -y * 300, 1, 1);
}
