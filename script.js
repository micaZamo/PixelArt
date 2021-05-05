const container = document.getElementById("container");
const inputFila = document.getElementById("inputFila");
const inputColumna = document.getElementById("inputColumna");
const btnGrilla = document.getElementById("btnGrilla");
const aplicarColor = document.getElementById("aplicarColor");
const colorFondo=document.getElementById("colorFondo");
const btnLapiz=document.getElementById("lapiz");
const btnGoma=document.getElementById("goma");
let estaPintando=true;

btnGoma.addEventListener("click",function(){
    estaPintando=false;
    btnLapiz.classList.toggle("resaltado-botones");
    btnGoma.classList.toggle("resaltado-botones");
});

btnLapiz.addEventListener("click", function () {
  estaPintando = true;
  btnLapiz.classList.toggle("resaltado-botones");
  btnGoma.classList.toggle("resaltado-botones");
});

btnGrilla.addEventListener("click", function(){
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${inputFila.value}, 1fr)`;
    for(let i=0; i<inputFila.value; i++){
        for(let j=0; j<inputColumna.value; j++){
            const celda = document.createElement("div");
            
            celda.classList.add("border");

            celda.style.background = `${colorFondo.value}`;
            
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

