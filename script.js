document.addEventListener("keydown",movePlayer);
var obstacleBox = document.getElementById ("obstacle");
var playerBox = document.getElementById("player");
var playerTop = 200;
var playerLeft = 200;


// 38 up
// 37 left
// 40 down
// 39 right
function movePlayer(event){
  if(event.keyCode == 38){
    playerTop = playerTop - 10;
    playerBox.style.top = playerTop + "px";
  } else if(event.keyCode == 40){
    playerTop = playerTop + 10;
    playerBox.style.top = playerTop + "px";
  } else if(event.keyCode == 37){
    playerLeft = playerLeft - 10;
    playerBox.style.left = playerLeft + "px";
  } else if(event.keyCode == 39){
    playerLeft = playerLeft + 10;
    playerBox.style.left = playerLeft + "px";
  }
}


var obstacleTop = 0;
var oldNumber = 0;


function moveObstacle(){

  if(oldNumber < Math.floor(obstacleTop/window.innerHeight)){
    obstacleBox.style.left = (Math.random() * window.innerWidth) + "px";
  }
oldNumber = Math.floor(obstacleTop / window.innerHeight);


  obstacleTop = obstacleTop + 5;
  obstacleBox.style.top = (obstacleTop %window.innerHeight) + "px";
  setTimeout(moveObstacle, 30);
}

window.onload = moveObstacle; //addEventListener
