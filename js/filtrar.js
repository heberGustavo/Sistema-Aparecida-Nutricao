var filtro = document.querySelector('#filtrar-tabela');

filtro.addEventListener('input', function(){

    var pacientes = document.querySelectorAll('.paciente');

    if(this.value.length > 0){
        for (let i = 0; i < pacientes.length; i++) {

            var paciente = pacientes[i];
            var nomeTd = paciente.querySelector('.info-nome');
            var nome = nomeTd.textContent;
    
            //Filtro ao digitar letra
            var expressao = new RegExp(this.value, 'i');
    
            if(!expressao.test(nome)){
                paciente.classList.add('invisivel');
            }
            else{
                paciente.classList.remove('invisivel');
            }
        }
    }
    else{
        //Se campo vazio remove a class de todos
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('invisivel');

        }
    }
        
});
