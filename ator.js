//ator


let xAtor =100;
let yAtor = 366;
let colisao = false;

let meusPontos = 0;
let perdaDePontos =0;


function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
  
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor +=2;
  }
}

function verificarColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  colisao = collideRectCircle(xCarro, yCarro, 55, 35, xAtor, yAtor, 15)
  if (colisao){
   colidiu();
    somDaColisao.play();
    if (meusPontos > 0){
      meusPontos -= 1;
    }
  }
  colisao = collideRectCircle(xCarro2, yCarro2, 55, 35, xAtor, yAtor, 15)
  if (colisao){
     colidiu();
    somDaColisao.play();
    if (meusPontos > 0){
      meusPontos -= 1;
    }
  }
  colisao = collideRectCircle(xCarro3, yCarro3, 55, 35, xAtor, yAtor, 15)
  if (colisao){
     colidiu();
    somDaColisao.play();
    if (meusPontos > 0){
      meusPontos -= 1;
    }
  }
  colisao = collideRectCircle(xCarro4, yCarro4, 55, 35, xAtor, yAtor, 15)
  if (colisao){
    colidiu();
    somDaColisao.play();
    if (meusPontos > 0){
      meusPontos -= 1;
    }
  }
  colisao = collideRectCircle(xCarro5, yCarro5, 55, 35, xAtor, yAtor, 15)
  if (colisao){
    colidiu();
    somDaColisao.play();
    if (meusPontos > 0){
      meusPontos -= 1;
    }
  }
  colisao = collideRectCircle(xCarro6, yCarro6, 55, 35, xAtor, yAtor, 15)
  if (colisao){
    colidiu();
    somDaColisao.play();
    if (meusPontos > 0){
      meusPontos -= 1;
    }
  }
}

function colidiu(){
  yAtor = 366;
}

function incluiPontos(){
  fill(color(255,250,250))
  textAlign(CENTER)
  textSize(25)
  text (meusPontos, width  /2, 27);
}

function marcaPontos(){
  if (yAtor < 15){
    meusPontos += 1;
    somDoPonto.play();
    yAtor = 366;
  }
  
}



