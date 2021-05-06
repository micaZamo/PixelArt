const contenedor = document.getElementById("contenedor");
const inputFila = document.getElementById("inputFila");
const inputColumna = document.getElementById("inputColumna");
const btnReiniciar = document.getElementById("btnReiniciar");
const aplicarColor = document.getElementById("aplicarColor");
const colorFondo=document.getElementById("colorFondo");
const btnLapiz=document.getElementById("lapiz");
const btnGoma=document.getElementById("goma");
const tamañoCelda=document.getElementById("tamañoCelda");
const bordes=document.getElementById("bordes");
let estaPintando=true;
let pintado;
//Agrego el boton para borrar
btnGoma.addEventListener("click",function(){
    estaPintando=false;
    btnLapiz.classList.remove("resaltado-botones");
    btnGoma.classList.add("resaltado-botones");
});
//Agrego el boton para pintar 
btnLapiz.addEventListener("click", function () {
  estaPintando = true;
  btnLapiz.classList.add("resaltado-botones");
  btnGoma.classList.remove("resaltado-botones");
});
//Agrego boton para reiniciar
btnReiniciar.addEventListener("click",function(){
    inputColumna.value="";
    inputFila.value="";
    colorFondo.value="#ffffff";
    tamañoCelda.value="";
    contenedor.innerHTML = "";
})
//Creo la grilla donde vamos a pintar
inputFila.addEventListener("input",dibujarGrilla);
inputColumna.addEventListener("input",dibujarGrilla);
function dibujarGrilla(){
    contenedor.innerHTML = "";
    contenedor.style.gridTemplateColumns = `repeat(${inputFila.value}, 1fr)`; 
    for(let i=0; i<inputFila.value; i++){
        for(let j=0; j<inputColumna.value; j++){
            const celda = document.createElement("div");
            celda.style.width=""
            
            celda.classList.add("border");

            colorFondo.addEventListener("input", function(){
                if (!celda.pintado){
                   celda.style.background = `${colorFondo.value}`; 
                }
            });

            //agregamos  evento input que modificara el tamaño de los div que forman la grilla
            tamañoCelda.addEventListener("input", function(){
                celda.style.width = `${tamañoCelda.value}px`;
                celda.style.height = `${tamañoCelda.value}px`;
            });
            
            bordes.addEventListener("input", function(){
                celda.classList.toggle("border");
            });
            
            celda.addEventListener("click", function(){
                if (estaPintando){
                    celda.style.background = `${aplicarColor.value}`;
                    celda.pintado=true;
                }else{
                    celda.style.background = `${colorFondo.value}`;
                    celda.pintado=false;
                }               
            });

            contenedor.appendChild(celda);
        }
    }
}

