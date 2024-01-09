song = "";
function preload()
{
song = loadsound(music.mp3);


}



scoreleftwrist= 0;
scorerightwrist=0;

Peter_pan_song="";
Harry_potter_theme_song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}



function draw(){
    image(video,0,0,600,530);
    fill("#FF0000");
    stroke("#FF0000");
    if(scorerightwrist > 0.2)
    {
        circle(rightWrist_x,rightWrist_y,20);

        if(rightWrist_y >0 && rightWrist_y <= 100)
        {document.getElementById("speed").innerHTML = "speed=0.5x";
    song.rate(0.5);}
    else if(rightWrist_y >100 && rightWrist_y <= 200)
    {
        document.getElementById("speed").innerHTML = "speed=1x";
        song.rate(1);
    }
else if(rightWrist_y >200 && rightWrist_y <= 300)
    {
        document.getElementById("speed").innerHTML = "speed=1.5x";
        song.rate(1.5);
    }
    else if(rightWrist_y >300 && rightWrist_y <= 400)
    {
        document.getElementById("speed").innerHTML = "speed=2x";
        song.rate(2);
    }
    else if(rightWrist_y >400 && rightWrist_y <= 500)
    {
        document.getElementById("speed").innerHTML = "speed=2x";
        song.rate(2);
    }

    
}
}
if(scoreleftwrist > 0.2)
{
    circle(leftWrist_x,leftWrist_y,20);
     InNumberleftWrist_y = Number(leftWrist_y); 
     remove_decimals = floor(InNumberleftWrist_y); 
     volume = remove_decimals/500; 
     document.getElementById("volume").innerHTML = "Volume = " + volume;
      song.setVolume(volume);

}
function play() 
{ song.play();
     song.setVolume(1);
      song.rate(1); 
    }
    
function modelLoaded(){
    console.log("poseNet Is Initialized");
}
 function gotposes(results)
 {
 if (results.length > 0)
 {
console.log(results);
scorerightwrist = results[0].pose.keypoints[10].score;
scoreleftwrist = results[0].pose.keypoints[9].score;
console.log("scorerightwrist = " + scorerightwrist + " scoreleftwrist = " + scoreleftwrist);

       leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+ leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+ rightWrist_y);


    }
}

