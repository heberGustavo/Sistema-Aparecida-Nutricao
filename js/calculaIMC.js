//Linha
var pacientes = document.querySelectorAll('.paciente');

for (i = 0; i < pacientes.length; i++) {

    paciente = pacientes[i];

    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');

    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imcDaLinha = paciente.querySelector('.info-imc');

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);
    if (!pesoValido) {
        pesoValido = false;
        imcDaLinha.textContent = "Peso inválido!";
        paciente.classList.add('paciente-invalido');
    }

    if (!alturaValida) {
        alturaValida = false;
        imcDaLinha.textContent = "Altura inválida!";
        paciente.classList.add('paciente-invalido');
    }

    if (pesoValido && alturaValida) {
        var imc = calcularIMC(peso, altura);
        imcDaLinha.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000)
        return true;
    else
        return false;
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 4.0)
        return true;
    else
        return false;
}

function calcularIMC(peso, altura){
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}