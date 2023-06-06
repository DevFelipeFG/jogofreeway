function setup() {
    createCanvas(500, 400);
    somDaTrilha.loop(0,1,0.10);
  }
  
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
    voltaPosicaoInicial();
    verificarColisao();
    incluiPontos();
    marcaPontos();
    
    
  }
  
  