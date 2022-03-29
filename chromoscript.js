/* Declaração de Variáveis */
var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var red = document.getElementById("red");
var green = document.getElementById("green");
var color;


/* Random das cores */
var sequence = [];
var choose= [];


function add(){
    color = Math.floor(Math.random()*4) + 1;
    sequence.push(color)
    console.log(sequence)
    if (color == 1){
        setTimeout(function(){
            document.getElementById("blue").setAttribute("id","");
        },1000);
        setTimeout(function(){
            document.querySelector("div.azul").setAttribute("id","blue");
        },2000);
        
    }else if(color == 2){
        setTimeout(function(){
            document.getElementById("yellow").setAttribute("id","");
        },1000);
        setTimeout(function(){
            document.querySelector("div.amarelo").setAttribute("id","yellow");
        },2000);
        
    }else if(color == 3){
        setTimeout(function(){
            document.getElementById("red").setAttribute("id","");
        },1000);
        setTimeout(function(){
            document.querySelector("div.vermelho").setAttribute("id","red");
        },2000);
    }else{
        setTimeout(function(){
            document.getElementById("green").setAttribute("id","");}
            ,1000);
            setTimeout(function(){
                document.querySelector("div.verde").setAttribute("id","green");
            },2000);
        ;
    }
    
}    
    /* Input das cores do usuário*/
var bl, ye, rrd, gr;


function ble(){
    bl = 1;
    choose.push(1);
    console.log(bl);
}
function ylw(){
    ye = 2;
    choose.push(2);
    console.log(ye);
}
function rd(){
    rrd = 3;
    choose.push(3);
    console.log(rrd);
}
function grn(){
    gr = 4;
    choose.push(4);
    console.log(gr);
}
    
