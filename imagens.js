//imagens e sons do jogo


let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;
let imagemCarro4;
let imagemCarro5;
let imagemCarro6;

let somDaTrilha;
let somDaColisao;
let somDoPonto;


function preload(){
   imagemDaEstrada = loadImage ("imagens/estrada.png")
   imagemDoAtor = loadImage ("imagens/ator-1.png")
   imagemCarro = loadImage ("imagens/carro-1.png")
   imagemCarro2 = loadImage ("imagens/carro-2.png")
   imagemCarro3 = loadImage ("imagens/carro-3.png")
   imagemCarro4 = loadImage ("imagens/carro-3.png")
   imagemCarro5 = loadImage ("imagens/carro-2.png")
   imagemCarro6 = loadImage ("imagens/carro-1.png")
  
   somDaTrilha = loadSound ("sons/trilha.mp3")
   somDaColisao = loadSound ("sons/colidiu.mp3")
   somDoPonto = loadSound ("sons/pontos.wav")
}


function mostraCarro(){
  image(imagemCarro, xCarro, yCarro ,55, 35);
  image(imagemCarro2, xCarro2, yCarro2 ,55, 35);
  image(imagemCarro3, xCarro3, yCarro3 ,55, 35);
  image(imagemCarro4, xCarro4, yCarro4 ,55, 35);
  image(imagemCarro5, xCarro5, yCarro5 ,55, 35);
  image(imagemCarro6, xCarro6, yCarro6 ,55, 35);
}