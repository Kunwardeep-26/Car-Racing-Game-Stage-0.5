var canvas,backgroundImage;
var database;
var gameState = 0;
var playeCount;
var form,game,player;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();  
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){
 
  
}

