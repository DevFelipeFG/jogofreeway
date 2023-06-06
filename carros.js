//carro 1


let xCarro = 700;
let yCarro = 43;
let velocidadeCarro = 10;

//carro 2
let xCarro2 = 700;
let yCarro2 = 100;
let velocidadeCarro2 = 5;

//carro3
let xCarro3 = 700;
let yCarro3 = 153;
velocidadeCarro3 = 7;

//carro4
let xCarro4 = 700;
let yCarro4 = 210;
let velocidadeCarro4 = 9;

//carro5
let xCarro5 = 700;
let yCarro5= 317;
let velocidadeCarro5 = 6;

//carro6
let xCarro6 = 700;
let yCarro6 = 265;
let velocidadeCarro6 = 8;



function movimentaCarro(){
  xCarro -= velocidadeCarro;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
  xCarro4 -= velocidadeCarro4;
  xCarro5 -= velocidadeCarro5;
  xCarro6 -= velocidadeCarro6;
}


function voltaPosicaoInicial(){
  if(xCarro < -40){
    xCarro = 700
  }
  if (xCarro2 < -40){
    xCarro2 = 700
  }
  if (xCarro3 < -40){
    xCarro3 =700
  }
  if (xCarro4 < -40){
    xCarro4 = 700
  }
  if (xCarro5 <-40){
    xCarro5 = 700
  }
  if (xCarro6 < -40){
    xCarro6 = 700
  }
}