var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var water, waterImg
var form, player, game;

var boards, board1, board2
var  board1Img, board2Img

function preload(){
  waterImg = loadImage("../images/water.jpg");
  board1Img = loadImage("../images/surfboard.png");
  board2Img = loadImage("../images/surfboard.png");
 
  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(waterImg);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}
