var titulo  = document.querySelector(".titulo");
titulo.textContent = "Aparecida a Nutricionista";

var pacientes = document.querySelectorAll(".paciente");



for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var tdImc = paciente.querySelector(".info-imc")

    var pesoValido = validaPeso(peso);
    var alturaValido = validaAltura(altura);

    if(!pesoValido){
        console.log("peso invalido");
        pesoValido=false;
        tdImc.textContent = "Peso Invalido";
        paciente.style.backgroundColor = "red";
        
    }
    if(!alturaValido){
        console.log("altura invalido");
        alturaValido=false;
        tdImc.textContent = "Altura Invalido";
        paciente.classList.add("paciente-invalido");
    }
    if(alturaValido==false && pesoValido==false){
        paciente.style.backgroundColor = "purple";
        tdImc.textContent = "Altura e peso Invalido";
    }
    if(alturaValido && pesoValido){
        var imc = calculaImc(peso,altura)
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent=imc;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2)
}

function validaPeso(peso){
    if(peso >= 0 && peso <1000){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <3.0){
        return true;
    }else{
        return false;
    }
}