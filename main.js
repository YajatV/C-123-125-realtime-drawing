noseX=0;
noseY=0;
diffrence=0;
rightwristX=0
LeftwristX=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    Canvas=createCanvas(550,550);
    Canvas.position(560,150);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose',gotposes);
}

function modelloaded(){
    console.log("posenet is initialized");
}

function draw(){
    background('#969a97')
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
    }
}

