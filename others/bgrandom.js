var r = Math.floor(Math.random()*255+1);
var g = Math.floor(Math.random()*255+1);
var b = Math.floor(Math.random()*255+1);
var wspol = 4;
var io1 = 0;
var io2 = 0;
var io3 = 0;
var parametr = r;
function tlo(){
    if(io1==0){
    if(r<255){r += wspol;} // jezeli r jest mn  iejsze od 255
    if(r>=255){io1 = 1;}} // jezeli r jest wieksze lub rowne 255
    if(io1==1){
      if(r>0){r -= wspol;}
      if(r<=0){io1 = 0}
    }
    if(io2==0){
    if(g<255){g += wspol;} // jezeli r jest mn  iejsze od 255
    if(g>=255){io2 = 1;}} // jezeli r jest wieksze lub rowne 255
    if(io2==1){
      if(g>0){g -= wspol;}
      if(g<=0){io2 = 0}
    }
    if(io3==0){
    if(b<255){b += wspol;} // jezeli r jest mn  iejsze od 255
    if(b>=255){io3 = 1;}} // jezeli r jest wieksze lub rowne 255
    if(io3==1){
      if(b>0){b -= wspol;}
      if(b<=0){io3 = 0}
    }
console.log(r + " " + g + " " + b);
document.getElementById('b1').style.background = "rgb(" +r + "," +g + ","+b+ ")";
}
