const container = document.getElementById("container");
const inputFila = document.getElementById("inputFila");
const inputColumna = document.getElementById("inputColumna");
const btnCrear = document.getElementById("btnCrear");
const aplicarColor = document.getElementById("aplicarColor");
const colorFondo=document.getElementById("colorFondo");
const btnLapiz=document.getElementById("lapiz");
const btnGoma=document.getElementById("goma");
const tamañoCelda=document.getElementById("tamañoCelda");
const checkBordes=document.getElementById("checkBordes");
let estaPintando=true;

btnGoma.addEventListener("click",function(){
    estaPintando=false;
    btnLapiz.classList.remove("resaltado-botones");
    btnGoma.classList.add("resaltado-botones");
});

btnLapiz.addEventListener("click", function () {
  estaPintando = true;
  btnLapiz.classList.add("resaltado-botones");
  btnGoma.classList.remove("resaltado-botones");
});

btnCrear.addEventListener("click", function(){
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${inputFila.value}, 1fr)`;
    for(let i=0; i<inputFila.value; i++){
        for(let j=0; j<inputColumna.value; j++){
            const celda = document.createElement("div");
            celda.style.width=""
            
            celda.classList.add("border");

            celda.style.background = `${colorFondo.value}`;

            tamañoCelda.addEventListener("input", function(){
                celda.style.width = `${tamañoCelda.value}px`;
                celda.style.height = `${tamañoCelda.value}px`;
            });
            
            checkBordes.addEventListener("input", function(){
                celda.classList.toggle("border");
            });

            celda.addEventListener("click", function(){
                if (estaPintando){
                    celda.style.background = `${aplicarColor.value}`;
                }else{
                    celda.style.background = `${colorFondo.value}`;
                }               
            });

            container.appendChild(celda);
        }
    }
});

