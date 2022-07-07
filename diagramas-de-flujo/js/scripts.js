const premiumGas=23.90;
const magnaGas = 22.09;
document.querySelector("#calcular-boton").addEventListener("click",precioTotal)

// function darPrecio(){
//     let costoTotal = precioTotal();

// }

function precioTotal(){
    let litros= 0;
    let dia =document.querySelector("#tipoGasolina").value;
    let total = 0;

   if (document.querySelector("#litros").value == '') {
    const alert = document.querySelector("#total").innerHTML='<div class=" is-size-4 notification is-info is-warning has-text-centered ">Ingresar la cantidad de litros<div>'
        return alert;
   }else{
    litros = parseInt(document.querySelector("#litros").value);
    if(dia == "Magna"){
        total = magnaGas * litros;
        const green = document.querySelector("#total").innerHTML='<div class=" is-size-4 notification is-success is-light">El costo total es <b>$'+total+'</b><div>'
        return green;
    }else if(dia == "Premium"){
        total = (litros * premiumGas);
        const red = document.querySelector("#total").innerHTML='<div class=" is-size-4 notification is-danger is-light">El costo total es <b>$'+total+'</b><div>'
        return red;
    }
   }
}
