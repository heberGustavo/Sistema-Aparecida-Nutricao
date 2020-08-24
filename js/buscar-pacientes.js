var botaoBuscar = document.querySelector('#buscando-pacientes');

botaoBuscar.addEventListener('click', function(){
    console.log('Buscando ...');

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){

        var erroAjax = document.querySelector('#erro-ajax');
        if(xhr.status == 200){

            erroAjax.classList.add('invisivel');

            //Converte a string para objeto JS
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            console.log(pacientes);

            pacientes.forEach(paciente => {
                adicionaPacienteNaTabela(paciente);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove('invisivel');
        }
    });

    xhr.send();
});