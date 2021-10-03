// Tooltip Bootstrap 5.1.1
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});


/*Botón comenzar evento click

const botonComenzar =document.getElementById("botonComenzar");
//Método
botonComenzar.addEventListener("click",function(){
   alert("Estimado usuario, muchas gracias por visitarnos a continuación completa el siguiente formulario.")
})

*/
botonCompletar

//Formulario Typeform

function Datos(){
    let nombreCliente = document.getElementById("nombre_cliente").ariaValueMax;
    let nombreCliente = document.getElementById("apellido_cliente").ariaValueMax;
    let telefonoCliente = document.getElementById("telefono_cliente").ariaValueMax;
    let emailCliente = document.getElementById("email_cliente").ariaValueMax;
}

let vuelo = '';

let destinoPatagonia = document.getElementById("patagoñia")
let destinoConcepcion = document.getElementById("concepcion")
let destinoArica = document.getElementById("arica")

if (destinoPatagonia.checked){
    vuelo = destinoPatagonia.value;
} else if (destinoConcepcion.checked) {
    vuelo = destinoConcepcion.value;
} else if (destinoArica.checked){
    vuelo = destinoArica.value;
}

let opcionales = '';
let equipajedeMano = document.getElementById("bolso");
let equipajedeCabina = document.getElementById("maleta");

if (equipajedeMano.checked){
    opcionales = equipajedeMano.value;
} else if (equipajedeCabina.checked) {
    opcionales = equipajedeCabina.value;
}

let packpromocional = [];

let vueloTour = document.getElementById("tour");
let vueloHospedaje = document.getElementById("hospedaje")
let vueloTourHospedaje = document.getElementById("TouryHospedaje");

if(vueloTour.checked){
    packpromocional.push(vueloTour.value);
}

if(vueloHospedaje.checked){
    packpromocional.push(vueloHospedaje.value);
}

if(vueloTourHospedaje.checked){
    packpromocional.push(vueloTourHospedaje.value);
} 


let mensajeFinal="El pasajero: "+ nombreCliente+
                ", telefono: "+ telefonoCliente+
                ", email: "+emailCliente+
                "ha reservado el vuelo con destino a: ";+vuelo+
                "opcionales "+opcionales;


for (let i = 0; i < packpromocional.length; i++) {
    const element = packpromocional[i];
    
    mensajeFinal+- element + "";
}                
                
const botonCompletar =document.getElementById("botonCompletar");
//Método
botonCompletar.addEventListener("click",function(){
   alert("Estimado usuario, sus datos han sido completados satifactoriamente");
})

